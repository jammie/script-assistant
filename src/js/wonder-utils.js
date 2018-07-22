
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

Number.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  var time = "";

  if (hours > 0) {
    if (hours   < 10) {hours   = "0"+hours;}
    time += hours + ":";
  }

  if (time != "") {
    if (minutes < 10) {minutes = "0"+minutes;}
  }
  if (seconds < 10) {seconds = "0"+seconds;}

  time += minutes+':'+seconds;
  return time;
} 

function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
if (!Math.round10) {
  Math.round10 = function(value, exp) {
    return decimalAdjust('round', value, exp);
  };
}
// Decimal floor
if (!Math.floor10) {
  Math.floor10 = function(value, exp) {
    return decimalAdjust('floor', value, exp);
  };
}
// Decimal ceil
if (!Math.ceil10) {
  Math.ceil10 = function(value, exp) {
    return decimalAdjust('ceil', value, exp);
  };
}

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.randomElementByPercentage = function (lowerBound, upperBound) {
  var floor = Math.max(Math.floor(lowerBound * this.length)-1,0);
  var ceil = Math.max(Math.floor(upperBound * this.length),0);


  return this[Math.floor(Math.random() * (ceil-floor))+floor]
}
