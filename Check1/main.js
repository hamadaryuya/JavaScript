let numbers = [2, 5, 12, 13, 15, 18, 22];

array = [];
function isEven(num) {
  for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      array.push(numbers[i]);
    }
  }
  console.log(num + "は偶数です");
}

isEven(array);


class Car {
  constructor(gass, number){
    this.gass = gass;
    this.number = number;
  }

  getNumGas() {
    console.log(`ガソリンは${this.gass}です`);
    console.log(`ガソリンは${this.number}です`);
  }
}

let car = new Car("軽油", 1234)
car.getNumGas();
