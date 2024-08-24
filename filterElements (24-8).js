var filter = function(arr, fn) {
    let a=[]
    for(i=0;i<arr.length;i++){
    b=fn(arr[i],i)
    if(b){
            a.push(arr[i])
        }
    }
    return a 
};

