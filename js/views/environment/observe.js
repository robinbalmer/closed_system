define([
  'jquery',
  'underscore',
  'backbone',
  'kinetic',
  'config'
], function($, _, Backbone, Kinetic, ConfigX){
  var EnvironmentObserveView = Backbone.View.extend({
    el: $('#container'),
	render: function(id){
		
		console.log(id);
		
		var environment = _app.collection.getByCid(id);
		
		if(environment){			
		
			var $stage = $('<div id="stage">');		
			$stage.css({
				'width': environment.get('stage').get('width') + 'px',
				'height': environment.get('stage').get('height') + 'px'			
			});
		
			var el = $('#container');
		
			el.append($stage);
		
			var stage = new Kinetic.Stage({
				container: 'stage',
				width: environment.get('stage').get('width'),
				height: environment.get('stage').get('height')
			});
		
			var layer = new Kinetic.Layer({
				width: environment.get('stage').get('width'),
				height: environment.get('stage').get('height')
			})
		
			environment.get('blips').each(function(blip){
				var blip_symbol = new Kinetic.Circle({
					
					id: blip.cid,
					x: blip.get('x'),
					y: blip.get('y'),
					radius: Math.random(Config.blips.size_max) + Config.blips.size_min,
					fill: Config.blips.color
				
				});
				
				layer.add(blip_symbol);

			});
		
			stage.add(layer);
		
			environment.get('stage').set('kinetic', stage);				
		}
		
		console.log('observe view rendered');
	},
    refresh: function(){
   
      console.log('observe view refreshed');
    },
	inititalize: function(){
		
	   console.log('observe view initialized');
	   	
	}
  });
  // Our module now returns our view
  return EnvironmentObserveView;
});