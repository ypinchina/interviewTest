//闭包

let text = (function(i) {
    return function() {
      i = i*2
      alert(i)
    }
})(2)
text(5)

let a = 0, b = 0;
function A(a) {
    A = function(b) {
        alert(a + b++)
    }
    alert(a++)
}
A(1)
A(2)