class NewStack<T> {
  private arr: T[];
  public constructor() {
    this.arr = [];
  }
  public peek() {
    return this.arr[this.arr.length - 1];
  }
  public push(val: T) {
    this.arr.push(val);
  }
  public pop() {
    return this.arr.pop();
  }
  public isEmpty() {
    return this.arr.length === 0;
  }
}

const bracketMatcher = (s: string) => {
  const bracketStack = new NewStack<string>();
  const bracketMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (bracketMap.has(s[i])) {
      bracketStack.push(s[i]);
      continue;
    }
    if (s[i] === bracketMap.get(bracketStack.peek())) {
      bracketStack.pop();
      continue;
    }
    return false;
  }
  return bracketStack.isEmpty();
};

console.log(bracketMatcher("({[]}){"));

// before creating a class, think about its internal state
// define every variable and give it a type
// inheritance is an anti pattern, never use it --> always prefer patterns like dependecy injection
// composition > inheritance
// classes are like blueprints
// field --> variable in a class
// method --> function in a class
