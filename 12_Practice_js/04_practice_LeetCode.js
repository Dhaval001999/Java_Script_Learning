let createCounter = function(init) {
    let n = init
  obj1 = {
    
    increment(){
        return init += 1;
    },
    decrement(){
        return init -= 1;
    },
    reset(){
       return init = n
    }
  }
  return obj1;
};



let createCounter1 = function(init) {
    let n = init
    
    function increment(){
        console.log(init += 1)
        return;
    }
    function decrement(){
        return init -= 1;
    }
    function reset(){
       return init = n
    }

  return {
    increment, decrement, reset
  }
};
