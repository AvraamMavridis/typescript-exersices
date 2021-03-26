export default function reverseString(str: string){
  let i = 0;
  let j = str.length - 1;
  let arr = str.split('');
  
  while(i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++;
    j--;
  }

  return arr.join('');
}

console.log(reverseString('12345'));
