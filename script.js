// let conditionToBeMet = true;

// async function myPromise() {
//     const result = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (conditionToBeMet) {
//                 resolve('promise resolved');
//             } else {
//                 reject("promise rejected");
//             }
//         }, 3000);
//     });
//     console.log(result)
//     return result;
// };



// myPromise()
//     .then(res => console.log('Success: ' + res))
//     .catch(err => console.log('Error: ' + err));

async function fetchDog() {
    let myDog = await fetch('https://dog.ceo/api/breeds/image/ran')
        .then(res => res.json());

    console.log('myDog result: ', myDog);
    console.log('status: ', myDog.status);

    var imgtag = document.createElement('img');
    imgtag.setAttribute('src', myDog.message);
    document.body.appendChild(imgtag);
}

fetchDog();


