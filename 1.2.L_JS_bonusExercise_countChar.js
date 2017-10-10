var counter = 0;

function countChar(str, char){
    for (let i=0; i<str.length; i++){
        switch (str.charAt(i)){
            case char:
                counter++
                break;
            default:
                break;
        }
    }
    return counter;
    counter = 0;
}

console.log(countChar("fizzbuzz","z"));