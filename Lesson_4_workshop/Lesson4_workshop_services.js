angular.module('Service', [])

	//var self=this;
	//self.grades_array=[];
    //self.hw_name=[];

	.service('CalculateService', function(){
        
        this.average=function(){
        	var sum=0;
        	for(var i=0; i<self.hw_grades.grade.length; i++){
               sum=self.hw_grades.grade[i];

        	}
        	this.avg=sum/self.hw_grades.length;
        }

    })


    .factory('GradeReportCard', function(){

    	function GradeReportCard(){
            var self=this;
            self.hw_grades=[{'assignment':"", 'grade':""}];

    		this.grade="A";
    		this.num_grade=100;
            //this.assign="Hw1";

    	}

    	//GradeReportCard.prototype.setGrade_HW_Num=function(g, a){
    	//	this.num_grade=g;
        //    this.assign=a;	
    	//}


    	GradeReportCard.prototype.addGrade_HW = function(a){
            var self = this;
            // a = { assignment: 'HW2', grade: 85 }
            self.hw_grades.push(a);
    	}	
    		
        return GradeReportCard;

    });

    

    /**

    .factory('Assignment' function(){

    	function Assignment(){
    		this.assign="Hw1";
    	}

    	Assignment.prototype.setAssign(a)
    	{
    		this.assign=a;
    	}

        Assignment.prototype.addAssign(a)
        {
            self.hw_name.push(a);

        }
    })**/


   


