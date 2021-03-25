import DoubleLinkedList from './DoubleLinkedList';

describe('Double Linked List', () => {
  describe('when list is empty', () => {
    it('isEmpty() should return true', () => {
      const list = new DoubleLinkedList<number>();
      expect(list.isEmpty()).toBeTruthy();
    });

    it('.size should be zero', () => {
      const list = new DoubleLinkedList<number>();
      expect(list.size).toBe(0);
    });

    it('after adding a single element on the front root and tail should point to it', () => {
      const list = new DoubleLinkedList<number>();
      list.addToStart(1);
      expect(Object.is(list.getRoot(), list.getTail())).toBeTruthy();
    });

    it('after adding a single element on the end root and tail should point to it', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      expect(Object.is(list.getRoot(), list.getTail())).toBeTruthy();
    });
  });

  describe('when the list is not empty', () => {
    it('should return false when isEmpty is called in a non empty list', () => {
      const list = new DoubleLinkedList<number>();
      list.addToStart(1);
      expect(list.isEmpty()).toBeFalsy();
    });

    it('.size should return the right number of nodes', () => {
      const list = new DoubleLinkedList<number>();
      list.addToStart(1);
      list.addToStart(5);
      expect(list.size).toBe(2);
    });

    it('tail should not be the same as root when multiple elements add on the front', () => {
      const list = new DoubleLinkedList<number>();
      list.addToStart(1);
      list.addToStart(5);
      expect(Object.is(list.getRoot(), list.getTail())).toBeFalsy();
      expect(list.getRoot()?.value).toBe(5);
      expect(list.getTail()?.value).toBe(1);
    });

    it('tail should not be the same as root when multiple elements add on the front', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(5);
      expect(Object.is(list.getRoot(), list.getTail())).toBeFalsy();
      expect(list.getRoot()?.value).toBe(1);
      expect(list.getTail()?.value).toBe(5);
    });

    it('should link elements correctly when added from the front', () => {
      const list = new DoubleLinkedList<number>();
      list.addToStart(1);
      list.addToStart(2);
      list.addToStart(3);
      let root = list.getRoot();
      expect(root?.value).toBe(3);
      expect(root?.next?.value).toBe(2);
      expect(root?.next?.next?.value).toBe(1);
      expect(root?.next?.next?.next).toBe(null);

      let tail = list.getTail();
      expect(tail?.value).toBe(1);
      expect(tail?.prev?.value).toBe(2);
      expect(tail?.prev?.prev?.value).toBe(3);
      expect(tail?.prev?.prev?.prev).toBe(null);
    });

    it('should link elements correctly when added to the end', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(2);
      list.addToEnd(3);
      let tail = list.getTail();
      expect(tail?.value).toBe(3);
      expect(tail?.prev?.value).toBe(2);
      expect(tail?.prev?.prev?.value).toBe(1);
      expect(tail?.prev?.prev?.prev).toBe(null);

      const root = list.getRoot();
      expect(root?.value).toBe(1);
      expect(root?.next?.value).toBe(2);
      expect(root?.next?.next?.value).toBe(3);
      expect(root?.next?.next?.next).toBe(null);
    });
  });

  describe('iteration', () => {
    it('should be able to iterate over the values of the list using for .. of', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(2);
      list.addToEnd(3);
      let i = 0;

      for (let el of list) {
        i++;
        expect(el).toEqual(i);
      }
    });
  });

  describe('at(index) method', () => {
    it('should return the nth element of the list', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(2);
      list.addToEnd(3);

      expect(list.at(2)?.value).toEqual(3);
    });

    it('should return null if we request element outside the list', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(2);
      list.addToEnd(3);

      expect(list.at(4)).toEqual(null);
    });

    it('should return element from in the nth position from the end if we pass negative', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(2);
      list.addToEnd(3);

      expect(list.at(-1)?.value).toEqual(3);
    });
  });

  describe('.map() method', () => {
    it('should return a new double linked list applying the passed modifier', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(2);
      list.addToEnd(3);

      const newList = list.map(i => i * 2);
      const root = newList.getRoot();
      expect(root?.value).toBe(6);
      expect(root?.next?.value).toBe(4);
      expect(root?.next?.next?.value).toBe(2);
    });
  });

  describe('.delete(nth)', () => {
    it('should delete the nth element of the list', () => {
      const list = new DoubleLinkedList<number>();
      list.addToEnd(1);
      list.addToEnd(2);
      list.addToEnd(3);
      list.addToEnd(4);

      list.delete(2);

      const root = list.getRoot();
      expect(root?.value).toBe(1);
      expect(root?.next?.value).toBe(2);
      expect(root?.next?.next?.value).toBe(4);      
    });
  });
});
