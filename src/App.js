import * as React from 'react';

var count, setCount;

const name = "Robert Lee";

const welcome = {
  greeting: `Hey`,
  tile: `React`,
};

const list = [
  {
    title: 'ReactJS',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }, {
    title: 'Redhad',
    url: 'https://redux.js.org/',
    author: 'Linux Toward',
    num_comments: 2,
    points: 5,
    objectID: 1
  }, {
    title: 'Cup',
    url: 'https://redux.js.org/',
    author: 'Ceramix',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
];

function List(props) {
  return (
    <ul>
      {props.list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

const SearchForm = (props) => {

  const [searchTerm, setSearchTerm] = React.useState(0);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // B
    props.onSearch(event);
  };
  
  const handleClick = (event) => {
    setCount(count + 1);
    console.log("Button Clicked");
  }
  
  return (
    <div>
      Count: {count}
      <label htmlFor="search">Form: </label>
      <input id="search" type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}



function App() {

  [count, setCount] = React.useState(0);

  const stories = [
    {
      title: 'ReactJS',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }, {
      title: 'Redhad',
      url: 'https://redux.js.org/',
      author: 'Linux Toward',
      num_comments: 2,
      points: 5,
      objectID: 1
    }, {
      title: 'Cup',
      url: 'https://redux.js.org/',
      author: 'Ceramix',
      num_comments: 2,
      points: 5,
      objectID: 1
    },
  ];

  function getTile(title) {
    return title;
  };

  const handleSearch = (event) => {
    console.log("App ",event.target.value);
  }

  return (
    <div>
      <h1>Hello World {name}</h1>
      <h2>Count: {count}</h2>
      <h2>{welcome.greeting} {welcome.tile}</h2>
      <h2>{getTile("Mr.")} {welcome.tile}</h2>
      <hr />
      <Search />

      <hr />

      <SearchForm onSearch={handleSearch} />

      <hr />

      <List list={stories} />

      <hr />

    </div>
  );
}
export default App;