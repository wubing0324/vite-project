function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const x = loggingIdentity([1, 2, 3]);
console.log(x);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const person = { name: "Alice", age: 30, address: "123 Main St" };
const name1 = getProperty(person, "name"); // 类型为 string
const age = getProperty(person, "age"); // 类型为 number
console.log(person, name1, age)