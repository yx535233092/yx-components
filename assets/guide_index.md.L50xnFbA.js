import{_ as a,c as n,o as i,ae as p}from"./chunks/framework.Bi3Ky_EQ.js";const k=JSON.parse('{"title":"YX Components","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),t={name:"guide/index.md"};function e(l,s,h,d,o,r){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="yx-components" tabindex="-1">YX Components <a class="header-anchor" href="#yx-components" aria-label="Permalink to &quot;YX Components&quot;">​</a></h1><p>欢迎使用 YX 组件库！这是一个基于 Vue 3 的现代化组件库，旨在提供高质量、可定制的 UI 组件，帮助开发者快速构建现代化的 Web 应用。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>🚀 基于 Vue 3 和 TypeScript 开发</li><li>📦 支持按需引入</li><li>🎨 现代化的设计风格</li><li>📖 详细的文档和示例</li><li>⚡️ 极致的开发体验</li></ul><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @yx-components/components</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createApp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Button</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@yx-components/components&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@yx-components/components/dist/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">const</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app.use(Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app.mount(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### 4.2 编写按钮组件文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 \`components/button.md\` 中添加以下内容：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`markdown</span></span>
<span class="line"><span># Button 按钮</span></span>
<span class="line"><span></span></span>
<span class="line"><span>按钮用于开始一个即时操作。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 何时使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>标记一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 代码演示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 基础用法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`vue</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;yx-button&gt;默认按钮&lt;/yx-button&gt;</span></span>
<span class="line"><span>  &lt;yx-button type=&quot;primary&quot;&gt;主要按钮&lt;/yx-button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning</td><td>default</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>large / small</td><td>—</td></tr><tr><td>loading</td><td>加载状态</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 5. 更新 \`package.json\` 文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 \`packages/docs/package.json\` 中添加以下脚本：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;dev&quot;: &quot;vitepress dev&quot;,</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;vitepress build&quot;,</span></span>
<span class="line"><span>    &quot;preview&quot;: &quot;vitepress preview&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_6-启动-vitepress-文档" tabindex="-1">6. 启动 VitePress 文档 <a class="header-anchor" href="#_6-启动-vitepress-文档" aria-label="Permalink to &quot;6. 启动 VitePress 文档&quot;">​</a></h3><p>在 <code>packages/docs</code> 目录下运行以下命令启动文档开发服务器：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h3 id="_7-访问文档" tabindex="-1">7. 访问文档 <a class="header-anchor" href="#_7-访问文档" aria-label="Permalink to &quot;7. 访问文档&quot;">​</a></h3><p>打开浏览器，访问 <code>http://localhost:3000</code>，您将看到 VitePress 生成的文档页面。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>通过以上步骤，您已经成功在项目中引入了 VitePress，并搭建了组件库的文档。您可以根据需要继续扩展文档内容，添加更多组件的文档和示例。</p>`,18)]))}const u=a(t,[["render",e]]);export{k as __pageData,u as default};
