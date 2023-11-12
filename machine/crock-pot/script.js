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

function CrockPot() {
  this.meal = "вода";
  Machine.apply(this);
}

CrockPot.prototype = Object.create(Machine.prototype);
CrockPot.prototype.constructor = CrockPot;

CrockPot.prototype.run = function (meal) {
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

  Machine.prototype.run.apply(this);
};

let crockPot = new CrockPot();

crockPot.run("борщ");
