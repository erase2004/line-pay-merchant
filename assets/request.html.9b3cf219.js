import{d as n}from"./app.a5cc4239.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="request-api" tabindex="-1"><a class="header-anchor" href="#request-api" aria-hidden="true">#</a> Request API</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>An API to request payment information to LINE Pay. User can change settings such as order information or various payment methods. Once the request is successful, a transaction ID is generated and with the ID, you can complete the payment or process refund.</p><ul><li><a href="#send"><code>send</code></a></li><li><a href="#addhandler"><code>addHandler</code></a></li><li><a href="#addhandlers"><code>addHandlers</code></a></li></ul><h2 id="send" tabindex="-1"><a class="header-anchor" href="#send" aria-hidden="true">#</a> send</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">send</span><span class="token punctuation">(</span>requestRequestConfig<span class="token punctuation">)</span>
</code></pre></div><p>Returns <code>Promise&lt;ApiResponse&lt;RequestResponseBody&gt;&gt;</code></p><h3 id="request-config" tabindex="-1"><a class="header-anchor" href="#request-config" aria-hidden="true">#</a> Request Config</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Package</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * An unique ID of package list
   */</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Total amount of products per package\\
   * \`=sum(products[].quantity * products[].price)\`
   */</span>
  amount<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/**
   * User fee: Respond if a commission is found within the payment amount.
   */</span>
  userFee<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/**
   * Name of the package or name of internal shops
   */</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * products in the package
   */</span>
  products<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RedirectUrls</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * An information to prevent phishing while transferring between apps in Android.
   */</span>
  appPackageName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * A merchant URL user moves to after requesting the payment.
   */</span>
  confirmUrl<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * A navigation type of the ConfirmURL after user approves the payment request.
   */</span>
  confirmUrlType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * A URL that moves to the next when LINE Pay member cancels the payment from the payment page.
   */</span>
  cancelUrl<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Payment</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Regarding automatic payment
   * - True: Processing authorization and purchase with the Confirm API at the same time
   * - False: Authorized with the Confirm API but need to purchase with the Capture API.
   *
   * Note that this field is not available by default. Users should contact LINE Pay to activate manually.
   */</span>
  capture<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token doc-comment comment">/**
   * Payment options
   * - NORMAL
   * - PREAPPROVED
   */</span>
  payType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;NORMAL&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;PREAPPROVED&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Display</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Language codes of the payment standby screen. The default language is English (en).
   * - Supported languages: en, ja, ko, th, zh_TW, zh_CN
   */</span>
  locale<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Checking the payment browser when moving to the ConfirmURL
   * - True : Guide user to go to the LINE Pay payment request browser if payment request browser and the ConfirmURL navigation browser are different.
   * - False : Move the the ConfirmURL immediately without checking the browser
   */</span>
  checkConfirmUrlBrowser<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Shipping</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Shipping address options
   * - NO_SHIPPING
   * - FIXED_ADDRESS
   * - SHIPPING
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Shipping fee
   */</span>
  feeAmount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/**
   * A URL to check shipping method
   */</span>
  feeInquiryUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Shipping fee options
   * - CONDITION : Check the shipping method (fee) when the shipping address is changed.
   * - FIXED : If fixed, not checking the shipping address even after it is changed.
   */</span>
  feeInquiryType<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Shipping address
   */</span>
  address<span class="token operator">?</span><span class="token operator">:</span> Address
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AddFriend</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Service type of the friend add list
   * - lineAt
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * A list of ID by service
   */</span>
  idList<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FamilyService</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Service type of the family service list
   */</span>
  addFriends<span class="token operator">?</span><span class="token operator">:</span> AddFriend<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Extra</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Branch Name where the payment is requested from (Only 100 letters will be displayed if it&#39;s exceeded.)
   */</span>
  branchName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Branch Id where the payment is requested.\\
   * It can be support alphabets, numbers and special characters.
   */</span>
  branchId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Payment options
   */</span>
  payment<span class="token operator">?</span><span class="token operator">:</span> Payment
  <span class="token doc-comment comment">/**
   * Display options
   */</span>
  display<span class="token operator">?</span><span class="token operator">:</span> Display
  <span class="token doc-comment comment">/**
   * Shipping options
   */</span>
  shipping<span class="token operator">?</span><span class="token operator">:</span> Shipping
  <span class="token doc-comment comment">/**
   * Family service options
   */</span>
  familyService<span class="token operator">?</span><span class="token operator">:</span> FamilyService
  <span class="token doc-comment comment">/**
   * Extra options
   */</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> Extra
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestRequestBody</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Payment amount\\
   * \`= sum(packages[].amount) + sum(packages[].userFee) + options.shipping.feeAmount\`
   */</span>
  amount<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/**
   * Payment currency (ISO 4217)
   * - Supported currencies: USD, JPY, TWD, THB
   */</span>
  currency<span class="token operator">:</span> Currency
  <span class="token doc-comment comment">/**
   * An order ID of payment request from the merchant
   * - An unique ID managed by the merchant
   */</span>
  orderId<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Package list
   */</span>
  packages<span class="token operator">:</span> Package<span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token doc-comment comment">/**
   * Redirect URLs
   */</span>
  redirectUrls<span class="token operator">:</span> RedirectUrls
  <span class="token doc-comment comment">/**
   * options
   */</span>
  options<span class="token operator">?</span><span class="token operator">:</span> Options
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestRequestConfig</span> <span class="token operator">=</span> GeneralRequestConfig <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Request body of request API
   */</span>
  body<span class="token operator">:</span> RequestRequestBody
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br></div></div><h3 id="response-body" tabindex="-1"><a class="header-anchor" href="#response-body" aria-hidden="true">#</a> Response Body</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">PaymentUrl</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * App URL to move to the payment page
   * - Used when payment reservation is done in the app
   * - URL to move from the merchant app to the LINE Pay.
   */</span>
  app<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * 	Web URL to move to the payment page
   * - Used when payment reservation is done in the web
   * - URL to move to the LINE Pay payment standby page
   * - Move to URL that is delivered without particular parameter
   * - If opening a pop-up in the desktop, follow the size: Width: 700px, Height : 546px
   */</span>
  web<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Info</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Transaction ID
   */</span>
  transactionId<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * The code value entered when code is used instead of scanner in the LINE Pay.
   */</span>
  paymentAccessToken<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * Payment URL
   */</span>
  paymentUrl<span class="token operator">:</span> PaymentUrl
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestResponseBody</span> <span class="token operator">=</span> GeneralResponseBody <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Payment information
   */</span>
  info<span class="token operator">:</span> Info
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="return-code" tabindex="-1"><a class="header-anchor" href="#return-code" aria-hidden="true">#</a> Return Code</h3><h4 id="success" tabindex="-1"><a class="header-anchor" href="#success" aria-hidden="true">#</a> Success</h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">0000</td><td style="text-align:left;">Success</td></tr></tbody></table><h4 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> Error</h4><table><thead><tr><th style="text-align:center;">Code</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">1104</td><td style="text-align:left;">Non-existing merchant</td></tr><tr><td style="text-align:center;">1105</td><td style="text-align:left;">The merchant cannot use the LINE Pay.</td></tr><tr><td style="text-align:center;">1106</td><td style="text-align:left;">A header information error</td></tr><tr><td style="text-align:center;">1124</td><td style="text-align:left;">An amount info error</td></tr><tr><td style="text-align:center;">1145</td><td style="text-align:left;">Payment in process</td></tr><tr><td style="text-align:center;">1172</td><td style="text-align:left;">A record of transaction with the same order number already exists.</td></tr><tr><td style="text-align:center;">1178</td><td style="text-align:left;">Unsupported currency</td></tr><tr><td style="text-align:center;">1183</td><td style="text-align:left;">The payment amount must be less than 0.</td></tr><tr><td style="text-align:center;">1194</td><td style="text-align:left;">The merchant cannot use the preapproved payment.</td></tr><tr><td style="text-align:center;">2101</td><td style="text-align:left;">A parameter error</td></tr><tr><td style="text-align:center;">2102</td><td style="text-align:left;">A JSON data format error</td></tr><tr><td style="text-align:center;">9000</td><td style="text-align:left;">An internal error</td></tr></tbody></table><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><h4 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> linePayClient<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    amount<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    currency<span class="token operator">:</span> <span class="token string">&#39;TWD&#39;</span><span class="token punctuation">,</span>
    orderId<span class="token operator">:</span> <span class="token string">&#39;20211209003&#39;</span><span class="token punctuation">,</span>
    packages<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">&#39;c99abc79-3b29-4f40-8851-bc618ca57857&#39;</span><span class="token punctuation">,</span>
        amount<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        products<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Demo Product&#39;</span><span class="token punctuation">,</span>
            quantity<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            price<span class="token operator">:</span> <span class="token number">500</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    redirectUrls<span class="token operator">:</span> <span class="token punctuation">{</span>
      confirmUrl<span class="token operator">:</span> <span class="token string">&#39;https://example.com/confirmUrl&#39;</span><span class="token punctuation">,</span>
      cancelUrl<span class="token operator">:</span> <span class="token string">&#39;https://example.com/cancelUrl&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;returnCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;returnMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Success.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;paymentUrl&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;web&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sandbox-web-pay.line.me/web/payment/wait?transactionReserveId=eVBISG5rQ09QL2JBVmJsdGdGN3RiUlBLaU0vMUtKWGEvVzhZS3o5NnBvSUlqZXdLdXk3Wlh0RXY2a0o3ZHp6Yw&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;app&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line://pay/payment/eVBISG5rQ09QL2JBVmJsdGdGN3RiUlBLaU0vMUtKWGEvVzhZS3o5NnBvSUlqZXdLdXk3Wlh0RXY2a0o3ZHp6Yw&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;transactionId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021121600698709710&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;paymentAccessToken&quot;</span><span class="token operator">:</span> <span class="token string">&quot;656097936065&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="addhandler" tabindex="-1"><a class="header-anchor" href="#addhandler" aria-hidden="true">#</a> addHandler</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">addHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span>
</code></pre></div><p>Returns <code>RequestClient</code></p><p>Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> type<span class="token punctuation">,</span> req<span class="token punctuation">,</span> next<span class="token punctuation">,</span> httpClient <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token comment">// request</span>
  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="addhandlers" tabindex="-1"><a class="header-anchor" href="#addhandlers" aria-hidden="true">#</a> addHandlers</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">addHandlers</span><span class="token punctuation">(</span><span class="token operator">...</span>handlers<span class="token punctuation">)</span>
</code></pre></div><p>Returns <code>RequestClient</code></p><p>Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">addHandlers</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> next <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,31);function p(t,r){return e}var c=s(a,[["render",p]]);export{c as default};
