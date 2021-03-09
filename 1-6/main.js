let score = [10,15,20,25];
console.log(score);

let i = 0;
while(i < score.length) {
  if (score[i] % 2 == 0){
    console.log(score[i] + "は偶数です");
    
  } 
  i++;
}

let car = {
  gass: 20.5,
  name: 1234
};

console.log("ガソリンは" + car.gass + "です");
console.log("ナンバーは" + car.name + "です");
