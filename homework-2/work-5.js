//普通函数
var sum = function(add){
    return function(mul){
        return function(origin){
            return (add+origin)*mul
        }
    }
}
var one = sum(1)
var two = one(2)
var three = two(3)
console.log(three)

//箭头函数
//第一次这个写法，但是调用有误，使用sum2(1,2,3)，无法得到答案以为是函数写的不对
var sum2 = (add)=>{return (mul)=>{ return (origin)=>{ return (add+origin)*mul}}}
console.log(sum2(1)(2)(3))

//参考网上资料，发现调用应该使用sum3(1)(2)(3)，输出正确，并且第一种写法也输出正确
var sum3 = add=>mul=>origin=>(add+origin)*mul
var result = sum3(1)(2)(3)
console.log(result)