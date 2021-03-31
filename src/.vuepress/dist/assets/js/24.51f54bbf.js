(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{383:function(e,t,s){"use strict";s.r(t);var r=s(45),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[e._v("#")]),e._v(" Grid")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://css-tricks.com/things-ive-learned-css-grid-layout/",target:"_blank",rel:"noopener noreferrer"}},[e._v("css-tricks.com - Things I’ve Learned About CSS Grid Layout"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"noopener noreferrer"}},[e._v("css-tricks.com - A complete guide to CSS Grid"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://scrimba.com/learn/R8PTE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn CSS Grid - scrimba"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why CSS Grid is better than Bootstrap"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://m.youtube.com/watch?v=paMmgo4MhQ8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moving From CSS Frameworks To CSS Grid"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://gridbyexample.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gridbyexample"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://labs.jensimmons.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jensimmons"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://rachelandrew.co.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rachel Andrews"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grid - MDN"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.w3.org/TR/css-grid-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Specification w3.org"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://codepip.com/games/grid-garden/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Game: Grid Garden"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://cssgrid.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cssgrid.io"),s("OutboundLink")],1)])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"creating-a-grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-grid"}},[e._v("#")]),e._v(" Creating a Grid")]),e._v(" "),s("p",[e._v("=> defining the Parent/Container")]),e._v(" "),s("p",[e._v("To set up a grid, you need to have both a "),s("strong",[e._v("grid container")]),e._v(" (parent) and "),s("strong",[e._v("grid items")]),e._v(" (children).")]),e._v(" "),s("p",[e._v("To turn an HTML element into a grid container:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("display: grid;")]),e._v(" or")]),e._v(" "),s("li",[s("code",[e._v("display: inline-grid;")])])]),e._v(" "),s("p",[e._v("Direct child element(s) of the grid container automatically become grid items.")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"creating-columns-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-columns-rows"}},[e._v("#")]),e._v(" Creating Columns & Rows")]),e._v(" "),s("p",[e._v("Define the Columns & Rows (Number & Size): "),s("code",[e._v("**grid-template: rows / columns;**")])]),e._v(" "),s("p",[e._v("Or : "),s("code",[e._v("**grid-template-columns**")]),e._v(" or "),s("code",[e._v("**grid-template-rows**")]),e._v(" (By default, the rows are sized to fit evenly inside the grid.)")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 200px 300px / 20% 10% 70%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"fraction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fraction"}},[e._v("#")]),e._v(" Fraction")]),e._v(" "),s("p",[e._v("By using the "),s("strong",[e._v("fr")]),e._v(" unit, we can define the size of columns and rows as a fraction of the grid’s length and width.")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2fr 1fr 1fr / 1fr 3fr 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("It is possible to use fr with other units as well. Each fr represents a fraction of the "),s("strong",[e._v("available")]),e._v(" space.")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1fr 60px 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"repeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repeat"}},[e._v("#")]),e._v(" Repeat")]),e._v(" "),s("p",[e._v("The repeat function will duplicate the specifications for rows or columns a given number of times.")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 20px 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"minmax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minmax"}},[e._v("#")]),e._v(" minmax")]),e._v(" "),s("p",[e._v("to prevent a row or column from getting too big or too small")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 100px "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("minmax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 500px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("In this example, the first and third columns will always be 100 pixels wide, no matter the size of the grid. The second column, will vary in size (between 100 and 500 pixels) as the overall grid resizes.")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"grid-gap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-gap"}},[e._v("#")]),e._v(" Grid Gap")]),e._v(" "),s("p",[e._v("will put blank space between every row and column in the grid")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 20px 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("will set the distance between rows to 20 pixels and the distance between columns to 10 pixels. Unlike other CSS grid properties, this shorthand does not take a / between values!")]),e._v(" "),s("p",[e._v("Also: "),s("code",[e._v("grid-row-gap")]),e._v(" and "),s("code",[e._v("grid-column-gap")])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"defining-the-grid-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-the-grid-items"}},[e._v("#")]),e._v(" Defining the Grid Items")]),e._v(" "),s("p",[e._v("we can make grid items take up more than one row and one column. In the diagram: Items A, B, C, and E span more than one row")]),e._v(" "),s("p",[e._v("![css gridarea.png](/Users/sh/Dropbox/SH @Coding/_MD CODEPEDIA/assets/CSS Codepedia/css gridarea.png)")]),e._v(" "),s("h2",{attrs:{id:"grid-area"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-area"}},[e._v("#")]),e._v(" Grid Area")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-area "),s("OutboundLink")],1),e._v(" is a shorthand for "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-row-start"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-column-start"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-row-end"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-column-end"),s("OutboundLink")],1),e._v(", all in one line:")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2 / 3 / 4 / span 5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("grid-area takes four values separated by slashes:")]),e._v(" "),s("ol",[s("li",[e._v("grid-row-start")]),e._v(" "),s("li",[e._v("grid-column-start")]),e._v(" "),s("li",[e._v("grid-row-end")]),e._v(" "),s("li",[e._v("grid-column-end")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("grid lines start at 1 and end at a value that is 1 greater than the number of rows or columns the grid has")])]),e._v(" "),s("li",[s("p",[e._v("The value for start should be the row/column at which you want the grid item to begin. The value for end should be one greater than the row/column at which you want the grid item to end")])]),e._v(" "),s("li",[s("p",[e._v("It is possible for the start-value to be greater than that end-value. Both properties can also each have negative values")])]),e._v(" "),s("li",[s("p",[e._v("use the keyword "),s("code",[e._v("span")]),e._v(" to start or end a column or row relative to its other end")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 4 / span 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("it will also include the grid-gap if any exists.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("grid-row")]),e._v(" and "),s("code",[e._v("column-row")]),e._v(" are also available.the starting row goes before the “/“ and the ending row goes after it.")])])]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"grid-template-areas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-template-areas"}},[e._v("#")]),e._v(" Grid Template Areas")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("grid-area")]),e._v(" can also be used to assign names to grid items.")]),e._v(" "),s("li",[e._v("Named grid items can be referred to by the "),s("code",[e._v("grid-template-areas")]),e._v(" property of the grid container.")]),e._v(" "),s("li",[e._v("To name sections of your web page.")]),e._v(" "),s("li",[e._v("-> gibt namen für die linien zwischen den columns")]),e._v(" "),s("li",[e._v("specifies grid named grid areas")]),e._v(" "),s("li",[e._v("Use as values in the grid-row-start, grid-row-end, grid-col-start,grid-col-end, and grid-area properties")])]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item2")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" menu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item3")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item4")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item5")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".grid-container")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-areas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'header header header header header header'")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'menu main main main right right'")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'menu footer footer footer footer footer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n  [full-start] 1fr\n  [content-start] 30em\n  [content-end] 1fr \n  [full-end]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("hr"),e._v(" "),s("h3",{attrs:{id:"overlapping-elements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overlapping-elements"}},[e._v("#")]),e._v(" Overlapping Elements")]),e._v(" "),s("p",[e._v("When overlapping elements, it is generally easiest to use grid line names and the grid-area property.")]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"justify-and-align-items-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify-and-align-items-content"}},[e._v("#")]),e._v(" Justify and Align Items/Content")]),e._v(" "),s("ul",[s("li",[e._v("The "),s("strong",[e._v("column/block")]),e._v(" axis stretches from "),s("strong",[e._v("top to bottom")]),e._v(" across the web page.")]),e._v(" "),s("li",[e._v("The "),s("strong",[e._v("row/inline")]),e._v(" axis stretches from "),s("strong",[e._v("left to right")]),e._v(" across the web page")])]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"justify-items-align-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify-items-align-items"}},[e._v("#")]),e._v(" Justify Items - Align Items")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("justify-items")])]),e._v(" positions grid items along the inline (row) axis -> from left to right")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("align-items")])]),e._v(" positions grid items along the block, or column axis -> from top to bottom.")]),e._v(" "),s("p",[e._v("This property is declared on grid containers.")]),e._v(" "),s("p",[e._v("(??? If we specify a height for the .card elements, they will not stretch the height of their row even if align-items: stretch; is set)")]),e._v(" "),s("p",[e._v("align-items specifies how individual elements should spread across the column axis")]),e._v(" "),s("p",[e._v("justify-items specifies how individual elements should spread across the row axis")]),e._v(" "),s("p",[e._v("Values:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("start — aligns grid items to the left/top side of the grid area")])]),e._v(" "),s("li",[s("p",[e._v("end — aligns grid items to the right/bottom side of the grid area")])]),e._v(" "),s("li",[s("p",[e._v("center — aligns grid items to the center of the grid area")])]),e._v(" "),s("li",[s("p",[e._v("stretch — stretches all items to fill the grid area")])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Justifying_Items_on_the_Inline_or_Row_Axis",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Justify Items"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Align Items"),s("OutboundLink")],1)])])]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"justify-content-align-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify-content-align-content"}},[e._v("#")]),e._v(" Justify Content - Align Content")]),e._v(" "),s("p",[e._v("position the entire grid")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("justify-content")])]),e._v(" position the entire grid along the row axis -> from left to right")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("align-content")])]),e._v(" positions the rows along the column axis -> from top to bottom")]),e._v(" "),s("p",[e._v("align-content specifies how groups of elements should spread across the column axis")]),e._v(" "),s("p",[e._v("justify-content specifies how groups of elements should spread across the row axis")]),e._v(" "),s("p",[e._v("Values:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("start — aligns the grid to the left side/top of the grid container")])]),e._v(" "),s("li",[s("p",[e._v("end — aligns the grid to the right side/bottom of the grid container")])]),e._v(" "),s("li",[s("p",[e._v("center — centers the grid horizontally in the grid container")])]),e._v(" "),s("li",[s("p",[e._v("stretch — stretches the grid items to increase the size of the grid to expand across the container")])]),e._v(" "),s("li",[s("p",[e._v("space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element")])]),e._v(" "),s("li",[s("p",[e._v("space-between — includes an equal amount of space between grid items and no space at either end")])]),e._v(" "),s("li",[s("p",[e._v("space-evenly — places an even amount of space between grid items and at either end")])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Values",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Justify Content"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content#Values",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Align Content"),s("OutboundLink")],1)])])]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"justify-self-align-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify-self-align-self"}},[e._v("#")]),e._v(" Justify Self - Align Self")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("justify-self")])]),e._v(" specifies how an individual element should position itself with respect to the row axis. This property will override justify-items for any item on which it is declared.")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("align-self")])]),e._v(" specifies how an individual element should position itself with respect to the column axis. This property will override align-items for any item on which it is declared.")]),e._v(" "),s("p",[e._v("* align-self specifies how a single element should position itself with respect to the column axis")]),e._v(" "),s("p",[e._v("justify-self specifies how a single element should position itself with respect to the row axis")]),e._v(" "),s("p",[e._v("Values:")]),e._v(" "),s("ul",[s("li",[e._v("start — positions grid items on the left side/top of the grid area")]),e._v(" "),s("li",[e._v("end — positions grid items on the right side/bottom of the grid area")]),e._v(" "),s("li",[e._v("center — positions grid items on the center of the grid area")]),e._v(" "),s("li",[e._v("stretch — positions grid items to fill the grid area (default)")])]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"implicit-vs-explicit-grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implicit-vs-explicit-grid"}},[e._v("#")]),e._v(" Implicit vs. Explicit Grid")]),e._v(" "),s("p",[e._v("The implicit grid is an algorithm that determines default behavior for the placement of elements when there are more than fit into the grid specified by the CSS.\n* grid-auto-rows specifies the height of rows added implicitly to the grid\n* grid-auto-columns specifies the width of columns added implicitly to the grid\nDefault behavior of the implicit grid is:")]),e._v(" "),s("ul",[s("li",[e._v("items fill up rows first, adding new rows as necessary.")]),e._v(" "),s("li",[e._v("New grid rows will only be tall enough to contain the content within them.")])]),e._v(" "),s("p",[s("code",[e._v("grid-auto-rows")]),e._v(" and "),s("code",[e._v("grid-auto-columns")]),e._v(". specify the size of grid tracks added implicitly. These properties are declared on grid containers.")]),e._v(" "),s("p",[e._v("They accept the same values as their explicit counterparts, grid-template-rows and grid-template-columns")]),e._v(" "),s("ul",[s("li",[e._v("pixels (px)")]),e._v(" "),s("li",[e._v("percentages (%)")]),e._v(" "),s("li",[e._v("fractions (fr)")]),e._v(" "),s("li",[e._v("the repeat() function")])]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"grid-auto-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-auto-flow"}},[e._v("#")]),e._v(" Grid Auto Flow")]),e._v(" "),s("p",[e._v("* grid-auto-flow specifies in which direction implicit elements should be created")]),e._v(" "),s("p",[e._v("In addition to setting the dimensions of implicitly-added rows and columns, we can specify the order in which they are rendered. grid-auto-flow specifies whether new elements should be added to rows or columns Values.")]),e._v(" "),s("ul",[s("li",[e._v("row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)")]),e._v(" "),s("li",[e._v("column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements")]),e._v(" "),s("li",[e._v("dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added")])]),e._v(" "),s("p",[e._v("You can pair row and column with dense, like this:")]),e._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-auto-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" row dense"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("This property is declared on grid containers.")]),e._v(" "),s("hr")])}),[],!1,null,null,null);t.default=a.exports}}]);