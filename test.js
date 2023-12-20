// 属性装饰器工厂函数
function logProperty(target, key) {
    // 保存原始的属性值
    let value = target[key];
    console.log(`${value}======`);


    // 属性的 getter 方法
    const getter = function () {
        console.log(`Getting value: ${value}`);
        return value;
    };

    // 属性的 setter 方法
    const setter = function (newValue) {
        console.log(`Setting value: ${newValue}`);
        value = newValue;
    };

    // 重新定义属性，替换原始的 getter 和 setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}

// 使用属性装饰器
class MyClass {
    @logProperty
    myProperty;

    constructor(value) {
        this.myProperty = value;
    }
}

// 创建实例
const myInstance = new MyClass("Hello, World!");

// 访问属性，触发装饰器中的日志输出
console.log(myInstance.myProperty);
myInstance.myProperty = "New Value";
console.log(myInstance.myProperty);