abstract class Book {
  protected _title: string;

  constructor(title: string) {
    this._title = title;
  }

  get title(){
    return this._title;
  }

  abstract forChildren(): boolean;
}

export class NonFiction extends Book {
  forChildren() {
    return false;
  }
}

export class Fiction extends Book {
  private _isForChildren: boolean;

  constructor(title: string, isForChildren: boolean = false) {
    super(title);
    this._isForChildren = isForChildren;
  }

  forChildren() {
    return this._isForChildren;
  }
}

export class CrimeFiction extends Fiction {
  constructor(title: string, isForChildren: boolean = false) {
    let crimeTitle = `${title} (best seller)`;
    super(crimeTitle, isForChildren);
  }
}

abstract class Reader {
  private _name: string;

  constructor(name: string){
    this._name = name;
  }

  abstract likes(book: Book): boolean;

  read(book: Book){
    let msg = this.likes(book) ? 'recommends reading' : 'does not recommend reading';
    return `${this._name} ${msg} "${book.title}"`;
  }
}

export class Academic extends Reader {
  likes(book: Book){
    if(book instanceof NonFiction){
      return true;
    }
    return false;
  }
}

export class Child extends Reader {
  likes(book: Book) {
    return book.forChildren();
  }
}

export class Detective extends Reader {
  likes(book: Book) {
    if(book.constructor === Fiction){
      return true;
    }
    return false;
  }
}


