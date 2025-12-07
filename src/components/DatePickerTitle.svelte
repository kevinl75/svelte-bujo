<script lang="ts">
	import { format, addDay } from "@formkit/tempo";
	import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-svelte";
	import { DatePicker } from "@svelte-plugins/datepicker";

	let { getSelectedDate, setSelectedDate } = $props();
	let dateFormat = "medium";
	let isOpen: boolean = $state(false);

	function toggleDatePicker() {
		console.log(isOpen);
		isOpen = !isOpen;
	}

	function setDateFromDatePicker(newDate: any) {
		setSelectedDate(new Date(newDate.startDate));
	}
</script>

<div class="flex grow items-center justify-between">
	<button onclick={() => setSelectedDate(addDay(getSelectedDate(), -1))}>
		<ChevronLeft class="ml-2 h-10 w-10" />
	</button>
	<div class="flex items-center">
		<h2 class="h3">{format(getSelectedDate(), dateFormat)}</h2>
		<DatePicker bind:isOpen onDateChange={setDateFromDatePicker}>
			<button onclick={toggleDatePicker} class="ml-4">
				<CalendarDays class="h-12 w-12 p-2" />
			</button>
		</DatePicker>
	</div>
	<button onclick={() => setSelectedDate(addDay(getSelectedDate(), 1))}>
		<ChevronRight class="mr-2 h-10 w-10" />
	</button>
</div>

<style>
</style>
