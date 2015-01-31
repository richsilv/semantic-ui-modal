Package.describe({
  name: "richsilv:semantic-ui-modal",
  summary: "Semantic UI Modals, packaged to play nice with Meteor",
  version: "1.0.7",
  git: "https://github.com/richsilv/semantic-ui-modal.git"

});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.4");
  /* Use or imply other packages.
   
   * Example:
   *  api.use("ui", "client");
   *  api.use("iron-router", ["client", "server"]);
   */

  /*
   * Add files that should be used with this
   * package.
   */
  api.use([
    "templating@1.0.11",
    "nooitaf:semantic-ui@1.8.1"
  ], "client");

  api.add_files([
    "semantic-ui-modal.html",
    "semantic-ui-modal.js",
    "semantic-ui-modal.css",
  ], "client");

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export("GlobalSymbol");
   */
  api.export("SemanticModal");
});

Package.on_test(function(api) {
  api.use("richsilv:semantic-ui-modal");
  api.use("tinytest");

  api.add_files("semantic-ui-modal_tests.js");
});
