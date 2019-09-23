function dataHandling2(param1){
    param1.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    param1.splice(4, 2, "Pria", "SMA International Metro");
    console.log(param1);

    let temp = param1[3].split('/');
    console.log(temp)
    switch(temp[1]){
        case '01':{
            console.log(temp[0] + ' Januari ' + temp[2]);
            break;
        }
        case '02':{
            console.log(temp[0] + ' Februari ' + temp[2]);
            break;
        }
        case '03':{
            console.log(temp[0] + ' Maret ' + temp[2]);
            break;
        }
        case '04':{
            console.log(temp[0] + ' April ' + temp[2]);
            break;
        }
        case '05':{
            console.log(temp[0] + ' Mey ' + temp[2]);
            break;
        }
        case '06':{
            console.log(temp[0] + ' Juni ' + temp[2]);
            break;
        }
        case '07':{
            console.log(temp[0] + ' Juli ' + temp[2]);
            break;
        }
        case '08':{
            console.log(temp[0] + ' Agustus ' + temp[2]);
            break;
        }
        case '09':{
            console.log(temp[0] + ' September ' + temp[2]);
            break;
        }
        case '10':{
            console.log(temp[0] + ' October ' + temp[2]);
            break;
        }
        case '11':{ 
            console.log(temp[0] + ' Novermber ' + temp[2]);
            break;
        }
        case '12':{
            console.log(temp[0] + ' December ' + temp[2]);
            break;
        } 
    }
    temp.sort(function (value2, value1) {return value1 - value2})
    console.log(temp);
    let temp2 = temp.join('-');
    console.log(temp2);
    let temp3 = param1[1].slice(0, 15);
    console.log(temp3);
}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/02/1989", "Membaca"]));