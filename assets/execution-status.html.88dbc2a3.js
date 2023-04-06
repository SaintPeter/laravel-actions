import{_ as n,z as s,A as a,a6 as e}from"./framework.4103f851.js";const t={},p=e(`<h1 id="execution-status" tabindex="-1"><a class="header-anchor" href="#execution-status" aria-hidden="true">#</a> Execution Status</h1><p>You can also override the <code>success</code> and <code>failed</code> methods, which are called on success or failure processing.</p><h2 id="if-success" tabindex="-1"><a class="header-anchor" href="#if-success" aria-hidden="true">#</a> If Success</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DragonCode<span class="token punctuation">\\</span>LaravelActions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facade<span class="token punctuation">\\</span>Log</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">extends</span> <span class="token class-name">Action</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token comment">//</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token comment">//</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token class-name static-context">Log</span><span class="token operator">::</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">failed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token class-name static-context">Log</span><span class="token operator">::</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;failed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Call the <code>php artisan actions</code> command.</p><p>The log file will contain two <code>success</code> entries.</p><h2 id="if-failed" tabindex="-1"><a class="header-anchor" href="#if-failed" aria-hidden="true">#</a> If Failed</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DragonCode<span class="token punctuation">\\</span>LaravelActions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Exeption</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facade<span class="token punctuation">\\</span>Log</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">Action</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exeption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exeption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token class-name static-context">Log</span><span class="token operator">::</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">failed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
       <span class="token class-name static-context">Log</span><span class="token operator">::</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;failed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Call the <code>php artisan actions</code> command.</p><p>The log file will contain two <code>failed</code> entries.</p>`,10),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","execution-status.html.vue"]]);export{d as default};
