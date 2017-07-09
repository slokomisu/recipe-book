/*******************************
 Docs
 *******************************/

/* Paths used for "serve-docs" and "build-docs" tasks */
module.exports = {
  base: '',
  globs: {
    eco: '**/*.html.eco'
  },
  paths: {
    clean: '../docs/out/dist/',
    source: {
      config: 'src/theme.config',
      definitions: 'src/definitions/',
      site: 'src/site/',
      themes: 'src/themes/'
    },
    output: {
      examples: '../docs/out/examples/',
      less: '../docs/out/src/',
      metadata: '../docs/out/',
      packaged: '../docs/out/dist/',
      uncompressed: '../docs/out/dist/shared/',
      compressed: '../docs/out/dist/shared/',
      themes: '../docs/out/dist/themes/'
    },
    template: {
      eco: '../docs/server/documents/'
    },
  }
}
