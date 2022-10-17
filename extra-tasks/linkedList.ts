class DataNode<T> {
  public value: T;
  public next?: DataNode<T>;

  public constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head?: DataNode<T>;
  private tail?: DataNode<T>;

  public insert(val: T) {
    const newNode = new DataNode(val);
    if (this.head === undefined || this.tail === undefined) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  public insertAt(val: T, index: number) {
    const newNode = new DataNode(val);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = this.tail ?? newNode;
      // if (this.tail === undefined) {
      //   this.tail = newNode;
      // } ---> same as line 29
      return;
    }

    let counter = 0;
    let currentNode = this.head;
    while (counter <= index && currentNode !== undefined) {
      if (counter === index - 1) {
        const oldNext = currentNode.next;
        currentNode.next = newNode; // here, index + 1 equals to new node, to cancel: index - 1 in if statement
        newNode.next = oldNext;
        return;
      }
      counter++;
      currentNode = currentNode.next;
    }
    throw new Error("Index not found.");
  }

  public valueAt(index: number): T {
    let counter = 0;
    let currentNode = this.head;
    while (counter <= index && currentNode !== undefined) {
      if (index === counter) {
        return currentNode.value;
      }
      counter++;
      currentNode = currentNode.next;
    }
    throw new Error("Index not found.");
  }

  public collect(): T[] {
    const arr: T[] = [];
    let currentNode = this.head;
    while (currentNode !== undefined) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const list = new LinkedList<number>();

console.log(list.collect());
list.insert(1);
list.insert(2);
list.insert(3);
console.log(list.collect());
console.log(list);
list.insertAt(10, 3);
console.log(list.collect());
console.log(list.valueAt(4));

// ?? if the thing on the left is not undefined or null, take that; but if it is undefined or null, take what is on the right
// another method: deleteAt()
// ? just means that whatever stands left of it is optional
