<!-- @component
A counter written with Svelte
-->

<script lang="ts">
import { svelteExp } from '../stores/';



	let count = 0;

	function add() {
		svelteExp.set($svelteExp+1)
		
	}

	function subtract() {

		svelteExp.set($svelteExp-1)
	}
</script>

<div class="counter">
	<button on:click={subtract}>-</button>
	<pre>{$svelteExp}</pre>
	<button on:click={add}>+</button>
</div>
<div class="counter-message">
	<slot />
</div>
