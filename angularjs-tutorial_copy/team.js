angular.module('team_app',['TeamService'])

.controller('MainCtrl',function(TeamResource){

	var self=this;
	self.team_assign;

	self.team_change=function(){

	//TeamResource.get({
		//address: self.team_assign
	//}, function(response){
	//	self.response_obj=response.results;
	//	console.log(response);
	
	//});

    }



})