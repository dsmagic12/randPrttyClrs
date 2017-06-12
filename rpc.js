var rpc = rpc || {
 ranges: {
  blue: { max:249, min:151},
  green: { max:150, min:61},
  yellow: { max:60, min:36},
  orange: { max:35, min:10},
  red: { max:[9,359], min:[0,341]},
  purple: { max:340, min:250}
 },
 hslToCSS: function(arrHSL){
  return "hsl("+ arrHSL[0] +", "+ arrHSL[1] +"%, "+ arrHSL[2] +"%)";
 },
 randBetween: function(nMin,nMax){
  return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
 },
 randBetweens: function(arrMin, arrMax){
  var randomIndex = randBetween(0, (arrMax.length-1));
  return randBetween(arrMin[randomIndex], arrMax[randomIndex]);
 },
 getRandomPrettyColor: function(hueRange){
   if ( typeof(hueRange) === "undefined" ) { hueRange = {min: 0, max: 359}; }
   if ( typeof(hueRange.min) === "array" ) { 
    var randomIndex = randBetween(0, (hueRange.min.length-1));
    hueRange.min = hueRange.min[randomIndex];
    hueRange.max = hueRange.max[randomIndex];
   }
   var h = rpc.randBetween(hueRange.min,hueRange.max),
       s = Math.floor(rpc.randBetween(74,215) / 255 * 100),
       l = Math.floor(rpc.randBetweens([35,165],[95,225]) / 255 * 100);
   return [h,s,l];
 },
 getRandomPrettyDarkColor: function(hueRange){
   if ( typeof(hueRange) === "undefined" ) { hueRange = {min: 0, max: 359}; }
   if ( typeof(hueRange.min) === "array" ) { 
    var randomIndex = randBetween(0, (hueRange.min.length-1));
    hueRange.min = hueRange.min[randomIndex];
    hueRange.max = hueRange.max[randomIndex];
   }
   var h = rpc.randBetween(hueRange.min,hueRange.max),
       s = Math.floor(rpc.randBetween(74,215) / 255 * 100),
       l = Math.floor(rpc.randBetween(35,95) / 255 * 100);
   return [h,s,l];
 },
 getRandomPrettyLightColor: function(hueRange){
   if ( typeof(hueRange) === "undefined" ) { hueRange = {min: 0, max: 359}; }
   if ( typeof(hueRange.min) === "array" ) { 
    var randomIndex = randBetween(0, (hueRange.min.length-1));
    hueRange.min = hueRange.min[randomIndex];
    hueRange.max = hueRange.max[randomIndex];
   }
   var h = rpc.randBetween(hueRange.min,hueRange.max),
       s = Math.floor(rpc.randBetween(74,215) / 255 * 100),
       l = Math.floor(rpc.randBetween(165,225) / 255 * 100);
   return [h,s,l];
 },
 getRandomPrettyColorPair: function(sReturnType, hueRange){
  if ( typeof(sReturnType) === "undefined" ) { var sReturnType = "HSL"; }
  if ( typeof(hueRange) === "undefined" ) { hueRange = {min: 0, max: 359}; }
  if ( typeof(hueRange.min) === "array" ) { 
   var randomIndex = randBetween(0, (hueRange.min.length-1));
   hueRange.min = hueRange.min[randomIndex];
   hueRange.max = hueRange.max[randomIndex];
  }
  var darkColor = rpc.getRandomPrettyDarkColor(hueRange);
  var lightColor = [darkColor[0].valueOf(), darkColor[1].valueOf(), Math.floor(randBetween(165,225) / 255 * 100)];
  switch (sReturnType){
   case "HSL":
     var darkHSL = rpc.hslToCSS(darkColor);
     var lightHSL = rpc.hslToCSS(lightColor);
     return [darkHSL, lightHSL];
     break;
   case "Values":
     return [darkColor, lightColor];
     break;
   default:
     try{
      console.log("ERROR Unknown argument value |"+ sReturnType +"|");
     }catch(err){}
    return false;
  }
 }
};
