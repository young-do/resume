import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import type { Heading, Nodes, Root, RootContent } from 'mdast';
import type { Root as HastRoot } from 'hast';
import { unified } from 'unified';

export type ResumeSection = {
  type: 'content' | 'accordion';
  title?: string;
  items?: Array<{
    title: string;
    html: string;
  }>;
  html?: string;
};

export type ParsedResume = {
  meta: Record<string, string>;
  sections: ResumeSection[];
};

type AccordionItem = {
  title: string;
  nodes: RootContent[];
};

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeExternalLinks, { target: '_blank' })
  .use(rehypeStringify);

export const parseResumeMarkdown = async (markdown: string) => {
  const { content, data: meta } = matter(markdown);

  return {
    meta,
    sections: await parseMarkdown(content),
  };
};

const parseMarkdown = async (markdown: string): Promise<ResumeSection[]> => {
  const root = markdownProcessor.parse(markdown) as Root;
  const children = root.children ?? [];
  const sections: ResumeSection[] = [];
  let buffer: RootContent[] = [];
  let index = 0;

  const flushContent = async () => {
    if (buffer.length > 0) {
      sections.push({ type: 'content', html: await renderNodes(buffer) });
      buffer = [];
    }
  };

  while (index < children.length) {
    const heading = children[index];

    if (!isHeading(heading, 2)) {
      buffer.push(heading);
      index += 1;
      continue;
    }

    await flushContent();

    const title = textContent(heading);
    const sectionNodes: RootContent[] = [];
    index += 1;

    while (index < children.length && !isHeading(children[index], 2)) {
      sectionNodes.push(children[index]);
      index += 1;
    }

    const { introNodes, items } = splitH3Items(sectionNodes);

    if (items.length === 0) {
      sections.push({
        type: 'content',
        html: await renderNodes([heading, ...sectionNodes]),
      });
    } else {
      sections.push({
        type: 'accordion',
        title,
        html: await renderNodes(introNodes),
        items: await Promise.all(
          items.map(async (item) => ({
            title: item.title,
            html: await renderNodes(item.nodes),
          })),
        ),
      });
    }
  }

  await flushContent();

  return sections;
};

const isHeading = (node: RootContent, depth: Heading['depth']): node is Heading =>
  node.type === 'heading' && node.depth === depth;

const textContent = (node: Nodes): string => {
  if ('value' in node && typeof node.value === 'string') {
    return node.value;
  }

  if ('children' in node && Array.isArray(node.children)) {
    return node.children.map(textContent).join('');
  }

  return '';
};

const renderNodes = async (children: RootContent[]) => {
  const mdast: Root = { type: 'root', children };
  const hast = (await markdownProcessor.run(mdast)) as HastRoot;

  return markdownProcessor.stringify(hast);
};

const splitH3Items = (nodes: RootContent[]) => {
  const introNodes: RootContent[] = [];
  const items: AccordionItem[] = [];
  let index = 0;

  while (index < nodes.length) {
    const node = nodes[index];

    if (isHeading(node, 3)) {
      break;
    }

    introNodes.push(node);
    index += 1;
  }

  while (index < nodes.length) {
    const heading = nodes[index];

    if (!isHeading(heading, 3)) {
      index += 1;
      continue;
    }

    const itemNodes: RootContent[] = [];
    index += 1;

    while (index < nodes.length && !isHeading(nodes[index], 3)) {
      itemNodes.push(nodes[index]);
      index += 1;
    }

    items.push({
      title: textContent(heading),
      nodes: itemNodes,
    });
  }

  return { introNodes, items };
};
