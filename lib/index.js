exports.generate = function () {
  var string = "";
  var chars =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for (var i = 0; i < 8; i++) {
    string += chars[Math.floor(Math.random()*chars.length -1)];
  };
  return string;
};
