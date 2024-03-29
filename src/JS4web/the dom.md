# The DOM 

The DOM stands for "Document Object Model" 

- tree-like structure that is a representation of the HTML document, the relationship between elements 
- contains the content and properties of the elements.
- Think of the DOM as the link between an HTML web page and scripting languages.

- https://www.w3.org/standards/techs/dom#w3c_all The full list of DOM specs
- [DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Section 8.2 Parsing HTML documents](https://www.w3.org/TR/html5/syntax.html#parsing) from the W3C's HTML Documentation
- [DOM Specification](https://www.w3.org/standards/techs/dom#w3c_all) on W3C
- [HTML Document Object Model mentioned in the ECMAScript Specification](https://www.ecma-international.org/ecma-262/#sec-global-object) - the language specification used by JavaScript

<img src="https://content.codecademy.com/courses/dom/dom_revision_2.svg" alt="dom_revision_2" style="zoom: 25%;" />

-  a **node** is the equivalent of each family member in a family tree. 
-  the top-most node is called the ***root node*,** and it represents the HTML document. 
-  A ***parent node*** is the closest connected node to another node in the direction towards the root.
-  A ***child node*** is the closest connected node to another node in the direction away from the root.

There are nine different types of node objects in the DOM tree, eg  [*Element*](https://developer.mozilla.org/en-US/docs/Web/API/Element),  [*Text*](https://developer.mozilla.org/en-US/docs/Web/API/Text), etc.



## The document keyword

- The `document` object is provided by the browser and is a representation of the HTML document. This object is *not* provided by the JavaScript language.

- The `document` keyword grants access to the root of the DOM in JavaScript


https://developer.mozilla.org/en-US/docs/Web/API/Document

------

### Nodes and NodeList

Every element in the DOM is a **node**. This is represented by a **Node** object.

- A **NodeList object** is a list or collection of nodes extracted from a document .It is an array-*like* collection of objects (but is not an array)

- has a **length** property and an **index**(0, 1, 2, 3, ...) to access each item,

- You can loop over a NodeList with either its `.forEach()` method, or a `for` loop

- You cannot use Array methods, like `map()`, `filter()`,`reduce()`,`push()`, `pop()`, or `join()`

- If you want to use an array method, transform it into an array first:

  ```js
  const divs = document.querySelectorAll('div')
  divs.forEach(div => {
  /* ... */
  }) // this works
  divs.map(div => { /* ... */ }) // throws exception (an error)
  // turn NodeList into array first:
  [...divs].map(div => { /* ... */ })
  ```



## Node Types

There are 12 node types. In practice we usually work with 4 of them:

- **document** - the whole document is formally a DOM node as well

- **element nodes** - HTML-tags, the tree building blocks

- **text nodes** - represents textual content in an element or attribute

- **comments** - won’t be shown, but JS can still read it

