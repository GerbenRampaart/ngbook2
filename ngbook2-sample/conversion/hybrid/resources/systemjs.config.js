// See also: https://angular.io/docs/ts/latest/quickstart.html
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app',
    'rxjs':                       'node_modules/rxjs',
    '@angular':                   'node_modules/@angular',
    'interestAppNg1':             'js/app.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'rxjs': { defaultExtension: 'js' },
    'ts': { format: 'register', defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var paths = {
    underscore: './node_modules/underscore/underscore.js'
  };

  var config = {
    map: map,
    packages: packages,
    paths: paths
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
