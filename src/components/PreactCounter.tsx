/** @jsxImportSource preact */

import { useState } from 'preact/hooks';
import { useStore } from '@nanostores/preact'; // or '@nanostores/preact'
import { $counter } from '../stores/';

/** A counter written with Preact */
export function PreactCounter({ children }) {
  const count = useStore($counter);
  const add = () => {
    $counter.set(count + 1);
  };
  const subtract = () => {
    $counter.set(count - 1);
  };
  return (
    <>
      <div class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}
