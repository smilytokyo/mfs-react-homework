//Q5: 请实现 Generator 函数 range(start,end)，可以迭代出start到end直接所有整数
function* range(start,end){
    if( start <= end ){
        yield start++
    }else{
        return done
    }
}
//var fun = range(1,5)

for(var i of range(1,5)){
    console.log(i)
}
