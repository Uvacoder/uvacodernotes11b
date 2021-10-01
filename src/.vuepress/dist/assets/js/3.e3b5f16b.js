(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(e,t,a){e.exports=a.p+"assets/img/image-20210930171436019.61962353.png"},351:function(e,t,a){e.exports=a.p+"assets/img/how urls work.64834917.png"},352:function(e,t,a){e.exports=a.p+"assets/img/image-20210930170949060.8b3f6a68.png"},353:function(e,t,a){e.exports=a.p+"assets/img/image-20210930171036603.89bc5f8e.png"},393:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"backend-basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-basics"}},[e._v("#")]),e._v(" Backend-Basics")]),e._v(" "),s("h2",{attrs:{id:"urls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urls"}},[e._v("#")]),e._v(" URLs")]),e._v(" "),s("p",[e._v("allways have a port! If you dont' enter a port, the browser uses a default port!")]),e._v(" "),s("p",[e._v("80 - http")]),e._v(" "),s("p",[e._v("443 - https")]),e._v(" "),s("p",[e._v("3000 - ok for developement")]),e._v(" "),s("h5",{attrs:{id:"parts-of-a-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parts-of-a-url"}},[e._v("#")]),e._v(" Parts of a URL:")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("URL(UniformResourceLocator)")]),e._v(" or URI (UniformResourceIdentifier) is the web address that a client uses to request a document (or JSON data in the case of REST APIs).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(350),alt:"image-20210930171436019"}})]),e._v(" "),s("img",{staticStyle:{zoom:"40%"},attrs:{src:a(351),alt:"how urls work"}}),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"localhost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localhost"}},[e._v("#")]),e._v(" localhost")]),e._v(" "),s("p",[s("code",[e._v("127.0.0.1")]),e._v(" oder "),s("code",[e._v("localhost")]),e._v(" -> the computer itself !!")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" Headers")]),e._v(" "),s("p",[e._v("https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"the-http-protocol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-http-protocol"}},[e._v("#")]),e._v(" The HTTP Protocol")]),e._v(" "),s("h3",{attrs:{id:"request-and-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-and-response"}},[e._v("#")]),e._v(" Request and Response")]),e._v(" "),s("p",[e._v("If a client application wants to get data from a RESTful web service, it sends an HTTP request. The server then sends the data via an HTTP response.")]),e._v(" "),s("p",[e._v("The same happens if the client wants to send data to the server. The data is stored in the body of the request. The server then sends a response to acknowledge whether or not the storing of the data was successful.")]),e._v(" "),s("p",[e._v("In the HTTP protocol, request and response are standardized. It is defined how many text fields exist, in which sequence, and how much text is allowed in that field.")]),e._v(" "),s("h3",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),s("p",[e._v("Under the hood, HTTP uses only text. In the message body, there can be binary data as well, for example if an image file is requested. The header, however, only contains text.")]),e._v(" "),s("p",[e._v("The request head looks something like this:")]),e._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(352),alt:"image-20210930170949060"}}),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET / HTTP/1.1\nHost: www.spiegel.de\nConnection: keep-alive\nPurpose: prefetch\nUpgrade-Insecure-Requests: 1\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML...\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/\nAccept-Encoding: gzip, deflate\nAccept-Language: de\nCookie: __gads=ID=b983721bda83d7ae:T=1487252257:S=ALNI_MYlth5Tx71QzpXnN3I0AoPWAu4Uog;...\n")])])]),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:a(353),alt:"image-20210930171036603"}}),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('HTTP/1.1 200 OK\nDate: Thu, 25 Oct 2018 08:54:53 GMT\nCache-Control: no-transform\nExpires: Thu, 25 Oct 2018 08:55:38 GMT\nX-SP-TE: 5001893\nX-Robots-Tag: index, follow, noarchive, noodp\nContent-Type: text/html;charset=UTF-8\nContent-Encoding: gzip\nX-SP-AP: 5001887\nVary: Accept-Encoding, isssl\nAge: 17\nX-SP-PR: 5001887\nAccept-Ranges: bytes\nContent-Length: 68939\nConnection: keep-alive\n\n<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"\n"http://www.w3.org/TR/html4/loose.dtd"><html lang="de">\n<head>\n<title>SPIEGEL ONLINE - Aktuelle Nachrichten</title>\n<meta http-equiv="X-UA-Compatible“ content="IE=edge“ />\n...\n')])])]),s("p",[e._v("In this example, the body contains HTML, because a website was requested here. For REST APIs, the body would contain data in JSON format instead.")])])}),[],!1,null,null,null);t.default=n.exports}}]);