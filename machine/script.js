function Machine() {
  this.state = "stopped";
  this.time = 2000;
  this.timer = null;
  this.interval = null;
}

Machine.prototype.run = function () {
  this.state = "started";
  document.write("Починаю роботу...");
  document.write("Час приготування - " + this.time + " ");
  this.interval = setInterval(
    function () {
      document.write(" | ");
    }.bind(this),
    1000
  );
  this.timer = setTimeout(this.onReady.bind(this), this.time);
  document.write(this.state);
};

Machine.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Готово! ");
  this.state = "stopped";
  document.write(this.state);
};

Machine.prototype.stop = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Примусове вимикання! ");
  this.state = "stopped";
  document.write(this.state);
};

// let machine = new Machine();
// machine.run();

//machine.stop();

// CoffeeMachine

function CoffeeMachine() {
  this.drink = "вода";
  Machine.apply(this);
}

CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.run = function (drink) {
  if (drink != undefined) this.drink = drink;
  document.write("Приготування - " + this.drink + " ");
  if (this.drink == "латте") {
    this.time = 5000;
  }
  if (this.drink == "espresso") {
    this.time = 3000;
  }
  Machine.prototype.run.apply(this);
};

let coffeeMachine = new CoffeeMachine();

coffeeMachine.run("латте");

//coffeeMachine.stop();
