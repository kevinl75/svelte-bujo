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
	<div class="mr-2 flex rounded-md p-2" id="newItemsIcons">
		<button
			id={newTypeItem == ItemTypeEnum.TASK ? "newItemIcon" : ""}
			onclick={() => chooseItemType(ItemTypeEnum.TASK)}
			class="rounded-md"
		>
			<Square class="h-10 w-10 p-2 " />
		</button>
		<button
			id={newTypeItem == ItemTypeEnum.EVENT ? "newItemIcon" : ""}
			onclick={() => chooseItemType(ItemTypeEnum.EVENT)}
			class="rounded-md"
		>
			<Circle class="h-10 w-10 p-2" />
		</button>
		<button
			id={newTypeItem == ItemTypeEnum.NOTE ? "newItemIcon" : ""}
			onclick={() => chooseItemType(ItemTypeEnum.NOTE)}
			class="rounded-md"
		>
			<Minus class="h-10 w-10 rounded-md p-2" />
		</button>
	</div>
	<input
		class="ig-input"
		type="text"
		bind:value={itemContent}
		{placeholder}
		onkeydowncapture={createNewItem}
	/>
</div>

<style>
	#newItemsIcons {
		background-color: var(--color-surface-950);
	}
	#newItemIcon {
		background-color: var(--color-surface-800);
	}
</style>
