# JavaScript

## JavaScript基础

- 基础类型和引用类型
  - 基础类型：`String Number Boolean Symbol undefined null`
    > 按值访问，声明变量以后保存的实际的值。
  - 引用类型：`Object Array Function`
    > 按引用访问，引用类型的值是存在堆中，声明变量时候保存的是该值所在的堆地址。

- 事件循环机制（EventLoop）
  > 首先需要了解的是JS是单线程，非阻塞的执行方式，为什么单线程呢？当多个线程操作同一个DOM，那么以哪个为准呢，而非阻塞就是通过`EventLoop`去实现。

  - 执行栈：后进先出，同步代码执行的时候会按顺序加入执行栈中。
  - 事件队列：先进先出，在执行过程中，如果遇到了异步代码不会立刻执行，而是放到事件队列当中，然后继续执行执行栈的任务，等到执行栈执行完毕以后，主线程才回去检查事件队列是否有需要任务，然后再把对应事件回调放到执行栈中，执行同步代码
  - 

  PS：[可视化体验][http://latentflip.com/loupe]

- `const obj = new Obj()`发生了什么
  1. 创建一个空对象，将引用赋给`this`(隐形)
  2. 生成`Obj`构造函数的实例对象
  3. 返回这个新对象

- 线程和进程
> 每个进程相当于每列火车，而线程就是车厢，单独的车厢无法运行，需要火车头，而火车的基本单位就是车厢。
  - 数据互通性：进程之间基本不能互通数据，就像你不能从这列火车跳到那一列，但是可以换车厢，这就是线程之间的数据共享。
  - 执行单位：一个进程可以有多个线程。
  - 消耗性：进程会比线程更消耗计算机资源（车厢多了费油）。
  - 进程间不影响，但是线程会。

## ES6

- `let`和`const`以及`var`的区别
  - `let const`具有暂时性死区，所以无法和`var`一样具备变量提升
  - `const`声明的变量无法修改值，但是引用类型可以修改属性值，因为引用类型存储的是内存地址
  