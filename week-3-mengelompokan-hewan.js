function groupAnimals(animals) {
    let kamus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z',];
    let multiArr = [];
    for(let i = 0; i < kamus.length; i++){
        let arrFilter = [];
        for(let j = 0; j < animals.length; j++){
            if(kamus[i][0] === animals[j][0]){
                arrFilter.push(animals[j])
            }
        }
        if(arrFilter.length > 0){
            multiArr.push(arrFilter);
        }
    }
    return multiArr;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]