import{_ as l,c as e,b as s,d as a,e as p,a as o,o as t,r as c}from"./app.5ad0003f.js";const E=JSON.parse('{"title":"CharacterAnimation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"loadStance(guid: string, sync = true): Gameplay.SubStance","slug":"loadstance-guid-string-sync-true-gameplay-substance","link":"#loadstance-guid-string-sync-true-gameplay-substance","children":[]},{"level":3,"title":"SubStance.blendMode","slug":"substance-blendmode","link":"#substance-blendmode","children":[]},{"level":3,"title":"SubStance.play/SubStance.stop","slug":"substance-play-substance-stop","link":"#substance-play-substance-stop","children":[]},{"level":3,"title":"Character.stopStance","slug":"character-stopstance","link":"#character-stopstance","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"XXX-1","slug":"xxx-1","link":"#xxx-1","children":[]},{"level":3,"title":"XXX-2","slug":"xxx-2","link":"#xxx-2","children":[]}]}],"relativePath":"test/Base.md"}'),r={name:"test/Base.md"},y=s("p",null,[s("a",{href:"./../"},"Root"),a(" / "),s("a",{href:"./../modules/Gameplay.Gameplay.html"},"Gameplay"),a(" / CharacterAnimation")],-1),i={id:"characteranimation",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#characteranimation","aria-hidden":"true"},"#",-1),D=o(`<p>extends <a href="./../classes/Gameplay.Gameplay.CharacterBase.html">CharacterBase</a></p><pre>为了方便使用与结构统一, 将姿态也抽象出一个对象, 使用方式和动画对象类似.
</pre><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Properties</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./Base.html#substance-blendmode">blendMode</a>: <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.<a href="./../enums/Gameplay.Gameplay.StanceBlendMode.html">StanceBlendMode</a> <br> 姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身).</td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Methods</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./Base.html#character-loadstance">loadStance</a>(guid: <a href="https://www.runoob.com/typescript/ts-string.html" target="_blank" rel="noreferrer">string</a>, sync = true): <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.<a href="./../classes/Gameplay.Gameplay.SubStance.html">SubStance</a>; <br> 创建一个二级姿态对象并返回, 可在任意端调用.</td></tr><tr><td style="text-align:left;">public <a href="./Base.html#substance-play-substance-stop">play()</a>: <a href="https://www.runoob.com/typescript/ts-type.html" target="_blank" rel="noreferrer">boolean</a>; <br> 播放这个姿态对象, 并返回执行结果.</td></tr><tr><td style="text-align:left;">public <a href="./Base.html#substance-play-substance-stop">stop()</a>: boolean; <br> 停止这个姿态对象, 并返回执行结果.</td></tr><tr><td style="text-align:left;"><a href="./Base.html#character-stopstance">stopStance</a>(sync = true): void; <br> 停止任何正在播放的姿态, 当你不想保存执行 play()后的姿态对象时, 可以直接调用这个方法停止姿态.</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="loadstance-guid-string-sync-true-gameplay-substance" tabindex="-1"><a href="./Base.html#character-loadstance">loadStance</a>(guid: <a href="https://www.runoob.com/typescript/ts-string.html" target="_blank" rel="noreferrer">string</a>, sync = true): <a href="./../modules/Gameplay.Gameplay.html">Gameplay</a>.<a href="./../classes/Gameplay.Gameplay.SubStance.html">SubStance</a> <a class="header-anchor" href="#loadstance-guid-string-sync-true-gameplay-substance" aria-hidden="true">#</a></h3><p>创建一个二级姿态对象并返回, 可在任意端调用.</p><p><strong>guid</strong>参数传入预制姿态资源<strong>GUID</strong>时, 会直接创建对应姿态; 传入<strong>动画资源 GUID</strong>时, 会创建单动画姿态模板, 并将模板的动画槽位设置为指定的动画资源(动态创建单动画姿态). <strong>sync</strong>参数代表对姿态对象的操作是否会同步其他端.</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>即使在服务器上调用 loadStance(), 如果 sync 参数置为 false, 也不会同步操作到客户端.</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> 创建一个二级姿态对象</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">effect</span><span style="color:#676E95;"> 调用端生效</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">guid</span><span style="color:#676E95;"> usage: 预制姿态资源guid或动画资源guid</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">sync</span><span style="color:#676E95;"> usage: 是否自动同步</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">loadStance</span><span style="color:#A6ACCD;">(guid: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sync </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">): Gameplay</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SubStance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="substance-blendmode" tabindex="-1">SubStance.blendMode <a class="header-anchor" href="#substance-blendmode" aria-hidden="true">#</a></h3><p>姿态的混合模式, 可以理解为姿态的播放位置(上半身, 下半身, 全身).</p><p>如果这个姿态是通过<strong>预制姿态资源 GUID</strong>创建的, 那么它的默认值为 StanceBlendMode.<strong>None</strong>, 它会按照资源上的 blendMode 参数指定混合模式; 如果是通过<strong>动画资源 GUID</strong>创建的, 那么它的默认值为 StanceBlendMode.<strong>WholeBody</strong>.</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>(临时, 预计 021 修改)<strong>不应该</strong>把<strong>动画资源 GUID</strong>创建的姿态的混合模式置为 StanceBlendMode.<strong>None</strong>, 因为动画资源没有 blendMode 参数. 虽然不会报错, 但它确实会创建出一个姿态, 而且看不到任何表现.</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> 混合模式</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">precautions</span><span style="color:#676E95;"> 无法对正常播放的姿态进行修改</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">blendMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Gameplay</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StanceBlendMode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> 姿态混合模式</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StanceBlendMode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/** 不指定 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  None</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/** 只混合上半身 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  BlendUpper</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/** 只混合下半身 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  BlendLower</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/** 全身混合 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  WholeBody</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="substance-play-substance-stop" tabindex="-1">SubStance.play/SubStance.stop <a class="header-anchor" href="#substance-play-substance-stop" aria-hidden="true">#</a></h3><p>播放 / 停止这个姿态对象, 并返回执行结果.</p><p>这个操作是否会自动<strong>同步</strong>多端, 取决于调用 Character.<strong>loadStance()<strong>时传入的</strong>sync</strong>参数. 返回的<strong>执行结果</strong>, 在<strong>不自动同步</strong>时多数情况下<strong>可靠</strong>; 在<strong>自动同步</strong>时完全<strong>不可靠</strong>, 总是会返回 true, 因为无法判断其他端的执行情况</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> 播放姿态</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">effect</span><span style="color:#676E95;"> 可选同步</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">public </span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">(): boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> 停止姿态</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">effect</span><span style="color:#676E95;"> 可选同步</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">public </span><span style="color:#82AAFF;">stop</span><span style="color:#A6ACCD;">(): boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="character-stopstance" tabindex="-1">Character.stopStance <a class="header-anchor" href="#character-stopstance" aria-hidden="true">#</a></h3><p>停止任何正在播放的姿态, 当你不想保存执行 play()后的姿态对象时, 可以直接调用这个方法停止姿态. <strong>sync</strong>参数代表了这个操作是否会自动<strong>同步</strong>多端. 因为默认值是 true, 所以对<strong>单端对象</strong>操作时需要把它置为<strong>false</strong>.</p><div class="warning custom-block"><p class="custom-block-title">Precautions</p><p>虽然允许多端同步播放并在单端停止播放, 但你要自己承担出现奇怪现象的责任</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> 停止正在播放的姿态</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">effect</span><span style="color:#676E95;"> 可选同步</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">sync</span><span style="color:#676E95;"> usage: 是否自动同步</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#82AAFF;">stopStance</span><span style="color:#A6ACCD;">(sync </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">): </span><span style="color:#89DDFF;">void;</span></span>
<span class="line"></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><h3 id="xxx-1" tabindex="-1">XXX-1 <a class="header-anchor" href="#xxx-1" aria-hidden="true">#</a></h3><p>在角色初始化完成后, 可以执行下面的代码, 让所有客户端的角色全身播放一个持枪的姿态</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 通过预制姿态GUID, 创建姿态对象(别忘了预加载资源)</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stanceProxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">character</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadStance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">49096</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// [!code  focus]</span></span>
<span class="line"><span style="color:#676E95;">// 修改姿态的混合模式为全身(默认是不指定, 如果你不修改它, 它会按照资源本身的blendMode参数进行播放, 即只在上半身播放)</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stanceProxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">blendMode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Gameplay</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StanceBlendMode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">WholeBody</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 播放这个姿态</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stanceProxy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>当你想停止它时, 可以执行下面的代码</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">stanceProxy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stop</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="xxx-2" tabindex="-1">XXX-2 <a class="header-anchor" href="#xxx-2" aria-hidden="true">#</a></h3><p>在角色初始化完成后, 可以执行下面的代码, 仅让这个客户端的角色下半身播放一个坐下的姿态</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 通过动画GUID, 创建姿态对象(别忘了预加载资源)</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> stanceProxy </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">character</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadStance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">29741</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 修改姿态的混合模式为下半身(默认是全身)</span></span>
<span class="line"><span style="color:#A6ACCD;">stanceProxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">blendMode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Gameplay</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">StanceBlendMode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BlendLower</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 播放这个姿态</span></span>
<span class="line"><span style="color:#A6ACCD;">stanceProxy</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>当你想停止它时, 可以执行下面的代码</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">character</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopStance</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,37);function C(F,h,A,u,g,b){const n=c("Badge");return t(),e("div",null,[y,s("h1",i,[a("CharacterAnimation "),p(n,{type:"tip",text:"Class"}),a(),d]),D])}const f=l(r,[["render",C]]);export{E as __pageData,f as default};