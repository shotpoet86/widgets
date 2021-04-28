import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  /*helper function*/
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  /*renders items by mapping through items array and displays on user screen*/
  const renderedItems = items.map((item, index) => {
    /*if index is equal to activeIndex, selected index will dropDown and display, otherwise will stay closed*/
    const active = index === activeIndex ? 'active' : '';
    console.log(active + index);
    return (
      <React.Fragment key={item.title}>
        {/*listens for onClick from web api and calls onTitleClick function passing each elements index from items array*/}
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          {/*displays item title*/}
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        {/*dislpays item content*/}
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
