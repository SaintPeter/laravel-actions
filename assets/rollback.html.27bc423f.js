import{_ as e,z as a,A as n,a6 as s}from"./framework.4103f851.js";const i={},l=s(`<h1 id="rolling-back-actions" tabindex="-1"><a class="header-anchor" href="#rolling-back-actions" aria-hidden="true">#</a> Rolling Back Actions</h1><p>To roll back the latest action operation, you may use the <code>rollback</code> command. This command rolls back the last &quot;batch&quot; of actions, which may include multiple action files:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan actions:rollback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may roll back a limited number of actions by providing the <code>step</code> option to the rollback command. For example, the following command will roll back the last five actions:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan actions:rollback --step=5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>actions:reset</code> command will roll back all of your application&#39;s actions:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan actions:reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan actions:rollback
<span class="token comment"># action                    batch</span>
<span class="token comment"># 2022_10_12_021837_some    1</span>
<span class="token comment"># 2022_10_12_021838_some    2</span>
<span class="token comment"># 2022_10_12_021839_some    2</span>
<span class="token comment"># 2022_10_12_021840_some    3  // will be canceled</span>
<span class="token comment"># 2022_10_12_021841_some    3  // will be canceled</span>

php artisan actions:rollback <span class="token parameter variable">--step</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># action                    batch</span>
<span class="token comment"># 2022_10_12_021837_some    1</span>
<span class="token comment"># 2022_10_12_021838_some    2</span>
<span class="token comment"># 2022_10_12_021839_some    2</span>
<span class="token comment"># 2022_10_12_021840_some    3  // will be canceled</span>
<span class="token comment"># 2022_10_12_021841_some    3  // will be canceled</span>

php artisan actions:rollback <span class="token parameter variable">--step</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment"># action                    batch</span>
<span class="token comment"># 2022_10_12_021837_some    1</span>
<span class="token comment"># 2022_10_12_021838_some    2  // will be canceled</span>
<span class="token comment"># 2022_10_12_021839_some    2  // will be canceled</span>
<span class="token comment"># 2022_10_12_021840_some    3  // will be canceled</span>
<span class="token comment"># 2022_10_12_021841_some    3  // will be canceled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="roll-back-action-using-a-single-command" tabindex="-1"><a class="header-anchor" href="#roll-back-action-using-a-single-command" aria-hidden="true">#</a> Roll Back &amp; Action Using A Single Command</h2><p>The <code>actions:refresh</code> command will roll back all of your actions and then execute the <code>actions</code> command. This command effectively re-creates your entire database:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan actions:refresh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may roll back &amp; re-run a limited number of actions by providing the <code>step</code> option to the <code>refresh</code> command. For example, the following command will roll back &amp; re-run the last five actions:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan actions:refresh --step=5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="drop-all-actions-rerun-actions" tabindex="-1"><a class="header-anchor" href="#drop-all-actions-rerun-actions" aria-hidden="true">#</a> Drop All Actions &amp; Rerun Actions</h2><p>The <code>actions:fresh</code> command will drop all actions records from the actions table and then execute the actions command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan actions:fresh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),c=[l];function o(t,d){return a(),n("div",null,c)}const m=e(i,[["render",o],["__file","rollback.html.vue"]]);export{m as default};
