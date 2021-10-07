// EXERCICES JS JOURS 9 - DEBUG, DATE, REGEX


// EXERCICE 01 - AUJOURD'HUI

var weekDays = ["dimanche","lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

function whatDayIsToday (){

    var temps = new Date();
    var day = temps.getDay();
    console.log(day);

    console.log(weekDays[day])

    console.log(`Aujourd'hui nous sommes le ${weekDays[day]}`)
}
var today = whatDayIsToday()


// EXERCICE 02 - MOIS COURANT

var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobre", "November", "December"]

function whatMonthIsIt (){
    var temps = new Date();
    var month = temps.getMonth();
    console.log(month);

    console.log(monthOfYear[month])

    console.log(`Aujourd'hui nous sommes en ${monthOfYear[month]}`)
}
var ourMonth = whatMonthIsIt()



















// var weekDays = [dimanche,lundi, mardi, mercredi, jeudi, vendredi, samedi,]

// function whatDayIsToday (day, month, year){
//     var year = new Date.getFullYear()
//     console.log(year)

//     var month = Date.getMonth()
//     console.log(month)

//     var day = Date.getDate()
//     console.log(day)

//     return `Aujourd'hui nous sommes le ${day} ${month} ${year}`
// }
// whatDayIsToday(5)