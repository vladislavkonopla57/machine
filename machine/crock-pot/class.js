"use strict";
class Machine {
  constructor() {
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }

  run() {
    this.state = "started";
    document.write("Починаю роботу...");
    document.write("Час приготування - " + this.time + " ");
    this.interval = setInterval(() => {
      document.write(" | ");
    }, 1000);
    this.timer = setTimeout(this.onReady, this.time);
    document.write(this.state);
  }

  onReady = () => {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("Готово! ");
    this.state = "stopped";
    document.write(this.state);
  };

  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("Примусове вимикання! ");
    this.state = "stopped";
    document.write(this.state);
  }
}

class CrockPot extends Machine {
  constructor() {
    super();
    this.meal = "вода";
  }
  run(meal) {
    if (meal != undefined) this.meal = meal;
    document.write("Приготування - " + this.meal + " ");
    switch (meal) {
      case "борщ":
        this.time = 2000;
        break;
      case "суп":
        this.time = 2000;
        break;
      case "плов":
        this.time = 2000;
        break;
      case "голубці":
        this.time = 2000;
        break;
    }
    super.run();
  }
}

let crockPot = new CrockPot();

crockPot.run("борщ");
