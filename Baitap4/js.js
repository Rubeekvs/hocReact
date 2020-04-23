//variable var
var str = "bee"
console.log(str)
    //let 
let stri = "a string"
console.log(stri);
//number
var num = 1000;
console.log(typeof(num));
//const
const con = "phetmany";
console.log(con);
//function
function sum(a, b) {
    return a + b;
}

console.log(sum(3,5));

//arow funtion
let y = (x) => (x * 2);
console.log(y(3));
//string
var string = "keovongsa";
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.split(","));
console.log(string.substr(0, 5));
//array
var arr = new Array(1, 2, 3, 5, 6, 7);
var arr2 = ["bee", "khankham", "xuban"];
const [t, z] = arr2;
console.log(t + "  " + z);
console.log(arr2[1]);
arr2.push("dalavong")
console.log(arr2);
arr2.unshift("kai")
console.log(arr2);
arr2.unshift();
console.log(arr2);
arr2.pop();
console.log(arr2);
//object
const obj = {
    name: "phetmany",
    age: 21,
    dis: function(thongbao) {
        console.log("hello " + this.name);
    }
}
console.log(obj.name);
obj.dis();

function display(ob) {
    console.log(ob.name + " " + ob.age);
}

console.log(display(obj));
//json
const json = [
    { id: 1, name: "bi" },
    { id: 2, name: "khankham" }
]
console.log(json);
console.log(JSON.stringify(json));
// loop
for (let a = 0; a < json.length; a++) {
    console.log(json[a].name);
}
for (let b of json) {
    console.log(b);
}
json.forEach(
        function tes(x) {
            console.log(x.id);
        }
    )
    //map
const k = json.map((s) => (s.name + " haha"))
console.log(k);
//condition
var cond = 1;
if (cond == 1) {
    console.log("1 day roi");
} else {
    console.log("khong phai")
}
