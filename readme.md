1. 大前端时代需要掌握的技术栈
HTML5

https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5

语义化标签类: <section> <article> <header> <nav> <footer>  

音视频处理： <video>以及<audio>及一系列对应的API功能  

canvas / webGL  
canvas： 画布  绘制  
webGL: canvas标签下使用 2d与3d绘图 能使GPU加速  

history API ：window.history.pushState和 winodw.history.replaceState

requestAnimationFrame

地理位置：api用于获取经纬度

web socket： 通讯相关，过去只使用长连接和长轮询

……：  文件对象 以及 离线存储

CSS3

常规

动画

盒子模型

响应式布局

……

JavaScript

ECMAScript 3/5/6/7/8/9

DOM

BOM

设计模式

底层原理

堆栈内存

闭包作用域 AO/VO/GO/EC/ECSTACK

面向对象OOP

THIS

EventLoop

浏览器渲染原理

回流重绘

……

网络通信层

AJAX / Fetch / axios

HTTP1.0 / 2.0

TCP

跨域处理方案

性能优化

……

Hybrid或者APP再或者小程序

Hybrid

uni-app

RN

Flutter

小程序 MPVUE

Weex

PWA

……

工程化方面

webpack

git

linux / nginx

……

全栈方面

node

express

koa2

mongodb

nuxt.js / next.js

……

框架方面

Angular

Vue

基础知识

核心原理

vue-router

vue-cli

vuex

element ui

vant

cube

SSR

优化

……

React

基础知识

核心原理

react-router-dom

redux

react-redux

dva

umi

mobix

antd

antd pro

SSR

优化

……

……

游戏方向

可视化或者AI方向

****
一些冷知识：  

某个标签如果ID定义命名，可以不用JS定义获取（例如一个div,id='box', 不需要let box =document.getEle...  可以直接拿box来用）   

盒模型： 
* 标准盒模型 content-box (box的width与height只占box内容部分实际大小)  
* IE盒模型 （怪异模式）: border-box (box的width与height包涵padding与border)  很多大型项目用这个
* flex盒模型  
* Column布局  

