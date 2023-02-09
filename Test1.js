
function m(){
    return console.log("testing");
}
m();
let a = [1, 2, 3]
function callBack(item){
    let b = item+10;
    return console.log(b);
}
a.forEach(callBack);