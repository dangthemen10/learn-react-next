import React from "react";

const ChildComponent = React.memo(({ handleClick }) => {
    console.log('ChildComponent rendering....');
    return <button onClick={handleClick}>Click me!</button>;
})

export default ChildComponent;