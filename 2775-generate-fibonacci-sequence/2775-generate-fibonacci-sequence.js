/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let fib = [0,1];
    let i = 1;
    while(true){
        yield fib[i-1];
        fib.push(fib[i]+fib[i-1]);
        i++;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */