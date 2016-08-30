// // Arrays

// var students = [];

// students[0] = 'oleg';
// students[1] = 'taras';
// students.push('vasul');

// console.log('Number of elements: ' + students.length);

// for (var j=3; j<5; j++) {
//     students.push (prompt('Enter a name:'));
// }

// for (var i=0; i<students.length; i++) {
//     console.log(students[i]);
// }

// // Dictionary or HashTable

// var students = {};

// students['AX666'] = 'Vasul'; //
// students['AX333'] = 'Petro';
// students['AX222'] = 'Oleg';

// var other = {
//     'AX666': 'Vasul',
//     'AX333': 'Ptro',
//     'AX222': 'Oleg'
// }

// for (var key in other) {
//     console.log(key +': ' + other[key]);
// }

// Objct

// var kuzya = {
//     name: 'Kuzya',
//     color: 'Whit'
// }

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//     this.run = function() {
//         console.log(this.name + 'has run!');
//     }
//     return this;
// }
// var pushok = new Cat('Pushok', 'grey');
// var murchik = new Cat('Myrchik', 'black');
// pushok.run();
// murchik.run();

// Events

googleLink.addEventListener('click',joke);

function joke(e) {
    alert('It/s a joke');
    e.preventDefault();   // не дає перейти на сайт
}