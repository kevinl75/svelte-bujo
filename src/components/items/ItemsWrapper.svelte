<script lang="ts">
	import { addDay } from "@formkit/tempo";
	import ItemsList from "./ItemsList.svelte";
	import { ItemTypeEnum, type IItem } from "../../models/Item";
	import NewItem from "./NewItem.svelte";

	let currentDate = new Date();

	let { selectedDate } = $props();

	let itemList: IItem[] = $state([
		{
			itemContent: "Une note.",
			itemType: ItemTypeEnum.NOTE,
			isDone: false,
			itemDate: currentDate
		},
		{
			itemContent: "Une tâche.",
			itemType: ItemTypeEnum.TASK,
			isDone: false,
			itemDate: addDay(currentDate, 1)
		},
		{
			itemContent: "Un évenement.",
			itemType: ItemTypeEnum.EVENT,
			isDone: false,
			itemDate: addDay(currentDate, -1)
		},
		{
			itemContent: "Une deuxième note.",
			itemType: ItemTypeEnum.NOTE,
			isDone: false,
			itemDate: currentDate
		},
		{
			itemContent: "Une tâche terminée.",
			itemType: ItemTypeEnum.TASK,
			isDone: true,
			itemDate: addDay(currentDate, 1)
		},
		{
			itemContent: "Un évenement terminé.",
			itemType: ItemTypeEnum.EVENT,
			isDone: true,
			itemDate: addDay(currentDate, -1)
		}
	]);

	const addNewitem = (item: IItem) => {
		itemList.push(item);
	};

	const removeItem = (item: IItem) => {
		let newItemList: IItem[] = [];
		itemList.forEach((element) => {
			if (element != item) {
				newItemList.push(element);
			}
		});
		itemList = newItemList;
	};
</script>

<div class="rounded-md preset-filled-surface-400-600 p-5">
	<NewItem callback={addNewitem} />
	<div class="mt-5">
		<ItemsList items={itemList} removeItemCallback={removeItem} {selectedDate} />
	</div>
</div>
