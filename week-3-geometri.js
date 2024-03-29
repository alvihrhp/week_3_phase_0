function tentukanDeretGeometri(arr) {
    let diffrences = arr[1] / arr[0];
    let total = arr[0];
    for(let i = 1; i < arr.length; i++){
        total *= diffrences;
        if(total !== arr[i]){
            return false;
        } else if(i === arr.length - 1 && total === arr[i]){
            return true;
        }
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false