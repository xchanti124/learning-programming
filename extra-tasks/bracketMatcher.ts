class Stack<T> {
  internalArr: T[];
  constructor() {
    this.internalArr = [];
  }
  peek() {
    return this.internalArr[this.internalArr.length - 1];
  }
  push(val: T) {
    this.internalArr.push(val);
  }
  pop() {
    return this.internalArr.pop();
  }
  isEmpty() {
    return this.internalArr.length === 0;
  }
}

function isValid(s: string): boolean {
  const bracketMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const stack = new Stack<string>();
  for (let i = 0; i < s.length; i++) {
    if (bracketMap.has(s[i])) {
      stack.push(s[i]);
      // ")" === "("
    } else if (s[i] === bracketMap.get(stack.peek())) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.isEmpty();
}
console.log(isValid("))))"));
// const stack = new Stack<number | string>();
// stack.push(1);
// stack.push(2);
// stack.push(7);
// stack.push(9);
// stack.push(14);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());
// while (!stack.isEmpty()) {
//   stack.pop();
// }
// console.log(stack.isEmpty());
