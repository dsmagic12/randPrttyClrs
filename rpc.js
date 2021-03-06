var rpc = rpc || {
 ranges: {
  all: { max:359, min:0},
  blue: { max:249, min:151},
  green: { max:150, min:61},
  yellow: { max:60, min:36},
  orange: { max:35, min:10},
  red: { max:[9,359], min:[0,341]},
  purple: { max:340, min:250},
  saturation: {max:215, min:74},
  luminance: {max:[95,225], min:[35,165]}
 },
 hslToCSS: function(arrHSL){
  return "hsl("+ arrHSL[0] +", "+ arrHSL[1] +"%, "+ arrHSL[2] +"%)";
 },
 randBetween: function(nMin,nMax){
  return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
 },
 randBetweens: function(arrMin, arrMax){
  var randomIndex = rpc.randBetween(0, (arrMax.length-1));
  return rpc.randBetween(arrMin[randomIndex], arrMax[randomIndex]);
 },
 getRandomPrettyColor: function(hueRange){
   if ( typeof(hueRange) === "undefined" ) { var hueRange = {min: 0, max: 359}; }
   if ( typeof(hueRange.min) === "object" ) { 
    var randomIndex = rpc.randBetween(0, (hueRange.min.length-1));
    hueRange.min = hueRange.min[randomIndex];
    hueRange.max = hueRange.max[randomIndex];
   }
   var h = rpc.randBetween(hueRange.min,hueRange.max),
       s = Math.floor(rpc.randBetween(rpc.ranges.saturation.min,rpc.ranges.saturation.max) / 255 * 100),
       l = Math.floor(rpc.randBetweens(rpc.ranges.luminance.min,rpc.ranges.luminance.max) / 255 * 100);
   return [h,s,l];
 },
 getRandomPrettyDarkColor: function(hueRange){
   if ( typeof(hueRange) === "undefined" ) { var hueRange = {min: 0, max: 359}; }
   if ( typeof(hueRange.min) === "object" ) { 
    var randomIndex = rpc.randBetween(0, (hueRange.min.length-1));
    hueRange.min = hueRange.min[randomIndex];
    hueRange.max = hueRange.max[randomIndex];
   }
   var h = rpc.randBetween(hueRange.min, hueRange.max),
       s = Math.floor(rpc.randBetween(rpc.ranges.saturation.min,rpc.ranges.saturation.max) / 255 * 100),
       l = Math.floor(rpc.randBetween(rpc.ranges.luminance.min[0],rpc.ranges.luminance.max[0]) / 255 * 100);
   return [h,s,l];
 },
 getRandomPrettyLightColor: function(hueRange){
   if ( typeof(hueRange) === "undefined" ) { var hueRange = {min: 0, max: 359}; }
   if ( typeof(hueRange.min) === "object" ) { 
    var randomIndex = rpc.randBetween(0, (hueRange.min.length-1));
    hueRange.min = hueRange.min[randomIndex];
    hueRange.max = hueRange.max[randomIndex];
   }
   var h = rpc.randBetween(hueRange.min, hueRange.max),
       s = Math.floor(rpc.randBetween(rpc.ranges.saturation.min,rpc.ranges.saturation.max) / 255 * 100),
       l = Math.floor(rpc.randBetween(rpc.ranges.luminance.min[1],rpc.ranges.luminance.max[1]) / 255 * 100);
   return [h,s,l];
 },
 getRandomPrettyColorPair: function(sReturnType, hueRange){
  if ( typeof(sReturnType) === "undefined" ) { var sReturnType = "HSL"; }
  if ( typeof(hueRange) === "undefined" ) { var hueRange = {min: 0, max: 359}; }
  if ( typeof(hueRange.min) === "object" ) { 
   var randomIndex = rpc.randBetween(0, (hueRange.min.length-1));
   hueRange.min = hueRange.min[randomIndex];
   hueRange.max = hueRange.max[randomIndex];
  }
  var darkColor = rpc.getRandomPrettyDarkColor(hueRange);
  var lightColor = [darkColor[0].valueOf(), darkColor[1].valueOf(), Math.floor(rpc.randBetween(rpc.ranges.luminance.min[1],rpc.ranges.luminance.max[1]) / 255 * 100)];
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
