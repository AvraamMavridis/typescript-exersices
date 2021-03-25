import { NonFiction, Fiction, CrimeFiction, Academic, Child, Detective, Reader } from './RecommendedBooks';

describe('Recommended Books', () => {
  describe('books: ', () => {
    describe('Non Fiction', () => {
      it('should have the correct title', () => {
        const title = 'Factfullness';
        const book = new NonFiction(title);
        expect(book.title).toEqual(title);
      });

      it('should not be recommended for children', () => {
        const title = 'Factfullness';
        const book = new NonFiction(title);
        expect(book.forChildren()).toBeFalsy();
      });
    });

    describe('Fiction', () => {
      it('should have the correct title', () => {
        const title = 'A walk in the park';
        const book = new Fiction(title, true);
        expect(book.title).toEqual(title);
      });

      it('should be recommended for children when passed variable is true', () => {
        const title = 'A walk in the park';
        const book = new Fiction(title, true);
        expect(book.forChildren()).toBeTruthy();
      });

      it('should not be recommended for children when passed variable is false', () => {
        const title = 'A walk in the park';
        const book = new Fiction(title, false);
        expect(book.forChildren()).toBeFalsy();
      });
    });

    describe('CrimeFiction', () => {
      it('should be a subclass of Fiction', () => {
        const title = 'The girl with the drago tattoo';
        const book = new CrimeFiction(title, true);

        expect(book instanceof CrimeFiction).toBeTruthy();
        expect(book instanceof Fiction).toBeTruthy();
      });

      it('should have the correct title', () => {
        const title = 'The girl with the drago tattoo';
        const book = new CrimeFiction(title, true);
        expect(book.title).toEqual(`${title} (best seller)`);
      });

      it('should be recommended for children when passed variable is true', () => {
        const title = 'A walk in the park';
        const book = new CrimeFiction(title, true);
        expect(book.forChildren()).toBeTruthy();
      });

      it('should not be recommended for children when passed variable is false', () => {
        const title = 'A walk in the park';
        const book = new CrimeFiction(title, false);
        expect(book.forChildren()).toBeFalsy();
      });
    });
  });

  describe('readers: ', () => {
    describe('Reader', () => {
      it('should like every book', () => {
        const book1 = new NonFiction('Factfullness');
        const book2 = new Fiction('A walk in the park');
        const book3 = new CrimeFiction('The girl with the dragon tatoo');
        const reader = new Reader('Christina');

        expect(reader.read(book1)).toBe('Christina recommends reading "Factfullness"');
        expect(reader.read(book2)).toBe('Christina recommends reading "A walk in the park"');
        expect(reader.read(book3)).toBe('Christina recommends reading "The girl with the dragon tatoo (best seller)"');
      });
    });

    describe('Academic', () => {
      it('should like NonFiction books', () => {
        const book = new NonFiction('Factfullness');
        const academic = new Academic('George');
        expect(academic.read(book)).toBe('George recommends reading "Factfullness"');
      });

      it('should not like Fiction books', () => {
        const book = new Fiction('A walk in the park');
        const academic = new Academic('George');
        expect(academic.read(book)).toBe('George does not recommend reading "A walk in the park"');
      });

      it('should not like Crime books', () => {
        const book = new CrimeFiction('The girl with the dragon tatoo');
        const academic = new Academic('George');
        expect(academic.read(book)).toBe(
          'George does not recommend reading "The girl with the dragon tatoo (best seller)"',
        );
      });
    });

    describe('Child', () => {
      it('should not like Non Fiction books', () => {
        const book = new NonFiction('Factfullness');
        const child = new Child('Ioannis');
        expect(child.read(book)).toBe('Ioannis does not recommend reading "Factfullness"');
      });

      it('should like Fiction books that are suitable for children', () => {
        const book = new Fiction('A walk in the park', true);
        const child = new Child('Ioannis');
        expect(child.read(book)).toBe('Ioannis recommends reading "A walk in the park"');
      });
    });

    describe('Detective', () => {
      it('should like Fiction books', () => {
        const book = new Fiction('A walk in the park');
        const detective = new Detective('Avraam');
        expect(detective.read(book)).toBe('Avraam recommends reading "A walk in the park"');
      });

      it('should not like Crime Fiction books', () => {
        const book = new CrimeFiction('The girl with the dragon tatoo');
        const detective = new Detective('Avraam');
        expect(detective.read(book)).toBe(
          'Avraam does not recommend reading "The girl with the dragon tatoo (best seller)"',
        );
      });
    });
  });
});
