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

export default (filePath, context) => {
  const htmlFile = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  return handlebars.compile(htmlFile)({ ...context });
};
