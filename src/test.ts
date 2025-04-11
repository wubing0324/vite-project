type UserType = {
  name: string
  age: string
  phone: string
}
type UserInfo = {
  sex: string
}

class User implements UserType, UserInfo {
  name: string
  age: string
  phone: string
  sex: string
  constructor(name: string, age: string, phone: string, sex: string) {
    this.name = name
    this.age = age
    this.phone = phone
    this.sex = sex
  }
}

const user = new User('张三', '20', '12345678901', '男')
console.log(user)
