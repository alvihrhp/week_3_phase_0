function pasanganTerbesar(num) {
    let numStr = num.toString();
    let temp = '';
    let highest = 0;
    for(let i = 0; i < numStr.length; i++){
        temp = numStr[i] + numStr[i+1]
        if(parseInt(temp) > highest){
            highest = parseInt(temp);
        }
    }
    return highest;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99