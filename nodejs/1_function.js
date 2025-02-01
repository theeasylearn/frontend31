function getCurrentDate()
{
    //create date class object
    let d1 = new Date();
    let today = d1.getDate() + "/" + (d1.getMonth()+1) + "/" + d1.getFullYear();
    console.log(today);
    return today;
}
var today = getCurrentDate();
console.log(today);