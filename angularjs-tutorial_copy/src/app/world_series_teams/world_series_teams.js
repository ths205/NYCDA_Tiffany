(function(){
'use strict';
angular.module('angularTemplate')

.directive('yankeeTeam', function(){
	return {
		template:'<h3>New York Yankees</h3>'

	};

})

.directive('bostonTeam', function(){
	return {
		template:'<h3>Boston Redsox</h3>'

	};

})

.directive('stlouisTeam', function(){
	return {
		template:'<h3>St Louis Cardinals</h3>'

	};

})

.directive('giantsTeam', function(){
	return {
		template:'<h3>San Francisco Giants</h3>'

	};

})

	

.directive('athleticsTeam', function(){
	return {
		template:'<h3>Oakland(Philadelphia) Athletics</h3>'

	};

})

.directive('dodgersTeam', function(){
	return {
		template:'<h3>Los Angelas Dodgers</h3>'

	};

})

.directive('redsTeam', function(){
	return {
		template:'<h3>Cincinati Reds</h3>'

	};

})

	
})();