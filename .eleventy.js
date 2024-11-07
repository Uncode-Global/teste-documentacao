  const path = require('path');
  const fs = require('fs');
  const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {


  
  // Copia o CSS automaticamente para o diretório _site
  eleventyConfig.addPassthroughCopy("src/assets/styles.css");
  eleventyConfig.addPassthroughCopy("src/assets/scripts.js");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("conteudos");
  // eleventyConfig.addGlobalData('conteudoCategoria', () => {
  //   const filePath = path.join(__dirname, 'src/documentacao-alterar/categoria/index.md');
  //   return fs.readFileSync(filePath, 'utf-8');
  // });

  //   let markdownLib = markdownIt({ html: true });
  // eleventyConfig.setLibrary("md", markdownLib);

  // // Adiciona o dado global para o conteúdo da categoria
  // eleventyConfig.addGlobalData('conteudoCategoria', () => {
  //   const filePath = path.join(__dirname, 'src/documentacao-alterar/categoria/index.md');
  //   const markdownContent = fs.readFileSync(filePath, 'utf-8');

  //   // Processa o conteúdo do Markdown e o retorna como HTML
  //   return markdownLib.render(markdownContent);
  // });

  const md = new markdownIt();

  // Adicionar filtro para carregar e renderizar Markdown
  eleventyConfig.addNunjucksFilter("renderMarkdown", (filePath) => {
    const fullPath = path.join(__dirname, 'src', filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    return md.render(content);
  });

  
  return {
    dir: {
      input: "src",   // Diretório de entrada
      output: "_site", // Diretório de saída

    }
  };
};
