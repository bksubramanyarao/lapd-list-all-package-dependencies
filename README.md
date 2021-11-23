# lapd
List all package dependencies/devDependencies

<h1><a id="user-content-installation" class="deep-link" href="#installation" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>
<p>Using <a href="http://npmjs.org" rel="nofollow">npm</a> (the recommended way):</p>
<div class="highlight sh"><pre class="editor editor-colors"><div class="line"><span class="source shell"><span>npm&nbsp;install&nbsp;-g&nbsp;lapd</span></span></div></pre></div>

<h1><a id="user-content-usage" class="deep-link" href="#usage" aria-hidden="true" rel="nofollow"><svg aria-hidden="true" class="deep-link-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>
<p>install as global package, go to any folder with package.json open terminal type <b>lapd</b></p>
<pre>
added options:
lapd -inline or -i
lapd -list or -l
</pre>
<pre>
---------------
dependencies
---------------
npm install --save ejs express express-fileupload express-mailer express-session express-validator mongoose passport passport-local session-file-store
---------------
devDependencies
---------------
npm install --save-dev css-loader mini-css-extract-plugin node-sass nodemon sass-loader webpack webpack-cl
</pre>
