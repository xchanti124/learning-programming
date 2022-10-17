class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let head1: ListNode | null = list1;
  let head2: ListNode | null = list2;
  let newHead: ListNode;
  let newTail: ListNode;

  if (head1.val > head2.val) {
    newHead = head2;
    newTail = head2;
    head2 = head2.next;
  } else {
    newHead = head1;
    newTail = head1;
    head1 = head1.next;
  }

  while (head1 && head2) {
    if (head1.val > head2.val) {
      newTail.next = head2;
      newTail = head2;
      head2 = head2.next;
      continue;
    }

    newTail.next = head1;
    newTail = head1;
    head1 = head1.next;
  }

  newTail.next = head1 ? head1 : head2;
  return newHead;
}

function createLinkedList(arr: number[]): ListNode {
  const head = new ListNode(arr[0]);
  let lastNode = head;
  for (let i = 1; i < arr.length; i++) {
    const currentNode = new ListNode(arr[i]);
    lastNode.next = currentNode;
    lastNode = currentNode;
  }
  return head;
}

function collectLinkedList(head: ListNode | null): number[] {
  let currentNode: ListNode | null = head;
  const accumulator: number[] = [];
  while (currentNode !== null) {
    accumulator.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return accumulator;
}
// let list1Node1 = new ListNode();
// let list1Node2 = new ListNode();
// let list1Node3 =
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
let a = createLinkedList([1, 2, 4, 4, 7]);
let c = createLinkedList([5, 6, 7, 8]);
// console.log(a.next?.next);
let ac = mergeTwoLists(a, c);
console.log(collectLinkedList(ac));
