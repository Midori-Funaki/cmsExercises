let userInput = 9000000;

function multiplyInput(num){
    while (num <= 1000000){
        num = num * 10;
    }
    return num;
}

switch (true){
    case ((userInput <= 0) || userInput ==NaN):
    console.log("ERROR");
    break;
    case (userInput >= 1000000):
    console.log(userInput);
    break;
    default:
    console.log(multiplyInput(userInput));
}