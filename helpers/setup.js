const hook = require('css-modules-require-hook');
const sass = require('node-sass');

hook({
  extensions: ['.scss'],
  preprocessCss: function (css) {
    const result =  sass.renderSync({
      data: css
    });

    return result.css;
  }
});