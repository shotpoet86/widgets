import React from 'react';

const Accordion = ({ items }) => {
  /*helper function*/
  const onTitleClick = (index) => {
    console.log('title clicked', index);
  };
  /*renders items by mapping through items array*/
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        {/*listens for onClick and calls onTitleClick function passing each elements index from items array*/}
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
