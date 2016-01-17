//The purpose of this workshop is to make requests using ngResource and display results


angular.module('ang_tut', ['ServicesModule'])

.controller('MainCtrl', function(Resource_workshop){

	var self=this;

	self.user_assign;

	

	self.user_change=function()
	{

		Resource_workshop.get({
    	address: self.user_assign

	}, function(response){
		self.response_obj=response.results;
		console.log(response);

	});

	}


})

