// // abstract class Animal {
// //   constructor(readonly name: string) {}

// //   abstract eat(): void;

// //   getName(): void {
// //     console.log(`dog name: ${this.name}`);
// //   }
// // }

// // class Dog extends Animal {
// //   eat(): void {
// //     console.log("dog eat meat");
// //   }
// // }
// // abstract class MyElement {
// //   abstract render(): string;
// // }

// // function engine(nodes: MyElement[]): string[] {
// //   return nodes.map((n) => n.render());
// // }

// // class ImageElement extends MyElement {
// //   render(): string {
// //     return "image";
// //   }
// // }

// // class TextElement extends MyElement {
// //   render(): string {
// //     return "image";
// //   }
// // }

// // const x = engine([new ImageElement(), new TextElement()]);

// // console.log(x);

// const myFunc = () => {
//   return "hello";
// };

// // type MyFunc = typeof myFunc;

// // type ReturnValue = ReturnType<MyFunc>;

// // const result: ReturnValue = myFunc();

// // const testingFrameworks = {
// //   vitest: {
// //     label: "Vitest",
// //   },
// //   jest: {
// //     label: "Jest",
// //   },
// //   mocha: {
// //     label: "Mocha",
// //   },
// // };

// // console.log(testingFrameworks["mocha"]);

// // console.log("Myfunc", MyFunc);
// // console.log("ReturnValue", ReturnValue);

// export const fakeDataDefaults = {
//   String: "Default string",
//   Int: 1,
//   Float: 1.14,
//   Boolean: true,
//   ID: "id",
// };

// type StringType = fakeDataDefaults["String"]

// console.log(StringType);

const nums = [1, 2, 3, 2];

for (const num of nums) {
  console.log(num);
}
