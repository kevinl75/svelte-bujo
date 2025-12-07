<script lang="ts">
	import "./app.css";
	import Header from "./components/Header.svelte";
	import ItemsWrapper from "./components/items/ItemsWrapper.svelte";

	let selectedDate: Date = $state(new Date());

	function setSelectedDate(newDate: Date) {
		selectedDate = newDate;
	}

	function getSelectedDate() {
		return selectedDate
	}
</script>

<main>
	<div class="pb-4">
		<Header {getSelectedDate} {setSelectedDate} />
	</div>
	<hr class="hr" />
	<ItemsWrapper {selectedDate} />
</main>

<style>
</style>
