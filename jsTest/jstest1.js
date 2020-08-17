let a = {},
b = '0',
c = 0
a[b] = '肯德基'
a[c] = '汉堡王' 
console.log(a[b]) //输出汉堡王
//对象中 属性名不能重复，属性名只能是字符串，数字属性名会转换成字符串


let  d = {},
e = Symbol('1'),
f = Symbol('1')
d[e] = '肯德基'
d[f] = '汉堡王'
console.log(d[e]) //输出肯德基  Symbol是独一无二的对象


let g = {},
h = {t: 1},
i = {o: 2}
g[h] = '肯德基'
g[i] = '汉堡王'
console.log(g[h]) //对象在编译时 对象属性名转化成：[Object object]



