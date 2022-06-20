// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {

  let hasil;
  var m = input.sort(function(a, b) {
          return a - b;
      });

      var middle = Math.floor((m.length - 1) / 2); 
      if (m.length % 2) {
          hasil = m[middle];
      } else {
          hasil = (m[middle] + m[middle + 1]) / 2.0;
      }
     return hasil
}

console.log(result(input), "Hasil test dari zul-easy");
