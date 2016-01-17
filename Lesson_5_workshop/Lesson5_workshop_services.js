angular.module('PlayListService', [])

.factory('PlayList', function(){

	function PlayList()
	{
		var self=this;

	}
	return PlayList;
}

)

.value('Genres', {
	pop: ['Lay it on me', 'Hero'],
	rock: ['Until the day I die', 'Sidewalks'],
	rap:['Gettin Jiggy Wit it', 'Nuttin but a G thing']

	})	



