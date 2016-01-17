angular.module('ServicesModule', ['ngResource'])


//one request per factory
.factory('Resource_workshop', function($resource)
{
	return $resource('http://maps.googleapis.com/maps/api/geocode/json',null,null);
}

	)