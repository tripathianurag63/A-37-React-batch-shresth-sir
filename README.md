


## 3. what is jsx? what are the rules to write jsx?
1. JSX  stands for Javascript XML
2. It is a syntax extension for js tha allows you to write HTMK-like code inside js files. it was introduced by FB for react.
3. jsx is not html, and it's not valid js by itself.it gets transpiled into regular js by tools like Babel before running in the browser.

RULES

1. return only one root element
2. all tags (including self-closing tags) must be properly closed
3. use CamelCase foro attributes (ex : onClick, onChange)
4. js expressions in {}
5. to write cmnt in jsx use {/*  */}
6. don't use if-else directly inside JSX instead use ternary or logical operator
7. use className instead of class
8. use htmlFor instead of for in label tag

## 4. what is a component in React? Types of component?
A component in React is a reusable (self-contained) piece of code that returns some piece of JSX.
1. Class Based component(CBC)
    i) A class component is a js class that extends react compo.
    ii) It has render() method to return jsx.
    iii) It was the traditional way of writing react compo before 2019.

2. Function Based Compo (FBC)
    i) A fn based compo is a simple js fn which returns some piece of jsx.
    ii) It is now the recommended and most popular way to write compo in modern React.

# 5. what is React.Fragment and Empty Fragment?
React.Fragment (<React.Fragment>): A wrapper compo that lets you group multiple elements without adding an extra DOM node to the HTML output.

Empty Fragmenr (<>...</>): A shorthand syntax for React.Fragment that does the same thing -- group multiple elements without adding an extra DOM node -- but doesn't support the key prop.

Note:- We can not write id and className attribute in both fragment.

api.github.com/users/gitid

