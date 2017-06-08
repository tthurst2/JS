function QuestionsMarks(str) {
console.log("hello");
    // code goes here
   // var re = /(\d)\D*\?{3}\D*(\d)/g;
    var re = /(?=(\d)(?:[A-z]*\?[A-z]*){3}(\d))./g;
    var i = 1;
    var match = re.exec(str);
    if(match == null) {
        return false;
    }
    for(var i = 1; i < match.length; i += 2) {
        if(parseInt(match[i]) + parseInt(match[i+1]) == 10) {
            console.log("true");
            return true;
        }
    }
    console.log("false");
    return false;
}
input = "5???5";
//function call
QuestionsMarks(input);