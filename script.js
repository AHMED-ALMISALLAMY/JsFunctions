// Functions

function square(number) {
    return number * number;
}



(function() {
    console.log("Hello, world!");
})();



let app = function HelloApp() {
    console.log("function in variable");
}

app();


// Arrow Function

let app2=() => {
    console.log("Arrow Function");
}

// Literal 
let Test = {
    // Arrow Function
    DoSomething: ()=> {
        console.log("Arrow function inside Literal Object");
    }
}

let app3 = (firstName , secondName = "DefualtName") => {
    console.log(secondName);
    return {
        firstName: "Ahmed",
        secondName: "Almisalamy",
    }
} 

app3();

let newArray = ["Ahmed" , "Mohamed"];
// app3(newArray[0] , newArray[1]);
app3(...newArray); 


// put values into array.
let app4 = (...arrayValues) => {
    console.log(arrayValues);
}

app4(4,5,2,8,9);


// Function Call Back
let fun = (firstName = "Ahmed" , onSave) => {
    console.log(firstName);
    onSave();
}

function DataSaverByUser() {
    console.log("Save Data");
}

fun("Mohmed" , DataSaverByUser);
