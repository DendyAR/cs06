const BinarySearch = require('./function')

let koleksi = [1,4,9,12,24,31,44,49,50,56];
let kueri = 31;
let sorted = koleksi.sort(function(a,b){return a, b})
console.log(sorted)
let binarySearch = new BinarySearch();
let hasil = binarySearch.findIndex(koleksi, kueri);

console.log('Hasil:', hasil)