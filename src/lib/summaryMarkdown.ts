import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import type { Heading, Nodes, Root, RootContent } from 'mdast';
import type { Root as HastRoot } from 'hast';
import { unified } from 'unified';

export type SummarySection = {
  title: string;
  html: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ParsedSummary = {
  meta: Record<string, string>;
  introHtml: string;
  sections: SummarySection[];
  skills: SkillGroup[];
};

const summaryMarkdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeExternalLinks, { target: '_blank' })
  .use(rehypeStringify);

export const parseSummaryMarkdown = async (markdown: string): Promise<ParsedSummary> => {
  const { content, data: meta } = matter(markdown);
  const root = summaryMarkdownProcessor.parse(content) as Root;
  const children = root.children ?? [];
  const introNodes: RootContent[] = [];
  const sections: SummarySection[] = [];
  let skills: SkillGroup[] = [];
  let index = 0;

  while (index < children.length && !isHeading(children[index], 2)) {
    if (!isHeading(children[index], 1)) {
      introNodes.push(children[index]);
    }

    index += 1;
  }

  while (index < children.length) {
    const heading = children[index];

    if (!isHeading(heading, 2)) {
      index += 1;
      continue;
    }

    const title = textContent(heading);
    const sectionNodes: RootContent[] = [];
    index += 1;

    while (index < children.length && !isHeading(children[index], 2)) {
      sectionNodes.push(children[index]);
      index += 1;
    }

    if (title === 'Skills') {
      skills = parseSkillGroups(sectionNodes);
    }

    sections.push({
      title,
      html: await renderNodes(sectionNodes),
    });
  }

  return {
    meta,
    introHtml: await renderNodes(introNodes),
    sections,
    skills,
  };
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
  const hast = (await summaryMarkdownProcessor.run(mdast)) as HastRoot;

  return summaryMarkdownProcessor.stringify(hast);
};

const parseSkillGroups = (nodes: RootContent[]): SkillGroup[] =>
  nodes.flatMap((node) => {
    if (node.type !== 'list') {
      return [];
    }

    return node.children.flatMap((item) => {
      const text = textContent(item);
      const colonIndex = text.indexOf(':');

      if (colonIndex === -1) {
        return [];
      }

      const category = text.slice(0, colonIndex).trim();
      const items = text
        .slice(colonIndex + 1)
        .split(',')
        .map((skill) => skill.trim())
        .filter(Boolean);

      return {
        category,
        items,
      };
    });
  });
