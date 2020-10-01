import fs from "fs";
import path from "path";
import handlebars from "handlebars";

export const genScriptTags = (files) => {
  let scripts = "";
  files.forEach(
    (file) =>
      (scripts += `<script src="/${file.name}?v=${file.version}" charset="utf-8"></script>`)
  );
  return scripts;
};

export default (filePath, contexts, script) => {
  const htmlFile = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  let compiledHTML = htmlFile;
  contexts.forEach(
    (context) =>
      (compiledHTML = compiledHTML.replace(context.ip, context.details))
  );
  compiledHTML = compiledHTML.replace(script.insertionPoint, script.tags);
  return compiledHTML;
  // return handlebars.compile(htmlFile.replace(insertionPoint, tags))({
  //   ...context
  // });
};
