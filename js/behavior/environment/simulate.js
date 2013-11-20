define([
  'jquery',
  'underscore',
  'backbone',
  'kinetic',
  'config',
  'views/environment/observe'  
], function($, _, Backbone, Kinetic, ConfigX, EnvironmentObserveView){
	
	console.log('env behavior run', EnvironmentObserveView);
	
	function Simulate(){
		console.log('env behavior function start');
	}
	
	return Simulate;
});