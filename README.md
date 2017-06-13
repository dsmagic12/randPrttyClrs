# randPrttyClrs
JavaScript library to generate random, pretty colors
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
<table border="0" cellpadding="2" cellspacing="2">
 <tbody>
  <tr>
   <td width="33%">
    <p>Limits the random colors in both their saturation and luminance values to avoid overly bright, or overly dull/gray colors</p>
   </td>
   <td width="67%">
    <img alt="Color picker showing aproximate constraints on saturation and luminance, plus picker control explanations" border="0" src="https://github.com/dsmagic12/randPrttyClrs/blob/master/RandomPrettyColors_SL_Ranges2.png"/>
   </td>
  </tr>
 </tbody>
</table
 
<br/>
<H2 class='sectionHead'>Basic usage</H2>
<div class='sectionContent'>
<pre class='hljs javascript js-snippit'><div class='useCaseExampleCode hljs javascript'><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../rpc.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span>&gt;</span><span class="javascript">
 $(<span class="hljs-built_in">document</span>).ready(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
  $(<span class="hljs-string">"DIV"</span>).each(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">var</span> cPair = rpc.getRandomPrettyColorPair(<span class="hljs-string">"HSL"</span>);
    $(<span class="hljs-keyword">this</span>).css({<span class="hljs-string">"background-color"</span>:cPair[<span class="hljs-number">1</span>],<span class="hljs-string">"color"</span>:cPair[<span class="hljs-number">0</span>]});
  });
 });
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></div></pre>
</div>
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

