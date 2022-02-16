//浅克隆

let obj = {
    a: 33,
    b: "sewqeqw4eeq",
    c:{
        d: 123123,
        e:"qweqweqe"
    },
    d:/\.js?$/,
    f:new Date(),
    h:[1,321,'a',{p:2}]
}

let obj1 = JSON.parse(JSON.stringify(obj))
/*深克隆 但是对于对象中含有正则对象 日期对象 function都会转化成字符串或者空对象*/

//let obj1 = {...obj}
//浅克隆  使用的是ES6解构表达式

// 深克隆 只克隆第一层 需要递归
// let obj1 = {}
// for (let key in obj) {
//     if(!obj.hasOwnProperty(key)) continue
//     obj1[key] = obj[key]
// }


function deepclone (object){
    let obj1 = new object.constructor
    if(typeof object !== 'object') return object
    if(object === null) return null
    if(object instanceof RegExp) {
        return new RegExp(object)
    }
    if (object instanceof Date) {
        return new Date(object)
    }
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            obj1[key] = deepclone(object[key])
        }
    }
    return obj1
}
let obj2 = deepclone(obj)
console.log(obj2)