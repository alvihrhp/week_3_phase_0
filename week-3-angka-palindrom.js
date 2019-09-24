
function angkaPalindrome(num) {
    function checkPalindrome(nomer){
        var no = nomer.toString();
        var angkaTerbalik = '';
        for (i = no.length - 1; i >= 0; i-- ){
        angkaTerbalik += no[i];
        }
        if (no === angkaTerbalik){
            return true
        } else {
            return false   
        }
    }
    if(checkPalindrome(num) === true){
        num++
    }
    while(checkPalindrome(num) === false){
        num++
    }
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001