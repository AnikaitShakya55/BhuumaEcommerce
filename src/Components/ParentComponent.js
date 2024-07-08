import React, { forwardRef, useRef, useImperativeHandle } from 'react';

function ParentComponent() {
  const childRef = useRef(null);
  
  const clickHandler= ()=> {
    childRef.current.focusInputFunction();
  }

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={clickHandler}>Focus Child Input</button>
    </div>
  );
}

export default ParentComponent;


const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInputFunction: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />;
});


