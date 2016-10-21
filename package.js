Package.describe({
  name: 'zatara7:jquery-bracket',
  version: '0.8.0',
  // Brief, one-line summary of the package.
  summary: 'A jQuery plugin that lets users manage single & double elimination brackets for tournament play.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Zatara7/meteor-bracket.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
      'jquery-bracket/dist/jquery.bracket.min.js',
      'jquery-bracket/dist/jquery.bracket.min.css'
    ], 'client'
  );
});
