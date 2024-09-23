// 1. Create a function that checks to see if two object arguments are equal to one another.
// Return true if the objects are equal, otherwise, return false.(score 3)
// // The first object parameter.
// { name: "Benny", phone: "3325558745", email: "benny@edabit.com" }
// // The second object parameter.
// { name: "Jason", phone: "9853759720", email: "jason@edabit.com" } ➞ false


// Question 1


const checksObject = (obj1,obj2)=>{
    if(obj1.name === obj2.name && obj1.phone === obj2.phone && obj1.email === obj2.email ){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

const obj1 = { name: "Benny", phone: "3325558745", email: "benny@edabit.com" }
const obj2 = { name: "Jason", phone: "9853759720", email: "jason@edabit.com" }
checksObject(obj1,obj2)