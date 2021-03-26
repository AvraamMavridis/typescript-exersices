const base: { [key: string]: string } = {
  '1': 'st',
  '2': 'nd',
  '3': 'rd',
};

function getSuffix(desicionChars: string) {
  let key: string;

  if (+desicionChars / 10 > 2) {
    key = desicionChars[1];
    return base[key] || 'th';
  } else {
    return base[+desicionChars] || 'th';
  }
}

export default function numberToOrdinal(number: number) {
  const desicionChars = `${number}`.slice(-2);
  return `${number}${getSuffix(desicionChars)}`;
}
