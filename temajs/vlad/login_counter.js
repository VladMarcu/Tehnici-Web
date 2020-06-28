let myObj
let myObj_deserialized


if((typeof(localStorage.getItem('myObj')) == 'object') || (JSON.parse(localStorage.getItem('myObj'))['numeUtilizator'] != localStorage.getItem("utilizator"))) {
myObj = {
   numeUtilizator: localStorage.getItem("utilizator"),
   counter: 1
};
let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem('myObj', myObj_serialized);
}
else {
    myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));
    myObj_deserialized['counter']++;
    let myObj_serialized = JSON.stringify(myObj_deserialized);

    localStorage.setItem('myObj', myObj_serialized);

}


console.log(myObj)