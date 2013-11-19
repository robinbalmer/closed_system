var _app;

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
	kinetic: 'lib/kinetic-v4.5.5.min',
	config: 'config'	
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
  
], function(App){
  // The "app" dependency is passed in as "App"  
  _app = App;
    
  App.initialize();
  
  console.log('main.js init complete');
});