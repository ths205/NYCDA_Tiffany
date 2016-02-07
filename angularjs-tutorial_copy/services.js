

angular.module('TeamService', ['ngResource'])

.factory('TeamResource', function($resource){

	return $resource('baseball_teams.json', null, null);
	
})

