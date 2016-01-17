angular.module('myApp', ['PlayListService'])

.controller('MusicCtrl', function(PlayList){

	var self=this;

    self.input_name="";
    self.input_age="";

    self.playlist= new PlayList();





	})

.controller('GenreCtrl', function(Genres){
	var self=this;
	self.genres=angular.copy(Genres);

	self.is_pop=document.getElementById('pop').checked;

	self.is_rock=document.getElementById('rock').checked;
	self.is_rap=document.getElementById('rap').checked;

	self.array=[];

	if(self.is_pop)
	{
		for( var item in self.genres.pop)
		{
			self.array.push(item);
		}
		return self.array;
		
	}

	if(self.is_rock)
	{
        for(var item in self.genres.rock)
        {
        	self.array.push(item);
        }

        return self.array;	
		

	}

	if(self.is_rap)	
	{
		for(var item in self.genres.rap)
		{
			self.array.push(item);
		}

		return self.array;
		
	}	


	


	
});


//HW Simon create the simon game
