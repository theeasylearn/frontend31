// let $ = function(id)
// {
//     let temp = document.getElementById(id);
//     return temp;
// }
let $ = (id) => document.getElementById(id);
// function log(...messages)
// {
//     console.log(messages);
// }
let log = (...messages) => console.log(messages);
// function val(id)
// {
//     return $(id).value
// }
let val = (id) => $(id).value;
