export default function hasUniqueCharacters(str: string): boolean {
  const chars = new Set();
  for(let c of str){
    if(chars.has(c)) return false;
    chars.add(c);
  }
  return true;
}
