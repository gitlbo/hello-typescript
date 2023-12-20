class Person {
    @log
    name!: string;
}

function log(target: any, key: any) {
    let value: any;

    function setter(newValue: any) {
        console.log(`赋值之前，执行额外操作。新值为${newValue}`);
        value = newValue;
        console.log(`赋值之后，执行额外操作。新值为${newValue}`);
    }

    function getter() {
        return value;
    }

    Object.defineProperty(target, key, {
        set: setter,
        get: getter
    })
}

let person = new Person();
person.name='lisi'
person.name='wangwu'