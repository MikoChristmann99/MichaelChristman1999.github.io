//All three musicians hiring dates
const ludwigHiringDate = new Date(2020, 11, 9);
const johannHiringDate = new Date(2020, 11, 9);
const wolfgangHiringDate = new Date(2020, 11, 9);

//Employee number 1: Ludwig Beethoven employee field variables and values
var firstName1 = 'Ludwig'
var lastName1 = 'Beethoven';
var address1 = '505 main street';
var payRate1 = 12.52.toFixed(2);
var hiringDate1 = ludwigHiringDate.toLocaleDateString();

//Employee number 2: Johann Bach employee field variables and values
var firstName2 = 'Johann';
var lastName2 = 'Bach';
var address2 = '512 main street';
var payRate2 = 10.02.toFixed(2);
var hiringDate2 = johannHiringDate.toLocaleDateString();

//Employee number 3: Wolfgang Mozart employee field variables and values
var firstName3 = 'Wolfgang';
var lastName3 = 'Mozart';
var address3 = '600 main street';
var payRate3 = 228.78942.toFixed(5);
var hiringDate3 = wolfgangHiringDate.toLocaleDateString();



//employee output
console.log(`
Employee one first name: ${firstName1}
Employee one last name: ${lastName1}
Employee one address: ${address1}
Employee one hiring date: ${hiringDate1}
Employee one pay rate: ${payRate1}
Employee two first name: ${firstName2}
Employee two last name: ${lastName2}
Employee two address: ${address2}
Employee two hiring date: ${hiringDate2}
Employee two pay rate: ${payRate2}
Employee three first name: ${firstName3}
Employee three last name: ${lastName3}
Employee three address: ${address3}
Employee three hiring date: ${hiringDate3}
Employee three pay rate: ${payRate3}
 `);

document.getElementById("txtFirstNameLudwig").innerHTML = "Ludwig";
document.getElementById("txtLastNameLudwig").innerHTML = "Beethoven";
document.getElementById("txtAddressLudwig").innerHTML = "505 main street";
document.getElementById("txtHiringDateLudwig").innerHTML = "12/9/2020";
document.getElementById("txtPayRateLudwig").innerHTML = "18.9";
document.getElementById("txtFirstNameJohann").innerHTML = "Johann";
document.getElementById("txtLastNameJohann").innerHTML = "Bach";
document.getElementById("txtAddressJohann").innerHTML = "512 main street";
document.getElementById("txtHiringDateJohann").innerHTML = "12/9/2020";
document.getElementById("txtPayRateJohann").innerHTML = "25.5";
document.getElementById("txtFirstNameWolfgang").innerHTML = "Wolfgang";
document.getElementById("txtLastNameWolfgang").innerHTML = "Mozart";
document.getElementById("txtAddressWolfgang").innerHTML = "600 main street";
document.getElementById("txtHiringDateWolfgang").innerHTML = "12/9/2020";
document.getElementById("txtPayRateWolfgang").innerHTML = "50.1";
