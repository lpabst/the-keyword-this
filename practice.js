//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //stands in as a placeholder for objects. Kind of like using a variable, but for objects and dot notation.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Explicit - call, apply, and bind. you tell it 'explicitly' what object you want it to represent when you provide it 'context'

  // 3) What is the difference between call and apply?

      //call takes in multiple arguments, apply takes in one array, full of the same arguments. other than that, they are the same
      //and work the same way.

  // 4) What does .bind do?

      //binds the function and the 'this' context into a variable. You invoke the variable later, and the context comes along with 
      //the function.  Arguments are passed in at time of invocation.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' 
  //instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'lpabst',
      email: 'lorenpabst@gmail.com',
      getUsername: function(){
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
      this.move += 10;
    }
  }
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will 
//increment the move property by 10. The move property will be added to every object that is being returned from 
//the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar 
//on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being 
//the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

