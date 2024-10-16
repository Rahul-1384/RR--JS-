// objext literals are just same as dictionary in the python.
let user={name:"RRY",
        age:19,
        location:"Mathura",
        getDetails:function(){
            console.log(`Name: ${user.name},Age: ${user.age},Location: ${user.location}`)
        }};
// inside the user all are the properties.
// accessing tha values/properties of the user object.

// 1)
console.log(user.name);
// 2)
console.log(user["age"]);
// 3)
let property="age";
console.log(user[property]);

user.getDetails();