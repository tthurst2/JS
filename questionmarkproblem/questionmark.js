function QuestionsMarks(str) {

    // code goes here
    var re = /(\d)\D*\?{3}\D*(\d)/g;
    var i = 0;
    var match = re.exec(str);
    while(match !== null) {
        if(match[i] + match[i+1] == 10) {
            return true;
        }
        i =+ 2;
    }
    return false;
}

//function call
QuestionsMarks(readline());