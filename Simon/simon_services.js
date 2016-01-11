angular.module('Simon_Service', [])

.factory('Color', function(){
	function Color(name,hex_color){

		var self=this;

		self.name=name;
		self.hex_color=hex_color;
		//checks state of the color button that is pressed or not pressed
		self.state="not pressed";




	}
	return Color;


})

.factory('Simon', function(Color, $timeout)
{
	function Simon(){

		var self=this;

		//player picks colors to store in an array
		self.player_colors=[];

		//computer selects colors to store in an array
		self.computer_colors=[];


        //colors of the array in the game
		self.game_colors=[
			new Color('red','#ff0000'),
			new Color('yellow','#ffdd00'),
			new Color('blue','#0066ff'),
			new Color('green','#55ee00')
		];
		//self.round=0;
		
		//computer's turn, player's turn or idle (no one's turn)
		self.state="idle";



		
		

		
	}

	Simon.prototype.start=function()
	{
		var self=this;
		console.log("Game Start");
		//array to hold colors player puts in
		self.player_colors=[];

		//array to hold colors computer selects
		self.computer_colors=[];
		self.state="computer turn";
		self.add_color_to_computer_seq();
		self.show_sequence();


	}

    //shows the sequence of the colors the computer has pressed
	Simon.prototype.show_sequence=function(color_index)
	{
		var self=this;

		//checks to make sure the color index is defined
		if(!color_index){
			color_index=0;

		}
		var color=self.computer_colors[color_index];
		
		//
		color.state="pressed";

		

        $timeout(function(){

        	


 	         color.state="not pressed";

             //checks to make sure timeout only works as long sequence is displaying
             // the array disconitnues when it out of bounds with the array 
 	         if(color_index < self.computer_colors.length-1)
             {


 	               self.show_sequence(color_index+1);

 	               $timeout(function(){   

 	                  if((color==self.computer_colors[color_index+1]))
 	                  {
 	               	       self.show_sequence(color_index+1);

 	                  }

 	                 }, 900);


 	            
 	               
 	               
 	         }

 	           

 	        

 	                 

 	         else{
 	         	   self.player_colors=[];
 	         	   self.state="player turn";
 	         }


         },900); //1000 milliseconds equals 1 second

        //$timeout(function(){   

 	      //            if((color==self.computer_colors[color_index+1]))
 	        //          {
 	          //     	       self.show_sequence(color_index+1);

 	            //      }

 	              //   }, 900);




	    

	    



		
	}


	//helps add a color to the array of colors that the computer holds

	Simon.prototype.add_color_to_computer_seq=function()
	{
		var self=this;
		var ran_color=self.game_colors[Math.floor(Math.random()*self.game_colors.length)];
		self.computer_colors.push(ran_color);

	}

    //helps add a color to an array of colors the player has selected
	Simon.prototype.add_color_to_player_seq=function(color_usr)
	{
		var self=this;
		var color_copy=color_usr;
		self.player_colors.push(color_copy);
	}

	
    //this method calls the methods to add a color to the player's array and to compare
    // the colors players has selected and what colors the computer has selected
	Simon.prototype.on_button_clicked=function(color)
	{
		var self=this;

		if(self.state =='player turn')
		{
		  self.add_color_to_player_seq(color);
		  self.compare_seqences();
		}  
	}

    //checks that it is the players turn so that the player can select the button
	Simon.prototype.on_button_down=function(color)
	{
		var self=this;
		if(self.state =='player turn')
		{
		  color.state="pressed";
		} 


	}

	//checks if it is the player's turn if it is the player's turn then the state of the 
	//color that is not pressed

	Simon.prototype.on_button_up=function(color)
	{
		var self=this;

		if(self.state =='player turn')
		{

		   color.state="not pressed";
		}  

	}

	//checks to see if the colors the player has selected matches the colors the computer has selected

	Simon.prototype.compare_seqences=function()
	{
		var self=this;
		var last_color_player=self.player_colors[self.player_colors.length-1];
		var color_computer=self.computer_colors[self.player_colors.length-1];

		if(last_color_player!=color_computer)
		{
			console.log('Game Over');
			self.state="idle";

		}

		else
		{
			if(self.player_colors.length==self.computer_colors.length)
			{
				self.state="computer turn";
				self.add_color_to_computer_seq();
				self.show_sequence();
			}	

		}	


	}

    
/**
	Simon.prototype.computer_colors_picked=function(c)
	{
		var self=this;
		
     	self.computer.push(c);

	   
	}

	Simon.prototype.player_colors_picked=function(a){

        var self=this;
        for(var j=0; j<self.round; j++)
	    {
		   var your_select=your_pick(a);
		   self.player_color.push(your_select);
	    }

	}



	Simon.prototype.your_pick=function(a)
  {
    if(a=="r")
    {
       var self=this;	

	  //self.red_button=true;
	  //self.red=angular.element(document.querySelector('#red'));


	  return self.red;
	}  

	else if(a=="g"){

		//self.green_button=true;
		//self.green=angular.element(document.querySelector('#green'));
		return self.green;
	}

	else if(a=="b"){

		//self.blue_button=true;
		var self=this;
		

		return self.blue;
	}

	else if(a=="y"){
		var self=this;

		//self.yellow_button=true;
		//self.yellow=angular.element(document.querySelector('#yellow'));
		return self.yellow;
	}



}

Simon.prototype.check_colors_match=function(a)
{
	 var self=this;

	for (var i = 0; i < self.rounds; i++) {

		if(self.you[i]==self.computer[i])
		{
			continue;
		}

		else{
			console.log("Game Over");
			return false;
		}	
		
	}

	self.rounds+=1;
}**/

    return Simon;

});