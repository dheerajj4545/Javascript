// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Dheeraj",
    "full name": "Dheeraj Choudhary",
    [mySym]: "mykey1", // symbols are defined in this way in a object
    age: 18,
    location: "Jaipur",
    email: "Dheeraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Dheeraj@chatgpt.com"
// Object.freeze(JsUser) after this no changes will be applied in the object
JsUser.email = "Dheeraj@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());