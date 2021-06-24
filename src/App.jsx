import React from 'react';
import './App.css';
/*import Accordion from './components/Accordion';*/
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const optionArray = [
  {
    label: 'The color Red',
    value: 'red',
  },
  { label: 'The color Yellow', value: 'yellow' },
  {
    label: 'the color Blue',
    value: 'blue',
  },
];

const App = () => {
  return (
    <div className="App">
      {/*<Accordion items={items} />*/}
      {/*<Search />*/}
      <Dropdown options={optionArray} />
    </div>
  );
};

export default App;
