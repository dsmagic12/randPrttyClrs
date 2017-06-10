var rpc = rpc || {
 ranges: {
  blue: { high:249, low:151},
  green: { high:150, low:61},
  yellow: { high:60, low:36},
  orange: { high:35, low:10},
  red: { high:[9,359], low:[0,341]},
  purple: { high:340, low:250}
  }
 },
 hslToCSS: function(arrHSL){
  return "hsl("+ arrHSL[0] +", "+ arrHSL[1] +"%, "+ arrHSL[2] +"%)";
 },
 randBetween: function(nMin,nMax){
  return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
 },
 getRandomPrettyDarkColor: function(){
   var h = rpc.randBetween(0,359),
       s = Math.floor(rpc.randBetween(74,215) / 255 * 100),
       l = Math.floor(rpc.randBetween(35,95) / 255 * 100);
 }
};
