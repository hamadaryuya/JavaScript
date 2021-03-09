class Taiyaki {
  constructor(name) {
    this.name = name;
  }
  call(){
    console.log(`中身は${this.name}です`);
  }
}

let anko = new Taiyaki('あんこ');
anko.call();

let cream = new Taiyaki('クリーム');
cream.call();

let cheese = new Taiyaki('チーズ');
cheese.call();