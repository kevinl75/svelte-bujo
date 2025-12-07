<script lang="ts">
	import { Square, Circle, Minus } from "lucide-svelte";
	import { ItemTypeEnum, type IItem } from "../../models/Item";

	const { callback } = $props();
	let placeholder: string = $state("Your new tasks.");
	let itemContent: string = $state("");
	let newTypeItem: ItemTypeEnum = $state(ItemTypeEnum.TASK);

	function chooseItemType(type: ItemTypeEnum) {
		console.log(placeholder, type);
		if (type == ItemTypeEnum.TASK) {
			placeholder = "Your new tasks.";
			newTypeItem = type;
		} else if (type == ItemTypeEnum.EVENT) {
			placeholder = "Your new event.";
			newTypeItem = type;
		} else {
			placeholder = "Your new note.";
			newTypeItem = type;
		}
	}

	function createNewItem(event: any) {
		if (event.key == "Enter") {
			const newItem: IItem = {
				itemContent: itemContent,
				itemType: newTypeItem,
				isDone: false,
				itemDate: new Date()
			};
			callback(newItem);
		}
	}
</script>

<!-- grid-cols-[auto_1fr_auto] -->

<div class="flex">
	<div class="mr-2 flex rounded-md preset-filled-secondary-200-800 p-2" id="newItemsIcons">
		<button
			onclick={() => chooseItemType(ItemTypeEnum.TASK)}
			class="rounded-md {newTypeItem == ItemTypeEnum.TASK
				? 'preset-filled-secondary-800-200'
				: ''}"
		>
			<Square class="h-10 w-10 p-2 " />
		</button>
		<button
			onclick={() => chooseItemType(ItemTypeEnum.EVENT)}
			class="rounded-md {newTypeItem == ItemTypeEnum.EVENT
				? 'preset-filled-secondary-800-200'
				: ''}"
		>
			<Circle class="h-10 w-10 p-2" />
		</button>
		<button
			onclick={() => chooseItemType(ItemTypeEnum.NOTE)}
			class="rounded-md {newTypeItem == ItemTypeEnum.NOTE
				? 'preset-filled-secondary-800-200'
				: ''}"
		>
			<Minus class="h-10 w-10 rounded-md p-2" />
		</button>
	</div>
	<input
		class="ig-input rounded-md preset-outlined-secondary-200-800"
		type="text"
		bind:value={itemContent}
		{placeholder}
		onkeydowncapture={createNewItem}
	/>
</div>

<style>
	::placeholder {
		color: var(--color-primary-50);
	}
	input[type="text"]:focus {
		border: 2px solid var(--color-secondary-500);
	}
</style>
