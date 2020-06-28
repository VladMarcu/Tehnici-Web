var text = document.querySelectorAll('.paragraf p');
var vlad = []
var words = []
Array.from(text).forEach(function(para){
    vlad.push(para.textContent)
 });

for(i = 0;i < vlad.length;i++){
    vlad[i] = vlad[i].split(/\s/);
    words.push(vlad[i]);    
}

function countWords(){
    let number_of_words = 0
    for (let i = 0;i < words.length;i++){
        number_of_words += words[i].length;
    }
    return number_of_words;
}
document.getElementById("count").innerHTML = countWords();


// const { count } = require("console");
// function countWords(){
// 	s = document.getElementById("input").value;
// 	s = s.replace(/(^\s*)|(\s*$)/gi,"");
// 	s = s.replace(/[ ]{2,}/gi," ");
// 	s = s.replace(/\n /,"\n");
// 	document.getElementById("wordcount").value = s.split(' ').length;
// }
// countWords()
// console.log(s)