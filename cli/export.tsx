// export.ts
import fs from "node:fs";
import React from "react"; 
import path from "node:path"; 
import clipboardy from "clipboardy"; 
import { renderToStaticMarkup } from "react-dom/server"; 
import MarkdownToJsx from "../app/components/MarkdownToJsx"; 

// 引数からMarkdownファイル取得 
const inputPath = process.argv[2]; 
if (!inputPath || !fs.existsSync(inputPath)) { 
  console.error("Usage: tsx exports.ts <markdown-file>");
   process.exit(1);
} 

const markdownText = fs.readFileSync(inputPath, "utf-8");

// ReactコンポーネントをHTMLに変換 
const html = renderToStaticMarkup( 
<html lang="ja"> 
  <head> 
    <link rel="stylesheet" href="/app/style.css" /> 
  </head> 
  <body> 
    <MarkdownToJsx markdown={markdownText} themeName="dark" /> 
  </body>   
</html> );

// 出力するHTML（<!DOCTYPE>を含む） 
const outputHTML = `<!DOCTYPE html>\n${html}`;

const outputPath = path.join( path.dirname(inputPath), path.basename(inputPath, path.extname(inputPath)) + ".html" ); 

fs.writeFileSync(outputPath, outputHTML); 
console.log(`Exported to ${outputPath}`);

// クリップボードにコピー（OSによっては動作しない場合もあります） 
clipboardy.writeSync(html); 
console.log("HTML content copied to clipboard.");