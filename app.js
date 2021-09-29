name = 'Richard';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log('some text');
let avg = findAvg(8, 4);
console.log('some text', avg);

function findAvg(x, y) {
    console.log('some text');
    var answer = (x + y) / 2;
    return answer;
}

let fruits = ['mango', 'plum', 'pear']

function printFirstFruit() {
    let faveFruit;
    faveFruit = 'strawberry' 
    console.log(fruits[0])
    function printFaveFruit() {
        let leastFav;
        leastFav = 'papaya'
        console.log(faveFruit)
        console.log(leastFav)
    }
    printFaveFruit();
}
printFirstFruit();

logHello();
function logHello() {
    console.log('Hello')
}

let showAlert = function () {
    alert('If you see this, it worked!')
}
showAlert();