


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

## 6. What is Component Composition?

Component Composition is the practice of calling one component inside another component.

#### Example

```
function Header() {
  return <h1>Welcome</h1>;
}

function App() {
  return (
    <div>
      <Header />  {/* Header component called inside App */}
    </div>
  );
}
```

## 7. What is Props?

Props (short for "properties") are a mechanism used to pass data from one component to another, typically in a unidirectional (top-down) flow from parent to child.

#### Example

```
  // Parent passes props
  <Greeting name="Alice" age={25} />

  // Child receives and uses them
  function Greeting({ name, age }) {
    return <h1>Hello, {name}! You are {age} years old.</h1>;
  }
```

## 8. what is default props?

Default props in React allow you to define fallback values for a component's properties (props)

#### Example
```
function Greeting({ name = "Guest", age = 18 }) {
  return (
    <h1>Hello, {name}! You are {age} years old.</h1>
  );
}

<Greeting />
Component call Without passing props:
```


## 9. Why we use Props or characteristics of props?

##### Characteristics
- Immutable:- a child component cannot modify its own props
- Unidirectional:- data flows only from parent → child
- Any type:- strings, numbers, arrays, objects, functions, even JSX
- Destructured:- commonly destructured in the function signature for cleaner code

##### Usecase
- Pass Data:- Send data from parent component to child component
- Reusability:- Same component can be used multiple times with different data
- Dynamic Content:- Components show different content based on props received
- Avoid Repetition:- Write the component once, reuse it anywhere
- Communication:- The only way for a parent to talk to a child component

## 10. What is Children prop?
 1. children prop is a special, built-in property that allows you to pass content between the opening and closing tags of a component.
 2. Anything placed inside a component's tags is automatically passed to that component as props.children.
 3. Children can be strings, numbers, JSX elements, arrays, or even functions.

 #### Example
 ```
  function Card({ children }) {
    return <div className="card">{children}</div>;
  }

  // Now you can put ANYTHING inside Card Component
  <Card>
    <h2>Title</h2>
    <p>Description here</p>
  </Card>
 ```

## 11. What is Props Drilling?
  1. Prop Drilling is the process of passing data (props) through multiple layers of components to reach a deeply nested child that needs it, even if the intermediate components do not use that data

  ##### NOTE: To avoid props drilling we use context API, React State Management Libraries.

  #### Example
  ```
      // ✅ Data starts here in Parent
      function Parent() {
        const name = "Alice";
        const age = 25;

        return (
          <div>
            <h1>I am Parent</h1>
            <Child name={name} age={age} />  {/* passing to Child */}
          </div>
        );
      }


      // ✅ Child receives and passes down to SubChild
      function Child({ name, age }) {
        return (
          <div>
            <h2>I am Child</h2>
            <SubChild name={name} age={age} />  {/* passing to SubChild */}
          </div>
        );
      }


      // ✅ SubChild finally uses the data
      function SubChild({ name, age }) {
        return (
          <div>
            <h3>I am SubChild</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
          </div>
        );
      }
  ```


## 12. What is render prop?
 1. Render Prop is when you pass a function as a prop to a component, and that component calls the function to render something.

 #### Example
 ```
      // Component accepts a function as a prop
      function Greet({ render }) {
        return <div>{render("Alice")}</div>; // calls the function
      }

      // Passing a function as a prop
      <Greet render={(name) => <h1>Hello, {name}!</h1>} />

      // Output → Hello, Alice!
 ```