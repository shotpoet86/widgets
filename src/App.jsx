import React from 'react';
import './App.css';
/*import Accordion from './components/Accordion';*/
import Search from './components/Search';

const items = [
  { title: 'What is react', content: 'React is a JavaScript library' },
  {
    title: 'How do we show...',
    content: 'To show content...',
  },
  {
    title: 'Why is react useful...',
    content: 'Engineers like react...',
  },
];

const App = () => {
  return (
    <div className="App">
      {/*<Accordion items={items} />*/}
      <Search />
    </div>
  );
};

export default App;
