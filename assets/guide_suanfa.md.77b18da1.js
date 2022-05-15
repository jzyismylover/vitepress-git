import{_ as n,c as a,o as s,a as t}from"./app.e909b42f.js";const g='{"title":"\u7B97\u6CD5\u5237\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u968F\u60F3\u5F55","slug":"\u4EE3\u7801\u968F\u60F3\u5F55"},{"level":2,"title":"labulaong","slug":"labulaong"},{"level":2,"title":"\u5434\u5E08\u5144\u5B66\u7B97\u6CD5","slug":"\u5434\u5E08\u5144\u5B66\u7B97\u6CD5"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"guide/suanfa.md","lastUpdated":1650631083917}',e={},p=t(`<h1 id="\u7B97\u6CD5\u5237\u9898" tabindex="-1">\u7B97\u6CD5\u5237\u9898 <a class="header-anchor" href="#\u7B97\u6CD5\u5237\u9898" aria-hidden="true">#</a></h1><p><a href="https://www.programmercarl.com/" target="_blank" rel="noopener noreferrer">\u4EE3\u7801\u968F\u60F3\u5F55</a><br><a href="https://blog.algomooc.com/" target="_blank" rel="noopener noreferrer">\u5434\u5E08\u5144\u5B66\u7B97\u6CD5</a><br><a href="https://labuladong.gitee.io/algo/1/" target="_blank" rel="noopener noreferrer">labuladong</a></p><h2 id="\u4EE3\u7801\u968F\u60F3\u5F55" tabindex="-1">\u4EE3\u7801\u968F\u60F3\u5F55 <a class="header-anchor" href="#\u4EE3\u7801\u968F\u60F3\u5F55" aria-hidden="true">#</a></h2><blockquote><p>\u8FD9\u4E09\u4E2A\u7F51\u7AD9\u6211\u5728\u590D\u4E60\u7684\u8FC7\u7A0B\u4E2D\u90FD\u6709\u6D89\u730E\u8FC7\uFF0C\u603B\u7684\u6765\u8BF4\uFF0C\u6211\u89C9\u5F97\u4ED6\u4EEC\u4E4B\u95F4\u7684\u5176\u5B9E\u662F\u6709\u5C42\u6B21\u5173\u7CFB\u7684\u3002\u4EE3\u7801\u968F\u60F3\u5F55\u91CC\u9762\u5206\u4E86\u5F88\u591A\u4E13\u9898\uFF0C\u4ECE\u5B57\u7B26\u4E32 -&gt; \u6570\u7EC4 -&gt; .....\uFF0C\u96BE\u5EA6\u4E5F\u662F\u6162\u6162\u5730\u5F80\u540E\u8D70\u7684\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u603B\u7684\u6765\u8BF4\u5BF9\u4E8E\u521A\u5F00\u59CB\u5237\u7B97\u6CD5\u8FD8\u5728\u4E0D\u592A\u719F\u6089\u7684\u8FC7\u7A0B\u63A8\u8350\u5148\u6309\u7167\u8FD9\u91CC\u9762\u7684\u76EE\u5F55\u5148\u53BB\u719F\u6089\u4E00\u904D\uFF0C\u56E0\u4E3A\u5B83\u91CC\u9762\u7684\u9898\u4E0D\u4F1A\u8BF4\u7279\u522B\u96BE\uFF0C\u57FA\u672C\u4E0A\u90FD\u662F\u7B80\u5355+\u4E2D\u7B49\u9898\uFF0C\u5BF9\u4E8E\u6211\u4EEC\u601D\u7EF4\u7684\u63D0\u9AD8\u8FD8\u662F\u975E\u5E38\u6709\u5E2E\u52A9\u7684\u3002</p></blockquote><p>\u5728\u5237\u7684\u65F6\u5019\u5E0C\u671B\u4F60\u80FD\u591A\u591A\u601D\u8003\u4E00\u4E9B\uFF0C\u505A\u5B8C\u591A\u95EE\u81EA\u5DF1\u4E00\u4E9B\u95EE\u9898\uFF0C\u5F00\u59CB\u7684\u65F6\u5019\u867D\u7136\u8BF4\u4E0D\u9700\u8981\u592A\u62D3\u5C55\u5730\u53BB\u5B66\u4EC0\u4E48\u9AD8\u6DF1\u7684\u89E3\u6CD5\uFF0C\u4F46\u662F\u53EF\u4EE5\u5C1D\u8BD5\u4E0B\u53BB\u66F4\u6362\u4E0B\u9898\u610F\u770B\u4E0B\u81EA\u5DF1\u6709\u6CA1\u6709\u529E\u6CD5\u89E3\u51B3\u3002</p><div class="language-js"><pre><code><span class="token comment">/* \u7ED9\u5B9A\u4E00\u4E2A n \u4E2A\u5143\u7D20\u6709\u5E8F\u7684\uFF08\u5347\u5E8F\uFF09\u6574\u578B\u6570\u7EC4 nums \u548C\u4E00\u4E2A\u76EE\u6807\u503C target \uFF0C
\u5199\u4E00\u4E2A\u51FD\u6570\u641C\u7D22 nums \u4E2D\u7684 target\uFF0C\u5982\u679C\u76EE\u6807\u503C\u5B58\u5728\u8FD4\u56DE\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE -1\u3002*/</span>

<span class="token keyword">var</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// ??? \u4F1A\u4E0D\u4F1A\u6EA2\u51FA</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> mid
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// \u5411\u53F3\u67E5\u627E</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u5411\u5DE6\u67E5\u627E</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5C31\u50CF\u4E0A\u9762\u8FD9\u9053\u9898\u76EE\u4E00\u6837\uFF0C\u9898\u76EE\u8981\u6C42\u6211\u4EEC\u627E nums \u4E2D\u662F\u5426\u5B58\u5728\u7B49\u4E8E target \u7684\u5143\u7D20\u8FD4\u56DE\u4E0B\u6807\uFF0C\u90A3\u6211\u4EEC\u53EF\u4EE5\u62D3\u5C55\u4E00\u4E0B\u53BB\u627E <code>\u5927\u4E8E</code> target \u7684\u6700\u5C0F\u5143\u7D20\u4E0B\u6807\u6216\u8005 <code>\u5C0F\u4E8E</code>target \u6700\u5C0F\u5143\u7D20\u4E0B\u6807\uFF0C\u5176\u5B9E\u672C\u8D28\u4E0A\u662F\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u8FDB\u884C\u8FB9\u754C\u6761\u4EF6\u7684\u4FEE\u6539\uFF0C\u8FD9\u6837\u5B50\u53EF\u80FD\u6700\u540E\u5B66\u4E60\u5230\u7684\u5185\u5BB9\u5C31\u4F1A\u5F88\u591A\u3002</p><h2 id="labulaong" tabindex="-1">labulaong <a class="header-anchor" href="#labulaong" aria-hidden="true">#</a></h2><p>\u76F8\u5BF9\u4E8E\u4EE3\u7801\u968F\u60F3\u5F55\u6765\u8BF4\u6709\u4E9B\u4E13\u9898\u7684\u96BE\u5EA6\u4F1A\u6BD4\u8F83\u5927\uFF0C\u56E0\u4E3A\u5B83\u4E0D\u5355\u7EAF\u662F\u5C06\u57FA\u7840\u7B97\u6CD5\u7684\u7F51\u7AD9\uFF0C\u5B83\u4E5F\u4F1A\u62D3\u5C55\u5730\u53BB\u8BB2\u4E00\u4E9B\u7B97\u6CD5\u7684\u5E94\u7528\u4EC0\u4E48\u7684\uFF0C\u4F46\u662F\u6709\u4E9B\u6A21\u5757\u5B83\u7684\u89E3\u9898\u601D\u8DEF\u771F\u7684\u5F88\u597D\uFF0C\u4E5F\u7ED9\u4E86\u4E00\u7CFB\u5217\u4EE3\u7801\u7684\u6A21\u7248\uFF0C\u4F46\u662F\u4E00\u5F00\u59CB\u53BB\u770B\u7684\u6211\u89C9\u5F97\u4E0A\u624B\u7684\u96BE\u5EA6\u4F1A\u6709\u4E00\u4E9B\u5927\u3002</p><h2 id="\u5434\u5E08\u5144\u5B66\u7B97\u6CD5" tabindex="-1">\u5434\u5E08\u5144\u5B66\u7B97\u6CD5 <a class="header-anchor" href="#\u5434\u5E08\u5144\u5B66\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u9762\u7684\u9898\u76EE\u5168\u90E8\u90FD\u662F\u5251\u6307 offer \u7CFB\u5217\u91CC\u9762\u7684\u9898\u76EE\uFF0C\u4E5F\u5C31\u662F\u4F01\u4E1A\u5E38\u51FA\u7684\u4E00\u4E9B\u7B97\u6CD5\u9898\uFF0C\u8FD9\u4E2A\u5176\u5B9E\u53EF\u4EE5\u7B49\u52302023\u5E74\u7684\u5BD2\u5047\u518D\u53BB\u5237\uFF0C\u5237\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u53BB\u67E5\u6F0F\u8865\u7F3A\u4EC0\u4E48\u7684\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p><strong><code>\u5148\u4ECE\u4EE3\u7801\u968F\u60F3\u5F55\u7684\u4E13\u9898\u5F00\u59CB\u5237\u5427\uFF01\uFF01\uFF01 </code></strong></p><p>\u603B\u7684\u6765\u8BF4\uFF0C\u867D\u7136\u7B97\u6CD5\u5BF9\u4E8E\u6211\u4EEC\u524D\u7AEF\u6765\u8BF4\u7684\u8981\u6C42\u4E0D\u7B97\u5F88\u9AD8\uFF0C\u4F46\u662F\u4E0D\u63D0\u524D\u505A\u51C6\u5907\u7684\u8BDD\u8FD8\u662F\u4F1A\u5403\u4E8F\u7684\u3002\u5728\u771F\u6B63\u7684\u7B14\u8BD5\u4E2D\u8003\u7684\u6BD4\u8F83\u591A\u7684\u662F\u6570\u7EC4\u3001\u5B57\u7B26\u3001\u6808\u4E0E\u961F\u5217\u3001\u8D2A\u5FC3\u8FD9\u4E9B\u7CFB\u5217\uFF0C\u5176\u4ED6\u4E5F\u4E0D\u662F\u8BF4\u4E0D\u8003\u4F46\u662F\u53EF\u80FD\u4F1A\u6BD4\u8F83\u5C11\u4E00\u4E9B\uFF0C\u4F46\u6709\u65F6\u95F4\u7684\u8BDD\u8FD8\u662F\u5EFA\u8BAE\u53BB\u770B\u4E00\u4E0B\u3002\u5237\u7684\u65F6\u5019\u5C31\u76F4\u63A5\u7528 <strong><code>javascript</code></strong> \u53BB\u5237\u5566\uFF0C\u56E0\u4E3A\u8FD9\u6837\u9664\u4E86\u8BF4\u5B66\u5230\u4E00\u4E9B\u7B97\u6CD5\u7684\u77E5\u8BC6\u5916\u8FD8\u53EF\u4EE5\u5E2E\u4F60\u5DE9\u56FA JS \u7684\u57FA\u7840\u77E5\u8BC6\uFF0C\u6BD4\u5982\u6570\u7EC4\u4E0A\u90FD\u6709\u54EA\u4E9B\u65B9\u6CD5\uFF0C\u6216\u8005\u5BF9\u8C61\u4E0A\u6709\u54EA\u4E9B\u65B9\u6CD5\u7B49\u7B49\u3002</p><blockquote><p>\u5B8C\u4E8B\u5F00\u5934\u96BE\uFF0C\u4E00\u5929\u4E00\u4E24\u9053\u5C31\u5DEE\u4E0D\u591A\u4E86\uFF0C\u4E00\u5E74\u4E0B\u6765\u4E5F\u6709200 300\u9053\u4E86\uFF0C\u65F6\u95F4\u5C3D\u91CF\u63A7\u5236\u57281-2\u4E2A\u5C0F\u65F6\u4EE5\u5185\uFF0C\u56E0\u4E3A\u8FC7\u957F\u7684\u65F6\u95F4\u5176\u5B9E\u4E5F\u662F\u4E0D\u5212\u7B97\u7684\uFF0C\u6BD5\u7ADF\u8FD9\u4E2A\u5176\u5B9E\u4E5F\u4E0D\u662F\u6211\u4EEC\u7684\u4E3B\u9879\uFF0C\u53EF\u4EE5\u82B1\u66F4\u591A\u7684\u65F6\u95F4\u53BB\u5B66\u4E60\u524D\u7AEF\u4E0A\u9762\u7684\u77E5\u8BC6\u3002\u575A\u6301\u575A\u6301\u575A\u6301\u5C31\u662F\u80DC\u5229\u5566\uFF01\uFF01\uFF01</p></blockquote><p><img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.B0wzy3ttnTi5QHP5iIJsKQHaHa?pid=ImgDet&amp;rs=1" alt=""></p>`,16),o=[p];function c(r,l,u,i,k,d){return s(),a("div",null,o)}var m=n(e,[["render",c]]);export{g as __pageData,m as default};