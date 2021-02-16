---
title: 三大特性
date: 2021-02-13
---

## 继承

```JavaScript
// 类，即模板
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        console.log(`名字: ${this.name}`)
    }
    getAge() {
        console.log(`年龄: ${this.age}`)
    }
}

// 创建实例
const zhang = new People('张三', 27);
zhang.getName();
zhang.getAge();

// 创建实例
const li = new People('李四', 22);
li.getName();
li.getAge();

// 子类继承父类
class Student extends People {
    constructor(name, age, id) {
        super(name, age)
        this.id = id
    }
    getId() {
        console.log(`${this.name}，年龄 ${this.age}，学号 ${this.id}`)
    }
}

// 创建实例
const wang = new Student('王五', 22, '001')
wang.getId();
```

**总结:**

- `People` 是父类, 公共的, 不仅仅服务于 `Student`;
- 可将公共方法抽离出来, 提高复用, 减少冗余(这是软件设计最基础和最高效的方式);

## 封装

封装(把相关的信息（无论数据或方法）存储在对象中的能力);

> 一个页面或多个页面公用的方法或功能，用一个方法来实现，多个页面调用就可以实现想要的功能效果；
> 这样做的好处是：减少代码冗余，页面清晰，可读性强，好维护；
> 常用于封装插件，方法公用；

## 多态

多态(一个对象在不同情况下的多种形态)；也可以理解成：多态是指通过指向父类的引用，来调用在不同子类中实现的方法

> 多态的实际含义是：**同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。换句话说，给不同的对象发送同一个消息的时候，这些对象会根据这个消息分别给出不同的反馈**。

#### 案例一:

```JavaScript
//主人家里养了两只动物，分别是一只鸭和一只鸡，当主人向它们发出“叫”的命令时，鸭会“嘎嘎嘎”地叫，而鸡会“咯咯咯”地叫。
//这两只动物都会以自己的方式来发出叫声。它们同样“都是动物，并且可以发出叫声”，但根据主人的指令，它们会各自发出不同的叫声。

一般写法：
var makeSound = function( animal ){
    if ( animal instanceof Duck ){
        console.log( '嘎嘎嘎' );
    }else if ( animal instanceof Chicken ){
        console.log( '咯咯咯' );
    }
};

var Duck = function(){};
var Chicken = function(){};

makeSound( new Duck() );        //嘎嘎嘎
makeSound( new Chicken() );    //咯咯咯

```

```JavaScript
下面是改写后的代码，首先我们把不变的部分隔离出来，那就是所有的动物都会发出叫声：

// var makeSound = function( animal ){
//    animal.sound();
// };
function Animal () {
    this.makeSound = function (animal) {
        animal.sound();
    }
}
// 然后把可变的部分各自封装起来，我们刚才谈到的多态性实际上指的是对象的多态性：

var Duck = function(){}

Duck.prototype.sound = function(){
    console.log( '嘎嘎嘎' );
};

var Chicken = function(){}

Chicken.prototype.sound = function(){
    console.log( '咯咯咯' );
};

var animal = new Animal();

animal.makeSound( new Duck() );        //嘎嘎嘎
animal.makeSound( new Chicken() );    //咯咯咯
// 现在我们向鸭和鸡都发出“叫唤”的消息，它们接到消息后分别作出了不同的反应。如果有一天动物世界里又增加了一只狗，这时候只要简单地追加一些代码就可以了，而不用改动以前的makeSound函数，如下所示：

var Dog = function(){}

Dog.prototype.sound = function(){
    console.log( '汪汪汪' );
};

animal.makeSound( new Dog() );     //汪汪汪

```

> 多态背后的思想是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事物”与 “可能改变的事物”分离开来。在这个故事中，动物都会叫，这是不变的，但是不同类型的动物具体怎么叫是可变的。把不变的部分隔离出来，把可变的部分封装起来，这给予了我们扩展程序的能力，程序看起来是可生长的，也是符合开放-封闭原则的，相对于修改代码来说，仅仅增加代码就能完成同样的功能，这显然优雅和安全得多。

#### 案例二:

> 多态的具体表现为方法重载和方法重写：多态是指通过指向父类的引用，来调用在不同子类中实现的方法
>
> 方法重载：**重载是指不同的函数使用相同的函数名，但是函数的参数个数或类型不同。调用的时候根据函数的参数来区别不同的函数**
>
> 方法重写：重写（也叫覆盖）是指在派生类中重新对基类中的虚函数（注意是虚函数）重新实现。即函数名和参数都一样，只是函数的实现体不一样

下面我们根据上面的例子在添加一个 work 的方法说明一下方法重写：

```JavaScript
class Father {
　　　constructor(name) {
         this._name = name;
     }
　　　//实例方法，通过实例对象调用
     getName() {
         console.log(this._name);
     }
     work() {     　　
        console.log('我的工作是累死累活，赚钱养家')
     }
　　　// 静态方法不会被继承,并且是通过类名去调用的
　　　static hitXiaoMing() {
         console.log("打小明")
     }
 }

 class Son extends Father {
     constructor(name, age) {
         //实例化子类的时候把子类的数据传给父类（这里的super必须有，super里的参数是所继承的父类实例化所需要的数据）
         super(name);
         this._age = age;
     }
     work() {     　　
         console.log('我的工作是好好学习，天天向上。')
     }
}

 var DaMing = new Father('大明');
 DaMing.work() // 我的工作是累死累活，赚钱养家。
 var XiaoMing = new Son('小明'，15);
 XiaoMing.work(); // 我的工作是好好学习，天天向上。
```

#### 案例三:

多态是指一个引用(类型)在不同情况下的多种状态。也可以理解成：多态是指通过指向父类的引用，来调用在不同子类中实现的方法。

```JavaScript
// Master类
function Master(name){
    this.nam=name;
    //方法[给动物喂食物]
}
//原型法添加成员函数
Master.prototype.feed=function (animal,food){
    window.alert("给"+animal.name+" 喂"+ food.name);
}
function Food(name){
    this.name=name;
}
//鱼类
function Fish(name){
    this.food=Food;
    this.food(name);
}
//骨头
function Bone(name){
    this.food=Food;
    this.food(name);
}
function Peach(name){
    this.food=Food;
    this.food(name);
}
//动物类
function Animal(name){
    this.name=name;
}
//猫猫
function Cat(name){
    this.animal=Animal;
    this.animal(name);
}
//狗狗
function Dog(name){
    this.animal=Animal;
    this.animal(name);
}
//猴子
function Monkey(name){
    this.animal=Animal;
    this.animal(name);
}
var cat=new Cat("猫");
var fish=new Fish("鱼");

var dog=new Dog("狗");
var bone=new Bone("骨头");

var monkey=new Monkey("猴");
var peach=new Peach("桃");

//创建一个主人
var master=new Master("zs");
master.feed(dog,bone);
master.feed(cat,fish);
master.feed(monkey,peach);
```

> 多态利于代码的维护和扩展，当我们需要使用同一类树上的对象时，只需要传入不同的参数就行了，而不需要再 new 一个对象。

## 三大特征的优点

> 封装：封装的优势在于定义只可以在类内部进行对属性的操作，外部无法对这些属性指手画脚，要想修改，也只能通过你定义的封装方法；
>
> 继承：继承减少了代码的冗余，省略了很多重复代码，开发者可以从父类底层定义所有子类必须有的属性和方法，以达到耦合的目的；
>
> 多态：多态实现了方法的个性化，不同的子类根据具体状况可以实现不同的方法，光有父类定义的方法不够灵活，遇见特殊状况就捉襟见肘了
