import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DO');
  return <MyParagraph>{props.show ? 'Show me' : ''}</MyParagraph>;
};

export default DemoOutput;
