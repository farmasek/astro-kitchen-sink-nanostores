/** @jsxImportSource solid-js */

import { createSignal } from 'solid-js';
import { $counter } from '../stores/';
import { useStore } from '@nanostores/solid';

/** A counter written with Solid */
export default function SolidCounter({ children }) {
  const count = useStore($counter);
  const add = () => {
    $counter.set(count() + 1);
  };
  const subtract = () => {
    $counter.set(count() - 1);
  };

  return (
    <>
      <div id="solid" class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}
