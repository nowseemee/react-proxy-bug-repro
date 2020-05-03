const glob = require("glob");
const fs = require("fs");
const path = require("path");
const { renderToString } = require('stencil-starter/hydrate');

function renderToStringWithUserTheme() {
  const files = glob.sync(path.join(process.cwd(), "/public/**/*.html"));

  return Promise.all(
    files.map(file => {
      try {
        return renderToString(fs.readFileSync(file, "utf8"), {
          prettyHtml: false
        }).then(result => {
          return fs.writeFileSync(file, result.html)
        });
      } catch (error) {
        if (error.code === "EISDIR") {
          return;
        }
        throw error;
      }
    })
  );
}



exports.onPostBuild = function onPostBuild() {
  return renderToStringWithUserTheme()
  .catch(error =>
    console.error(
      "Something went wrong while hydrating the HTML markup",
      error
    )
  );
};
