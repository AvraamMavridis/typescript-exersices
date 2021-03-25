import * as fs from 'fs';
import * as path from 'path';

function getSynonyms(lines: string[]): Map<string, string> {
  let dictionary = new Map<string, string>();
  lines.forEach((line: string) => {
    const [word1, word2] = line.split('=');
    dictionary.set(word1, word2);
    dictionary.set(word2, word1);
  });
  return dictionary;
}

export default function replaceWithSynonyms(text: string) {
  try {
    const data = fs.readFileSync(path.join(__dirname, './synonyms.txt'), 'utf8');
    const lines = data.split(/\r?\n/);
    const dictionary = getSynonyms(lines);

    let words = text.split(' ').map(word => {
      return dictionary.get(word) || word;
    });

    return words.join(' ');
  } catch (err) {
    console.error(err);
  }
}
