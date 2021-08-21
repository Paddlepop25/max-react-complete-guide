import React from 'react';

const MyParagraph = (props) => {
  console.log('MP');
  return <p>{props.children}</p>;
};

export default MyParagraph;
