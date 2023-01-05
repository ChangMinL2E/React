function logCompliment() {
    console.log("함수 선언식");
};

logCompliment();

const logCompliment2 = function() {
    console.log("함수 표현식");
};
logCompliment2();

const createCompliment = function(one,two) {
    console.log(`${one} : ${two}`);
};
console.log(createCompliment("창민","잘잠"));

