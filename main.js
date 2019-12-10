// function login(username, password){
//     let result;

//     if(username === 'kofi' && password === '123'){
//         result = true
//     } else {
//         result =false
//     }

//     return result;
// }


const auth = (username, password) => {
    let result;
    if(username === 'kofi' && password === '123'){
        result = true
    } else {
        result =false
    }

    return result;
}
let result = auth('kofi','123');
m = Patient;
c = Doctor;
// b = Allen;
v = new c;

var patient = new Patient(v);

let name1 = patient.names('Samuel');
// let name2 = patient.names('Michael');
// console.log(name1);
