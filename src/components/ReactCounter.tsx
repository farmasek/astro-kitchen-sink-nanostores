import { useState } from 'react';
import { useStore } from '@nanostores/react'; // or '@nanostores/preact'
import { $counter } from '../stores/';

/** A counter written with React */
export function Counter({ children }) {
  const count = useStore($counter);
  const add = () => {
    $counter.set(count + 1);
  };
  const subtract = () => {
    $counter.set(count - 1);
  };

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
