angular.module('myApp', ['Service'])

	.controller('GradeCtrl', function(GradeReportCard){

		var self=this;
		self.input_grade="";
		self.input_assignment="";
		self.num_grade=100;
		self.card= new GradeReportCard();

		self.AddHw=function(){

			var x = {
				'assignment': self.input_assignment,
				'grade': self.input_grade
			};

			self.card.addGrade_HW(x);


		}


	})

	






