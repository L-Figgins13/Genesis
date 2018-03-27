

var Logger = function logger(text, name) {
    console.log(`---------Logging ${name}------------`);
    console.log(text);
    console.log(`---------- END ${name}--------------`);
    console.log();
}

export default Logger;