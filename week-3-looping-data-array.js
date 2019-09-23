var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
//Cara Pertama
function dataHandling(){
    let arr = '';
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input[i].length; j++){
            if(j === 0){
                arr = arr + 'Nomor ID: ' + input[i][j];
            } else if(j === 1){
                arr = arr + '\nName: ' + input[i][j];
            } else if(j === 2){
                arr = arr + '\nTTL: ' + input[i][j] + ' ' + input[i][j+1];
            } else if(j === 4){
                arr = arr + '\nHobby: ' + input[i][j] + '\n\n';
            }
        }
    }
    return arr;
}

console.log(dataHandling(input));
