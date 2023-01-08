class Vacation {
  
  constructor(destination, length) {
  this.destination = destination;
  this.length = length;
  }

  print() {
    console.log(` ${this.destination} 은(는) ${this.length} 일 걸립니다.`);
  }
}

