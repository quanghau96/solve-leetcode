// type Company = {
//   name: string;
//   location: string;
//   isProgrammer: boolean;
//   hello: function;
// };

// let company = {
//   name: "200lab",
//   location: "200lab",
//   isProgrammer: false,

//   hello() {
//     return `hello ${this.name}`;
//   },
// };

// const fn = company.hello();

// console.log(fn);

class Cat {
  // name?: string;
  // age!: number; // khẳng định khi dùng age sẽ có dữ liệu

  constructor(
    readonly name: string,
    public age: number,
  ) {}

  eat(): string {
    return `${this.name} i am eating`;
  }

  // afterAYear
}

const mo = new Cat("200lab", 12);

console.log(mo, mo.name, mo.age, mo.eat.bind(mo));
