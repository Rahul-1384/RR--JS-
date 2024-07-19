// fetch & async returns promise


// To get the datafrom API
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// console.log(utility());



// // To send the data to the API
// async function helper(){
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             Name: 'Rahul Rajput',
//             Age: 19,
//             YOB: 2005
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('', options);
//     let response = content.json();
//     return response;
// }

// async function getAPI(){
//     let result = helper();
//     console.log(result);
// }
// console.log(getAPI());



// closure funtion

function solve(){
    let name = 'Rahul Rajput';
    function inner(){
        console.log(name);
    }
    inner();
}
solve();