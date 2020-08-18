async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');

//JS先执行主线进程，然后转入

//首先输出 *script start*  问题不大
//setTimeout加入宏任务
/*async1()调用 进入async1方法的执行 输出 *async1 start* ,  执行到await async2()，执行async2()方法
，然后等待返回结果，等待Promise结果 目前微任务第一条是执行async2()
*/
/*主线继续执行 ，到达 new Promise()方法,new是同步的 立即执行EC函数
 直接输出promise1 ,到达resolve(),转到then() then中的方法放入微任务*/
//主线继续进行 输出script end
//主线执行完毕 执行async2(), 输出async2, 然后返回async1里面继续主线 输出'async1 end'
//执行第二个微任务 输出promise2


//  定时器 IO操作（事件绑定）属于宏任务
//  await promise属于微任务


/*
浏览器是多线程
JS是单线程的  => 浏览器只提供一个线程渲染
*/

/**
 *   浏览器的线程处理机制  氛围主进程 与 event queue ,event queue里面氛围微任务和宏任务 
 *   先执行主线进程，  再执行 event queue里面的微任务 ，再执行宏任务
 * 
 */