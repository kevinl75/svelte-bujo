<script lang="ts">
	import { Circle, Minus, Square, CircleCheckBig, SquareCheckBig, X } from "lucide-svelte";
	import { ItemTypeEnum, type IItem } from "../../models/Item";

	type ItemCallbackFunction = {
		(item: IItem): void;
	};

	let { item, removeItemCallback } = $props();

	function setToDone() {
		item.isDone = !item.isDone;
	}
</script>

<div class="group/sub my-2 flex items-center card preset-filled-secondary-200-800 py-2">
	<button onclick={() => setToDone()} class="ml-5 flex-none">
		{#if item.itemType == ItemTypeEnum.EVENT}
			{#if item.isDone}
				<CircleCheckBig />
			{:else}
				<Circle />
			{/if}
		{:else if item.itemType == ItemTypeEnum.NOTE}
			<Minus />
		{:else if item.isDone}
			<SquareCheckBig />
		{:else}
			<Square />
		{/if}
	</button>
	<p class="mx-5 text-lg {item.isDone ? 'line-through' : ''} flex-1">{item.itemContent}</p>
	<button
		onclick={() => removeItemCallback(item)}
		class="mr-5 flex-none opacity-0 group-hover/sub:opacity-100"
	>
		<X />
	</button>
</div>

<style>
</style>
