//define parent class Media with common properties, getters, and methods.
class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(newCheckout){
      this._isCheckedOut = newCheckout;
    }
    getAverageRating(){
     const sum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
     const length = this._ratings.length;
     return sum/length;
    }
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating){
      this._ratings.push(rating)
    }
  }
  
  //define subclass for Books under Media with additional properties and getters
  class Book extends Media {
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  //define subclass for Movies under Media with additional properties and getters
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  //define subclass for CD's under Media with additional properties and getters
  class CD extends Media {
    constructor(title, artist, songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  }
  
  //Create an instance of class Book
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log('HoE checked out? ' + historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(6);
  console.log('HoE avg rating: ' + historyOfEverything.getAverageRating());
  
  //Create an instance of class Movie
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log('Speed checked out? ' + speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log('Speed avg rating: ' + speed.getAverageRating());
  