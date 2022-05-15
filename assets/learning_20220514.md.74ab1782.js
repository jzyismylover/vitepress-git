import{_ as s,c as a,o as n,a as e}from"./app.e909b42f.js";const g='{"title":"VitePress","description":"","frontmatter":{},"headers":[{"level":2,"title":"VitePress","slug":"vitepress"},{"level":3,"title":"\u57FA\u7840\u914D\u7F6E","slug":"\u57FA\u7840\u914D\u7F6E"},{"level":3,"title":"\u76EE\u5F55\u4ECB\u7ECD","slug":"\u76EE\u5F55\u4ECB\u7ECD"},{"level":3,"title":"config.js","slug":"config-js"}],"relativePath":"learning/20220514.md","lastUpdated":1652573145410}',t={},p=e(`<h2 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-hidden="true">#</a></h2><p><a href="https://vitejs.cn/vitepress/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></p><p>\u2B50 VitePress\u662F\u4EC0\u4E48\u3002VitePress\u5176\u5B9E\u662F\u57FA\u4E8E vite \u642D\u5EFA\u7684\u4E00\u4E2A\u4EE5 markdown \u4E3A\u4E2D\u5FC3\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684 markdown \u8BED\u6CD5\u5F00\u53D1\u4E00\u4E2A\u81EA\u5DF1\u7684\u535A\u5BA2\uFF0C\u597D\u5904\u5728\u4E8E\u57FA\u672C\u4E0D\u7528\u53BB\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002</p><h3 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1">\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h3><ul><li>\u6B65\u9AA4 1: \u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u76EE\u5F55</li></ul><div class="language-javascript"><pre><code>$ mkdir vitepress<span class="token operator">-</span>starter <span class="token operator">&amp;&amp;</span> cd vitepress<span class="token operator">-</span>starter
</code></pre></div><ul><li>\u6B65\u9AA4 2: \u521D\u59CB\u5316 npm \u914D\u7F6E</li></ul><div class="language-javascript"><pre><code>$ npm run init
</code></pre></div><ul><li>\u6B65\u9AA4 3: \u5B89\u88C5 VitePress\u5230\u5F00\u53D1\u73AF\u5883</li></ul><div class="language-javascript"><pre><code>$ npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev vitepress
</code></pre></div><ul><li>\u6B65\u9AA4 4: \u521B\u5EFA\u6302\u8F7D\u76EE\u5F55</li></ul><div class="language-javascript"><pre><code>$ mkdir docs
</code></pre></div><ul><li>\u6B65\u9AA4 5: \u6DFB\u52A0\u4E00\u4E9B\u542F\u52A8\u547D\u4EE4</li></ul><p>\u{1F511} script \u91CC\u9762\u5176\u5B9E\u5C31\u662F\u5BF9\u5E94\u7684\u7A0B\u5E8F\u811A\u672C\uFF0C\u5BF9\u5E94 dev \u522B\u540D\u5C31\u662F\u542F\u52A8\u811A\u672C\uFF0Cbuild \u522B\u540D\u5C31\u662F\u6253\u5305\u811A\u672C</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre></div><ul><li>\u6B65\u9AA4 6: \u5728\u672C\u5730\u670D\u52A1\u5668\u4E0A\u542F\u52A8\u6587\u6863\u7AD9\u70B9</li></ul><div class="language-javascript"><pre><code><span class="token comment">// vite \u4F1A\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u670D\u52A1\u5668\u6765\u6302\u8F7D\u6211\u4EEC\u7684\u5E94\u7528</span>
$ npm run dev
</code></pre></div><h3 id="\u76EE\u5F55\u4ECB\u7ECD" tabindex="-1">\u76EE\u5F55\u4ECB\u7ECD <a class="header-anchor" href="#\u76EE\u5F55\u4ECB\u7ECD" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>vitepress
    \u2502
    \u251C\u2500\u2500\u2500 docs
    \u2502     \u2502
    \u2502     \u251C\u2500\u2500 <span class="token punctuation">.</span>vitepress
    \u2502     \u2502     \u2514\u2500\u2500 config<span class="token punctuation">.</span>js
    \u2502     \u251C\u2500\u2500 <span class="token keyword">public</span>
    \u2502     \u251C\u2500\u2500 about
    \u2502     \u2502     \u2514\u2500\u2500 index<span class="token punctuation">.</span>md
    \u2502     \u251C\u2500\u2500 mine
    \u2502     \u2502     \u2514\u2500\u2500 index<span class="token punctuation">.</span>md
    \u2502     \u2514\u2500\u2500 index<span class="token punctuation">.</span>md
    \u2514\u2500\u2500 <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre></div><p>\u521A\u5F00\u59CB\u7684\u76EE\u5F55\u7ED3\u6784\u5C31\u662F\u8FD9\u6837\u5B50\u7684\u3002</p><ul><li>config.js -- \u91CC\u9762\u5BFC\u51FA\u4E00\u4E2A JS \u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u5BFC\u822A\u680F\uFF0C\u4FA7\u8FB9\u680F\u7B49\u975E\u5E38\u91CD\u8981\u7684\u914D\u7F6E\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FD9\u4E2A\u5C31\u662F\u5165\u53E3\u6587\u4EF6\u4E86\u3002</li><li><a href="http://index.md" target="_blank" rel="noopener noreferrer">index.md</a> -- \u4E5F\u5C31\u662F\u4E00\u5F00\u59CB\u8FDB\u53BB\u770B\u5230\u7684\u9875\u9762</li></ul><div class="language-js"><pre><code><span class="token comment">// \u6BD4\u8F83\u56FA\u5B9A\u7684\u5199\u6CD5\uFF0C\u6211\u4EEC\u4FEE\u6539\u4E00\u4E9B\u914D\u7F6E\u5C31\u597D\u4E86</span>
<span class="token operator">--</span><span class="token operator">-</span>
home<span class="token operator">:</span> <span class="token boolean">true</span>
heroImage<span class="token operator">:</span> <span class="token operator">/</span>xxn<span class="token punctuation">.</span>png
heroAlt<span class="token operator">:</span> Logo image
actionText<span class="token operator">:</span> \u5FEB\u901F\u5F00\u59CB \u2192
actionLink<span class="token operator">:</span> <span class="token operator">/</span>guide<span class="token operator">/</span>git
features<span class="token operator">:</span>
  <span class="token operator">-</span> title<span class="token operator">:</span> \u{1F4A1} \u57FA\u7840\u77E5\u8BC6
    details<span class="token operator">:</span> \u5305\u542B git<span class="token operator">/</span> node<span class="token operator">/</span> typescript \u7B49\u57FA\u7840\u77E5\u8BC6
  <span class="token operator">-</span> title<span class="token operator">:</span> \u26A1\uFE0F \u5B66\u6821\u77E5\u8BC6
    details<span class="token operator">:</span> \u8BA1\u7F51<span class="token operator">/</span> \u6570\u636E\u5E93\u7B49\u7B49\u5B66\u6821\u8BFE\u7A0B\u7684\u5B66\u4E60\u6307\u5357
  <span class="token operator">-</span> title<span class="token operator">:</span> \u{1F6E0}\uFE0F \u9762\u8BD5\u6C47\u603B
    details<span class="token operator">:</span> \u590D\u4E60\u8FC7\u7A0B\u4E2D\u590D\u4E60\u7684\u4E00\u4E9B\u79EF\u7D2F
footer<span class="token operator">:</span> <span class="token constant">MIT</span> Licensed <span class="token operator">|</span> Copyright \xA9 <span class="token number">2021</span><span class="token operator">-</span>present Vben
<span class="token operator">--</span><span class="token operator">-</span>
</code></pre></div><h3 id="config-js" tabindex="-1">config.js <a class="header-anchor" href="#config-js" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u5BFC\u51FA\u4E00\u4E2A JS \u5BF9\u8C61</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    base<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,24),o=[p];function r(c,l,i,d,u,k){return n(),a("div",null,o)}var h=s(t,[["render",r]]);export{g as __pageData,h as default};
