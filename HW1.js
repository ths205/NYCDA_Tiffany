var assignone=angular.module('assign_one', []);

assignone.controller('ColorCtrl', function()
{
	var self=this;

	self.ispink=false;
	self.isblue=false;
	self.ispurple=false;
	self.isyellow=false;
	self.isgreen=false;
	self.white=true;




     //**self.test_div_1={background-color: #E62B86;};
     //**self.test_div_2={background-color: #F5A0BD;};
     //**self.body={background-color: #00AEED;};

	//**};



    //these functions from colorpink to color white changes the background color of the body and div tags
	self.colorpink=function()
	{
		

		

	 var pink_one=angular.element(document.querySelector('.test_div_1'));
	 pink_one.css('background-color', '#F5A0BD');

	 var pink_two=angular.element(document.querySelector('.test_div_2'));
	 pink_two.css('background-color', '#E62B86');

	 var pink_background=angular.element(document.querySelector('body'));
	 pink_background.css('background-color', '#FDEDF2');

	 var pink_text_one=angular.element(document.querySelector('.test_div_1'));
	 pink_text_one.css('color', '#ffffff');

	 var pink_text_two=angular.element(document.querySelector('.test_div_2'));
	 pink_text_two.css('color', '#ffffff');
     
       

    

   };

   self.colorblue=function()
   {

   	var blue_one=angular.element(document.querySelector('.test_div_1'));
	 blue_one.css('background-color', '#0000FF');

	 var blue_two=angular.element(document.querySelector('.test_div_2'));
	 blue_two.css('background-color', '#00AEED');

	 var blue_background=angular.element(document.querySelector('body'));
	 blue_background.css('background-color', '#D5DCEF');

	 var blue_text_one=angular.element(document.querySelector('.test_div_1'));
	 blue_text_one.css('color', '#ffffff');

	 var blue_text_two=angular.element(document.querySelector('.test_div_2'));
	 blue_text_two.css('color', '#ffffff');

   }

   self.colorgreen=function()
   {

   	var green_one=angular.element(document.querySelector('.test_div_1'));
	 green_one.css('background-color', '#00A54E');

	 var green_two=angular.element(document.querySelector('.test_div_2'));
	 green_two.css('background-color', '#00FF00');

	 var green_background=angular.element(document.querySelector('body'));
	 green_background.css('background-color', '#BEDFC4');


	 var green_text_one=angular.element(document.querySelector('.test_div_1'));
	 green_text_one.css('color', '#ffffff');

	 var green_text_two=angular.element(document.querySelector('.test_div_2'));
	 green_text_two.css('color', '#ffffff');

   }

   self.colororange=function()
   {

   	var orange_one=angular.element(document.querySelector('.test_div_1'));
	 orange_one.css('background-color', '#F1A629');

	 var orange_two=angular.element(document.querySelector('.test_div_2'));
	 orange_two.css('background-color', '#F5BA5C');

	 var orange_background=angular.element(document.querySelector('body'));
	 orange_background.css('background-color', '#FBD7A1');


	 var orange_text_one=angular.element(document.querySelector('.test_div_1'));
	 orange_text_one.css('color', '#ffffff');

	 var orange_text_two=angular.element(document.querySelector('.test_div_2'));
	 orange_text_two.css('color', '#ffffff');

   }

   self.colorpurple=function()
   {

   	var purple_one=angular.element(document.querySelector('.test_div_1'));
	 purple_one.css('background-color', '#800080');

	 var purple_two=angular.element(document.querySelector('.test_div_2'));
	 purple_two.css('background-color', '#9781B7');

	 var purple_background=angular.element(document.querySelector('body'));
	 purple_background.css('background-color', '#D4CAE2');


	 var purple_text_one=angular.element(document.querySelector('.test_div_1'));
	 purple_text_one.css('color', '#ffffff');

	 var purple_text_two=angular.element(document.querySelector('.test_div_2'));
	 purple_text_two.css('color', '#ffffff');

   }

   self.colorwhite=function()
   {

   	var white_one=angular.element(document.querySelector('.test_div_1'));
	 white_one.css('background-color', '#b7b7b7');

	 var white_two=angular.element(document.querySelector('.test_div_2'));
	 white_two.css('background-color', '#898989');

	 var white_background=angular.element(document.querySelector('body'));
	 white_background.css('background-color', '#ffffff');

	 var white_text_one=angular.element(document.querySelector('.test_div_1'));
	 white_text_one.css('color', '#000000');

	 var white_text_two=angular.element(document.querySelector('.test_div_2'));
	 white_text_two.css('color', '#000000');


   }
   /** self.hide_all hides the lists when you check the check box **/
   self.hide_all=true;

   	 	 

   //self.fruitarray=['apple','pear'];

   //self.vegarray=['carrots', 'broccoli'];

   //self.dairyarray=['milk','cheese'];

   //self.is_fruit, self.is_veg, and self.is_dairy is used to check if user clicks the radio buttons
   self.is_fruit=false;
   self.is_veg=false;
   self.is_dairy=false;

   self.input_text="";

   self.fruitarray=['apple','pear'];

   self.vegarray=['carrots', 'broccoli'];

   self.dairyarray=['milk','cheese'];

/**
self.addfile=function()
{
	self.item=angular.element(document.getElementsByName('file_name').value);
	if (self.is_fruit)
	{
		//var fruit=angular.element(document.getElementsByName('radiobuttonsfruit'));
		self.fruitarray.push(self.item);
		//return self.fruitarray;
	}

	if(self.is_veg)
	{
		//var veg=angular.element(document.getElementsByName('radiobuttonsveg'));
		self.vegarray.push(self.item);
        //return self.vegarray;

	}

	if(self.is_dairy)
	{
		//var dairy=angular.element(document.getElementsByName('radiobuttonsdairy'));


		self.dairyarray.push(self.item);
		//return self.dairyarray;
	}





}**/
     /**document.getElementsByName('radiobuttonsfruit').checked=false;
     document.getElementsByName('radiobuttonsveg').checked=false;
     document.getElementsByName('radiobuttonsdairy').checked=false;

     **/
     

    self.addfile=function()
    {
       //self.item=angular.element(document.getElementsByName('file_name')).value;
    
       var x=document.getElementById("fruit_id").checked;
       var y=document.getElementById("veg_id").checked;
       var z=document.getElementById("dairy_id").checked;
       	
       	
       	     if (x)
       	     {
       			

	         self.fruitarray.push(self.input_text);
	        
	         
	     }  
	     

	     else if (y)
	     {
	     	
	     	self.vegarray.push(self.input_text);
	     
	     	
	        
	     }

	     
	     else if (z) 
	     {
	     	


	     	self.dairyarray.push(self.input_text);
	     	
	     	
	        

	     }	




       

    }


});
