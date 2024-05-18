
class newClass {
    constructor(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    
}//declaration

class inheritClass extends newClass{
      constructor(name,age,gender,city,education,experience){
        super(name,age,gender,city);
        this.city=city;
        this.education=education;
        this.experience=experience;
    }
 
    calculateMath(m,a,b,c){
        
        let multiplactions = (a*b*c);
        let remainingNumber = (m/multiplactions);
        let checkIfRemaining = (remainingNumber*multiplactions);
        if(checkIfRemaining===m){
            return Math.floor(remainingNumber);
        }else{
            return console.log("-1");
        }
    }
}//call by super constructor and extends

//

let callInheritClass = new inheritClass('subrota','24','male','joypurhat','HSC','4 years');


console.log(callInheritClass.name,callInheritClass.age,callInheritClass.city,
    callInheritClass.gender,callInheritClass.city,
    callInheritClass.education ,callInheritClass.experience,"\n", 
"calculate math for remaining number =>",callInheritClass.calculateMath(20,4,5,6));



