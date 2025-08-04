// map : .map ma j pan given array hoy ani darek value upar a function banave ane ek navo array generate kare
// filter : .filter ma j pan array hou ani value upar a filter lagave

const ages = [12, 19, 23, 21, 5]
const result = ages.filter(checkAdult)

function checkAdult(age){
    return age >= 18
}
console.log(ages)
console.log(result)



let filter = function(arr, fn){
    let newarr = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            newarr.push(arr[i])
        }
    }
    return newarr
} // Solution