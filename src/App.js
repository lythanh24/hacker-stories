import * as React from 'react';
function App() {
  const name = "Robert Lee";

  const welcome ={
    greeting: `Hey`,
    tile: `React`,
  };

  function getTile(title){
    return title;
  };
  return (
    <div>
      <h1>Hello World {name}</h1>
      <h2>{welcome.greeting} {welcome.tile}</h2>
      <h2>{getTile("Mr.")} {welcome.tile}</h2>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
export default App;