import "./App.css";

function App() {
  const name = "Anon";
  const url = "https://www.youtube.com";
  const linkText = "Youtube";
  const element = (
    <p>
      {" "}
      Hello, {name}! Please check out videos at <a href={url}>{linkText}</a>
    </p>
  );
  // const element = ( <div> <h1>title</h1> <p> this paragraph {item} for {price} </p> </div> ) works for objects too objName.item/price
  return element;
}

export default App;

// const element = (
//   <div>
//     <h1>Hello World</h1>
//     <h2>Have a good day.</h2>
//   </div>
// ) *** only works with div, cant have more than 1 top level jsx element
// use (react fragment) <> </> instead of div to return multiple elements but dont need or want parent container to hold all elements
// use <hr/>, <img/> for self closing, fix one error at at time. it is more proper with react to update opening tag with forward slash at the end of the tag ** unterminated.
// common self-closing tags: <img> , <input> <link> <br> <hr> use <img />
