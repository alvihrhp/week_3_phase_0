function targetTerdekat(arr) {
    let o = [];
    let x = [];
    let smallest = arr.length;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'o'){
        o.push(i);
      } else if(arr[i] === 'x'){
        x.push(i);
      }    
    }
    for(let i = 0; i < o.length; i++){
      for(let j = 0; j < x.length; j++){
        if(o[i] > x[i]){
          if(smallest > (o[i] - x[j])){
            smallest = o[i] - x[j];
          }
        } else {
          if(smallest > (x[j] - o[i])){
            smallest = x[j] - o[i];
          }
        }
      }
    }
    if(x.length === 0){
      return 0;
    } else {
      return smallest;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  