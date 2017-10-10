let str = "";
let message = "";

for (let i=100; i<1000000; i++){
    str = String(i);
    message = "";
    for (let j=0; j<str.length; j++){
        switch (str.charAt(j)){
            case '6':
                message = message + 'a'
                break;
            case '1':
                message = message + 'b'
                break;
            case '7':
                message = message + 'd'
                break;
            case '4':
                message = message + 'e'
                break;
            case '3':
                message = message + 'i'
                 break;
            case '2':
                message = message + 'l'
                 break;
            case '9':
                message = message + 'm'
                break;
            case '8':
                message = message + 'n'
                break;
            case '0':
                message = message + 'o'
                break;
            case '5':
                message = message + 't'
                break;
        }
    }
    console.log(message);
}