# randPrttyClrs
JavaScript library to generate random, pretty colors

<table border="0" cellpadding="2" cellspacing="2">
 <tbody>
  <tr>
   <td width="75%">
    <p>Limits the random colors in both their saturation and luminance values to avoid overly bright, or overly dull/gray colors</p>
   </td>
   <td width="25%">
    <img alt="Color picker showing aproximate constraints on saturation and luminance, plus picker control explanations" border="0" src="https://github.com/dsmagic12/randPrttyClrs/blob/master/RandomPrettyColors_SL_Ranges2.png"/>
   </td>
  </tr>
 </tbody>
</table
 
<br/>
<H2 class='sectionHead'>Use Cases</H2>
<div class='sectionContent'>

<!-- start of use case list -->
<ol class='useCaseList'>

<li class='useCase'>
  <h4 class='useCaseTitle'>Generate a pair of colors, one darker and one lighter, for the same hue</h4>
  <p class='useCaseDescription'>This code will generate a pair of CSS HSL color values for a random hue. The first color element in the returned array is for the darker shade, and the second element is for the lighter shade.</p>
  <pre class='hljs javascript js-snippit'><code class='useCaseExampleCode'>var cPair = rpc.getRandomPrettyColorPair("HSL");
$("DIV").each(function(){
  $(this).css({"background-color":cPair[0],"color":cPair[1]});
});</code></pre>

</li>

</ol>
<!-- end of use case list -->

</div>
