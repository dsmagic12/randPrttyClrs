# randPrttyClrs
JavaScript library to generate random, pretty colors

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
