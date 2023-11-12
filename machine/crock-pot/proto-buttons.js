window.onload = function () {
  function Machine(info) {
    this.info = info;
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }

  Machine.prototype.run = function () {
    try {
      if (this.state == "started") {
        throw new Error("Машина зайнята!");
      } else {
        this.state = "started";
        this.info.innerHTML += "Починаю роботу...";
        this.info.innerHTML += "Час приготування - " + this.time + " ";
        this.interval = setInterval(
          function () {
            this.info.innerHTML += " | ";
          }.bind(this),
          1000
        );
        this.timer = setTimeout(this.onReady.bind(this), this.time);
        this.info.innerHTML += this.state;
      }
    } catch (ex) {
      this.info.innerHTML += ex.message;
    }
  };

  Machine.prototype.onReady = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.info.innerHTML += "Готово!";
    this.state = "stopped";
    this.info.innerHTML += this.state;
  };

  Machine.prototype.stop = function () {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    this.info.innerHTML = "Примусове вимкнення!";
    this.state = "stopped";
    this.info.innerHTML += this.state;
  };

  function CrockPot(info) {
    this.meal = "вода";
    Machine.call(this, info);
  }

  CrockPot.prototype = Object.create(Machine.prototype);
  CrockPot.prototype.constructor = CrockPot;

  CrockPot.prototype.run = function (meal) {
    try {
      if (this.state == "started") {
        throw new Error("Машина зайнята!");
      } else {
        if (meal != undefined) {
          this.meal = meal;
        }
        this.info.innerHTML = "Приготування: " + this.meal + " ";
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
        Machine.prototype.run.apply(this);
      }
    } catch (ex) {
      this.info.innerHTML += ex.message;
    }
  };

  let info = document.getElementById("info");
  let borshch = document.getElementById("borshch");
  let soup = document.getElementById("soup");
  let plov = document.getElementById("plov");
  let holubci = document.getElementById("holubci");
  let stop = document.getElementById("stop");

  let coffeeMachine = new CrockPot(info);

  borshch.addEventListener("click", function () {
    coffeeMachine.run("borshch");
  });

  soup.addEventListener("click", function () {
    coffeeMachine.run("soup");
  });

  plov.addEventListener("click", function () {
    coffeeMachine.run("plov");
  });

  holubci.addEventListener("click", function () {
    coffeeMachine.run("holubci");
  });

  stop.addEventListener("click", function () {
    coffeeMachine.stop();
  });
};
