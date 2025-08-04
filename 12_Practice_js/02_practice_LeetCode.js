function fun(){
    function f(a,b){
        const sum = a + b
        return sum;

    }
    return f
}
const f = fun();
console.log(f(2,4));
