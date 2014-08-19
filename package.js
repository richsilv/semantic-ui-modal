Package.describe({
  name: 'semantic-ui-modal',
  summary: 'Semantic UI Modals, packaged to play nice with Meteor'
});

Package.on_use(function (api) {
  /* Use or imply other packages.

   * Example:
   *  api.use('ui', 'client');
   *  api.use('iron-router', ['client', 'server']);
   */

   /*
    * Add files that should be used with this
    * package.
    */
   api.use('templating', 'client');
   api.use('semantic-ui', 'client');
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
  api.use('semantic-ui-modal');
  api.use('tinytest');
  
  api.add_files('semantic-ui-modal_tests.js');
});
