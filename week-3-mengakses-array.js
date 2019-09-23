function balikKata(word) {
    let temp = ''
    for(let i = word.length-1; i >= 0; i--){
        temp += word[i]
    }
    return temp;
}

console.log(balikKata('hello world!'))