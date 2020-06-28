document.getElementById("login").innerHTML = localStorage.getItem("utilizator")

function logOut() {
    localStorage.removeItem("utilizator");

}

fetch('https://api.ipify.org/?format=json')
    .then(results => results.json())
    .then(data => document.getElementById('ip').innerHTML = data.ip)

// function callback(response){
//     document.getElementById('ip').innerHTML = response.IPv4 ;
// }

// $.ajax({
//     url:"https://geoip-db.com/jsonp/",
//     dataType:"jsonp"
// })

function dataCurenta(){
    let today = new Date();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate()
    let current_date = `${day}/${month}/${year}`;
    document.getElementById('date').innerHTML = current_date;
    
}
dataCurenta()
function oraCurenta(){
    let today = new Date();

    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let current_time = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time').innerHTML = current_time;
}
function addZero(num){
    return num < 10 ? `0${num}` : num ;
}
oraCurenta()

