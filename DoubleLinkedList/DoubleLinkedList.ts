class ListNode<T> {
  private _value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;

  constructor(value: T) {
    this._value = value;
    this.next = null;
    this.prev = null;
  }

  get value(): T {
    return this._value;
  }
}

export default class DoubleLinkedList<T> {
  private root: ListNode<T> | null;
  private tail: ListNode<T> | null;
  private _size: number;

  constructor() {
    this.root = null;
    this.tail = null;
    this._size = 0;
  }

  get size(): number {
    return this._size;
  }

  addToEnd(value: T) {
    const newNode = new ListNode<T>(value);

    if (!this.tail) {
      this.root = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  at(index: number): ListNode<T> | null {
    let v = this.root,
      len = 0;

    let i = index >= 0 ? index : this.size + index;

    while (len < i) {
      v = v ? v.next : null;
      len++;
    }

    return v || null;
  }

  map(fun: (element: T, index: number) => T): DoubleLinkedList<T> {
    let newList = new DoubleLinkedList<T>();
    let index = 0;

    for (let el of this) {
      newList.addToStart(fun(el, index));
      index++;
    }

    return newList;
  }

  addToStart(value: T) {
    const newNode = new ListNode<T>(value);
    if (!this.root) {
      this.root = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.root;
      this.root.prev = newNode;
      this.root = newNode;
    }
    this._size++;
  }

  getRoot(): ListNode<T> | null {
    return this.root;
  }

  getTail(): ListNode<T> | null {
    return this.tail;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  delete(index: number): void {
    const elementToDelete = this.at(index);
    if (elementToDelete) {
      if (elementToDelete.prev) {
        elementToDelete.prev.next = elementToDelete.next;
      }
      if (elementToDelete.next) {
        elementToDelete.next.prev = elementToDelete.prev;
      }
    }
  }

  concat(list: DoubleLinkedList<T>) {
    const rootList2 = list.getRoot();
    const tailList1 = this.getTail();

    if (tailList1) {
      tailList1.next = rootList2;
      this.tail = list.getTail();
    }

    if (rootList2) {
      rootList2.prev = tailList1;
    }

    this._size = this._size + list.size;
    return this;
  }

  *[Symbol.iterator]() {
    let len = 0;
    let v: ListNode<T> | null = this.root;

    while (len < this._size && v) {
      yield v.value;
      v = v.next;
      len++;
    }
  }
}
