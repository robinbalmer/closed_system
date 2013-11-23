define([
  'jquery',
  'underscore',
  'backbone',
  'kinetic',
  'config',
  'views/environment/observe'  
], function($, _, Backbone, Kinetic, ConfigX, EnvironmentObserveView){
	
	//add Environment simulation funcctions to the given View
	function Simulate(View){		
		View = _.extend(View, {
		
			Simulate: {
					
				step: function(){
					console.log('step'); 
				}												
			}			
			
		});		
		
		console.log('extended',View);
		
	}
	
	return Simulate;
});