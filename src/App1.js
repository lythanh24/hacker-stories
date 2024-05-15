import * as React from 'react';

var count, setCount;

const name = "Robert Lee";

const welcome = {
  greeting: `Hey`,
  tile: `React`,
};

const initialStories = [
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
    objectID: 2
  }, {
    title: 'Cup',
    url: 'https://redux.js.org/',
    author: 'Ceramix',
    num_comments: 2,
    points: 5,
    objectID: 3
  }, {
    title: 'Cup Big',
    url: 'https://asdf.js.org/',
    author: 'Ceramix',
    num_comments: 2,
    points: 5,
    objectID: 4
  },
];

function ListOld(props) {
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

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={handleRemoveItem}>
          Dismiss
        </button>
      </span>
    </li>
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

  const handleClick = (event) => {
    setCount(count + 1);
    console.log("Button Clicked");

    for (var k in props) {
      console.log(k, props[k]);
    }

  }

  return (
    <div>
      Count: {count}
      <label htmlFor="search">Form: </label>
      <input id="search" type="text" value={props.search} onChange={props.onSearch} autoFocus />
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}

function App() {

  const [stories, setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {

    setIsLoading(true);

    getAsyncStories().then(result => {
      setStories(result.data.stories);
      setIsLoading(false);
    });
  }, []);

  const getAsyncStories = () =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ data: { stories: initialStories } }),
        2000
      )
    );

  [count, setCount] = React.useState(0);

  const useSemiPersistentState = (key, initialState) => {

    const [value, setValue] = React.useState(
      localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  function getTile(title) {
    return title;
  };

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    console.log("App ", event.target.value);
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm);
  });

  return (
    <div>
      <h1>Hello World {name}</h1>
      <h2>Count: {count}</h2>
      <h2>{welcome.greeting} {welcome.tile}</h2>
      <h2>{getTile("Mr.")} {welcome.tile}</h2>
      <hr />

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}

      <SearchForm search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveStory} />

      <hr />

    </div>
  );
}
export default App;