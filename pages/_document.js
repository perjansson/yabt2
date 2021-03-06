import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { hydrate, injectGlobal } from 'react-emotion'

export default class YabtDocument extends Document {
    static getInitialProps({ renderPage }) {
        const page = renderPage()
        const styles = extractCritical(page.html)
        return { ...page, ...styles }
    }

    constructor(props) {
        super(props)
        const { __NEXT_DATA__, ids } = props
        if (ids) {
            __NEXT_DATA__.ids = ids
        }
        if (typeof window !== 'undefined') {
            hydrate(window.__NEXT_DATA__.ids)
        }
    }

    render() {
        /* eslint no-unused-expressions: 0 */
        injectGlobal`
            * {
                font-family: 'Space Mono', monospace;
             }
            body {
                margin: 0;
                padding: 0;
                background: #fff;
            }
            h1 {
                margin-bottom: 0;
            }
            a {
                text-decoration: none;
                color: #fff;
                text-shadow: 3px 3px 6px #000;
            }
        `

        return (
            <html lang="sv">
                <Head>
                    <title>Yet Another Burger Tested</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, viewport-fit=cover"
                    />
                    <meta
                        name="description"
                        content="A Burger Test Progressive Web App built using Next.js"
                    />
                    <meta name="theme-color" content="#f4b342" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="dns-prefetch" href="//yetanotherburgertested.herokuapp.com" />

                    <style dangerouslySetInnerHTML={{ __html: this.props.css }} />

                    <link
                        href="https://fonts.googleapis.com/css?family=Space+Mono"
                        rel="stylesheet"
                    />

                    {/* Modernizer script to test for webp support */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html:
                                '!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);'
                        }}
                    />

                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="57x57"
                        href="/static/favicon/apple-touch-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="114x114"
                        href="/static/favicon/apple-touch-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="72x72"
                        href="/static/favicon/apple-touch-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="144x144"
                        href="/static/favicon/apple-touch-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="60x60"
                        href="/static/favicon/apple-touch-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="120x120"
                        href="/static/favicon/apple-touch-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="76x76"
                        href="/static/favicon/apple-touch-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon-precomposed"
                        sizes="152x152"
                        href="/static/favicon/apple-touch-icon-152x152.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/static/favicon/favicon-196x196.png"
                        sizes="196x196"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/static/favicon/favicon-96x96.png"
                        sizes="96x96"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/static/favicon/favicon-32x32.png"
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/static/favicon/favicon-16x16.png"
                        sizes="16x16"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/static/favicon/favicon-128.png"
                        sizes="128x128"
                    />
                    <meta name="application-name" content="&nbsp;" />
                    <meta name="msapplication-TileColor" content="#FFFFFF" />
                    <meta
                        name="msapplication-TileImage"
                        content="/static/favicon/mstile-144x144.png"
                    />
                    <meta
                        name="msapplication-square70x70logo"
                        content="/static/favicon/mstile-70x70.png"
                    />
                    <meta
                        name="msapplication-square150x150logo"
                        content="/static/favicon/mstile-150x150.png"
                    />
                    <meta
                        name="msapplication-wide310x150logo"
                        content="/static/favicon/mstile-310x150.png"
                    />
                    <meta
                        name="msapplication-square310x310logo"
                        content="/static/favicon/mstile-310x310.png"
                    />
                </Head>
                <body className="sans-serif">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
