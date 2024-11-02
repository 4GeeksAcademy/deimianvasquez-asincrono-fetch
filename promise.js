// let myPromise = new Promise((resolve, reject) => {

//     let numRand = Math.floor(Math.random() * 10 + 1)

//     if (numRand % 2 == 0) {
//         resolve("Todo bien solucionado!!")
//     } else {
//         reject("Fallamos, exploto la matrix")
//     }
// })

// then 
// console.log(myPromise)
// myPromise
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))

// async await

// function myPromiseAsync() {
//     let myPromise = new Promise((resolve, reject) => {
//         let numRand = Math.floor(Math.random() * 10 + 1)
//         if (numRand % 2 == 0) {
//             resolve("Todo bien solucionado!!")
//         } else {
//             reject("Fallamos, exploto la matrix")
//         }
//     })
//     return myPromise
// }


// async function respuestaPromise() {
//     try {
//         let response = await myPromiseAsync()
//         console.log(response)

//     } catch (error) {
//         console.log(error)
//     }
// }
// respuestaPromise()

function promise1() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 1");
        }, 1000);
    });

}

function promise2() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 2");
        }, 2000);
    });

}

function promise3() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 3");
        }, 3000);
    });

}

async function handlingAllPromises() {

    // let first = await promise1();
    // let second = await promise2();
    // let third = await promise3();

    let first = await Promise.race([promise1(), promise2(), promise3()]);

    console.log(first);
    // console.log(second);
    // console.log(third);

}

handlingAllPromises();