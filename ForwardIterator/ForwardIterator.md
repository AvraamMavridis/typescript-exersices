Implement a class ForwardIterator that will be able to iterate over an arbitrary number of iterable containers of type T as if they were one container. e.g. Suppose we have two containers {1,2,3} and {4,5,6} then the ForwardIterator should traverse through these two containers as such: 1 2 3 4 5 6, i.e. it should act as if the two containers have been appended together.


Example

```ts
const forwardIterator = new ForwardIterator<number>([1,2,3], [4,5,6]);

for(let p of forwardIterator) {
  console.log(p); // 1,2,3,4,5,6
}
```
