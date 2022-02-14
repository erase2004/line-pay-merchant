import{d as n}from"./app.a5cc4239.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="handlers" tabindex="-1"><a class="header-anchor" href="#handlers" aria-hidden="true">#</a> Handlers</h1><p>Handler functions are functions that have access to the API type, the request configuration, the response body, and the next handler function in the API calling flow.</p><h2 id="custom-handler" tabindex="-1"><a class="header-anchor" href="#custom-handler" aria-hidden="true">#</a> Custom Handler</h2><p>You can build your own handlers to access the request configuration and the response body.</p><p>Add your first handler:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// create client</span>
<span class="token keyword">const</span> refundClient <span class="token operator">=</span> linePayClient<span class="token punctuation">.</span>refund

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something before sending request</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
  <span class="token comment">// do something with response body</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// add handler</span>
refundClient<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>myHandler<span class="token punctuation">)</span>

<span class="token comment">// send request</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> refundClient<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transactionId</span><span class="token operator">:</span> <span class="token string">&#39;2021120900898162210&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">refundAmount</span><span class="token operator">:</span> <span class="token number">20</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Method chaining is also supported:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myHandler1</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something before sending request</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
  <span class="token comment">// do something with response body</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myHandler2</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something before sending request</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
  <span class="token comment">// do something with response body</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// create client</span>
<span class="token keyword">const</span> refundClient <span class="token operator">=</span> <span class="token keyword">await</span> linePayClient
  <span class="token punctuation">.</span>refund
  <span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>myHandler1<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>myHandler2<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">transactionId</span><span class="token operator">:</span> <span class="token string">&#39;2021120900898162210&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">refundAmount</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>The handler added first will be executed later\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> linePayClient
  <span class="token punctuation">.</span>refund
  <span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;before inner handler&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;after inner handler&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;before outer handler&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    <span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;after outer handler&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result2
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">transactionId</span><span class="token operator">:</span> <span class="token string">&#39;2021120900898162210&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">refundAmount</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Output:</span>
<span class="token comment">// before outer handler</span>
<span class="token comment">// before inner handler</span>
<span class="token comment">// after inner handler</span>
<span class="token comment">// before inner handler</span>
<span class="token comment">// after inner handler</span>
<span class="token comment">// after outer handler</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="built-in-handler" tabindex="-1"><a class="header-anchor" href="#built-in-handler" aria-hidden="true">#</a> Built-in Handler</h2><p>In the real world, there are plenty of reasons like unstable networks, sending data with the wrong format, or an unresponsive server that can cause underlying APIs to throw errors. To make our application stable, we need to deal with errors when encountering those unexpected circumstances. This library provides some built-in handlers to help developers handle errors more easily.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  createLinePayClient<span class="token punctuation">,</span>
  createTimeoutRetryHandler<span class="token punctuation">,</span>
  createPaymentDetailsRecoveryHandler<span class="token punctuation">,</span>
  paymentDetailsToConfirm<span class="token punctuation">,</span>
  LinePayApiError<span class="token punctuation">,</span>
  HttpError<span class="token punctuation">,</span>
  TimeoutError
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;line-pay-merchant&#39;</span>

<span class="token keyword">const</span> linePayClient <span class="token operator">=</span> <span class="token function">createLinePayClient</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> linePayClient<span class="token punctuation">.</span>confirm
      <span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token function">createTimeoutRetryHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token function">createPaymentDetailsRecoveryHandler</span><span class="token punctuation">(</span>paymentDetailsToConfirm<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">transactionId</span><span class="token operator">:</span> <span class="token string">&#39;2021121300698360310&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">&#39;TWD&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">amount</span><span class="token operator">:</span> <span class="token number">1000</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res = &#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">LinePayApiError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;LinePayApiError = &#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">HttpError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;HttpError = &#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">TimeoutError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;TimeoutError = &#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,13);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
