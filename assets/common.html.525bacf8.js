import{d as n}from"./app.a5cc4239.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="common-types" tabindex="-1"><a class="header-anchor" href="#common-types" aria-hidden="true">#</a> Common Types</h1><h2 id="general-request-config" tabindex="-1"><a class="header-anchor" href="#general-request-config" aria-hidden="true">#</a> General Request Config</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">GeneralRequestConfig</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * API timeout
   */</span>
  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="general-response-body" tabindex="-1"><a class="header-anchor" href="#general-response-body" aria-hidden="true">#</a> General Response Body</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">GeneralResponseBody</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Return code
   */</span>
  returnCode<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Return message
   * Return message or reason for failure. The following are examples.
   * - Unpayable merchant
   * - Merchant authentication information error
   */</span>
  returnMessage<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="api-response" tabindex="-1"><a class="header-anchor" href="#api-response" aria-hidden="true">#</a> API Response</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ApiResponse<span class="token operator">&lt;</span>Body <span class="token keyword">extends</span> GeneralResponseBody<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Response body
   */</span>
  body<span class="token operator">:</span> Body
  <span class="token doc-comment comment">/**
   * Additional comments may be added by handlers
   */</span>
  comments<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="other-common-types" tabindex="-1"><a class="header-anchor" href="#other-common-types" aria-hidden="true">#</a> Other Common Types</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Recipient</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Recipient name
   */</span>
  firstName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Recipient last name
   */</span>
  lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Additional information of the recipient first name
   */</span>
  firstNameOptional<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Additional information of the recipient last name
   */</span>
  lastNameOptional<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Email of the recipient
   */</span>
  email<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Phone number of the recipient
   */</span>
  phoneNo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Address</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Shipping country
   */</span>
  country<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Shipping postal code
   */</span>
  postalCode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Shipping region
   */</span>
  state<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Shipping address
   */</span>
  city<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Shipping detail
   */</span>
  detail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Additional information of the shipping address
   */</span>
  optional<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Recipient of the shipping address
   */</span>
  recipient<span class="token operator">?</span><span class="token operator">:</span> Recipient
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Product</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * ID of sales products of the merchant
   */</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Name of the sales products
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Image URL of the sales products
   */</span>
  imageUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * 	Number of products
   */</span>
  quantity<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/**
   * Price of each product
   */</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/**
   * Original price of each product
   */</span>
  originalPrice<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Payment currency (ISO 4217)
 */</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Currency</span> <span class="token operator">=</span> <span class="token string">&#39;USD&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;JPY&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;TWD&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;THB&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div>`,9);function p(r,o){return e}var c=s(a,[["render",p]]);export{c as default};
