export default class ForwardIterator<T> {
  private iterables: Iterable<T>[];

  constructor(...rest: Iterable<T>[]) {
    this.iterables = rest;
  }

  *[Symbol.iterator]() {
    for (let it of this.iterables) {
      for (let el of it) {
        yield el;
      }
    }
  }
}
