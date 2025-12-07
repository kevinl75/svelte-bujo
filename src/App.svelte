<script lang="ts">
	import "./app.css";
	import DatePickerTitle from "./components/DatePickerTitle.svelte";
	import ItemsWrapper from "./components/items/ItemsWrapper.svelte";
	import NavBar from "./components/NavBar.svelte";

	let selectedDate: Date = $state(new Date());

	function setSelectedDate(newDate: Date) {
		selectedDate = newDate;
	}

	function getSelectedDate() {
		return selectedDate;
	}
</script>

<main>
	<NavBar />
	<div class="m-auto max-w-5xl object-top pt-10">
		<div class="flex pb-4">
			<h2 class="mb-4 grow h2">Daily Log</h2>
			<DatePickerTitle {getSelectedDate} {setSelectedDate} />
		</div>
		<ItemsWrapper {selectedDate} />
	</div>
</main>

<style>
</style>
