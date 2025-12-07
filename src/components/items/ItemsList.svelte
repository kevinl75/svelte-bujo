<script lang="ts">
	import Item from "./Item.svelte";
	import { format } from "@formkit/tempo";

	let { items, removeItemCallback, selectedDate } = $props();
</script>

<main>
	<div>
		{#each items as item (item.itemContent)}
			{#if format(item.itemDate, "short") == format(selectedDate, "short")}
				<Item {item} {removeItemCallback} />
			{/if}
		{/each}
	</div>
</main>

<style>
</style>
