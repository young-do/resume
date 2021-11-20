import { marked } from "marked";
import { format } from "prettier";
import * as fs from "fs";

marked.use({
  renderer: {
    heading(text, level) {
      return `
        <h${level}>
          ${
            level > 3
              ? text
              : `<a name="${text}" class="anchor" href="#${text}">${text}</a>`
          }
        </h${level}>`;
    },
  },
});

const md = fs.readFileSync("./index.md").toString();

const contents = marked.parse(md, { breaks: true, smartLists: true });

const script = `
document.addEventListener("scroll", () => {
  const docElem = document.documentElement;
  const docBody = document.body;
  const scrollTop = document.documentElement["scrollTop"] || docBody["scrollTop"];
  const scrollBottom =
    (docElem["scrollHeight"] || docBody["scrollHeight"]) - window.innerHeight;
  const scrollPercent = (scrollTop / scrollBottom) * 100 + "%";

  document
    .getElementById("progress-bar")
    .style.setProperty("--scrollAmount", scrollPercent);
});
`;

const html = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>이력서 - 조영도</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./normalize.css" >
    <link rel="stylesheet" href="./index.css" >
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2LDBHRPKXL"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2LDBHRPKXL');
    </script>
    </head>
  <body>
    <div id="progress-bar"></div>
    <main class="border-box">
    ${contents}
    </main>
    <script>${script}</script>
  </body>
</html>
`;

fs.writeFileSync(
  "index.html",
  format(html, { printWidth: 120, parser: "html" })
);
