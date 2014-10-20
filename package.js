Package.describe({
  summary: 'Semantic UI Modals, packaged to play nice with Meteor',
  version: "1.0.3",
  git: "https://github.com/richsilv/semantic-ui-modal.git"

});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.4");
  /* Use or imply other packages.

   * Example:
   *  api.use('ui', 'client');
   *  api.use('iron-router', ['client', 'server']);
   */

   /*
    * Add files that should be used with this
    * package.
    */
   api.use('templating@1.0.8', 'client');
   api.use("richsilv:semantic-ui-sass@1.0.0", 'client');
   api.add_files('semantic-ui-modal.html', 'client');
   api.add_files('semantic-ui-modal.js', 'client');

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
   api.export('SemanticModal');
});

Package.on_test(function (api) {
  api.use("richsilv:semantic-ui-modal");
  api.use('tinytest');
  
  api.add_files('semantic-ui-modal_tests.js');
});
