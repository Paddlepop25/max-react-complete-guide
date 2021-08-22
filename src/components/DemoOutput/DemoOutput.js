import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DO');
  return <MyParagraph>{props.show ? 'Show me' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
// React.memo check if props changed. No change, no re-evaluate this component and its child componenet
