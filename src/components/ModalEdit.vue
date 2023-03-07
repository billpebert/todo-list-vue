<script setup>
	import Button from "./Button.vue";
	import { ref, computed } from "vue";
	import PriorityOptions from "./PriorityOptions.vue";

	const props = defineProps({
		activityId: {
			type: Number,
			required: true,
		},
		id: {
			type: Number,
		},
		priority: {
			type: String,
		},
		title: {
			type: String,
		},
	});

	let titleForm = ref("");
	let selectedPriority = ref("very-high");
	let priorityOptions = ref(["very-high", "high", "normal", "low", "very-low"]);

	const allowSubmit = computed(() => {
		return props.titleForm != "";
	});

	const updateSelected = (val) => {
		selectedPriority.value = val;
		// this.$emit('update:priority', val)
		// console.log(props.priority, selectedPriority.value);
	};

	// Copied from PriorityOptions
	let selectedOption = ref("Pilih priority");

	function generatePriority(valPriority) {
		if (valPriority == "very-high") {
			return "bg-danger";
		} else if (valPriority == "high") {
			return "bg-warning";
		} else if (valPriority == "normal") {
			return "bg-success";
		} else if (valPriority == "low") {
			return "bg-cyan";
		} else if (valPriority == "very-low") {
			return "bg-magenta";
		} else {
			return "hidden";
		}
	}

	function rotateArrow() {
		const arrowIcon = document.getElementById("arrowDD");
		const myDropdown = document.getElementById("dropDownPriority");
		myDropdown.addEventListener("shown.te.dropdown", () => {
			arrowIcon.classList.add("rotate-180");
		});
		myDropdown.addEventListener("hidden.te.dropdown", () => {
			arrowIcon.classList.remove("rotate-180");
		});
	}
</script>

<template>
	<!-- Modal -->
	<div
		data-te-modal-init
		class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
		id="modalUpdate"
		tabindex="-1"
		aria-labelledby="modalUpdateLabel"
		aria-hidden="true"
	>
		<div
			data-te-modal-dialog-ref
			class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto mt-20 min-[576px]:max-w-[800px] px-5"
		>
			<div
				class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
			>
				<div
					class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4"
				>
					<h5 class="text-lg font-medium leading-normal text-neutral-800" id="modalUpdateLabel">Edit Item</h5>
					<button
						type="button"
						class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
						data-te-modal-dismiss
						aria-label="Close"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div
					class="relative flex-auto flex flex-col gap-[26px] p-4 md:px-[30px] md:py-7"
					data-te-modal-body-ref
				>
					<div class="flex flex-col gap-2">
						<label for="" class="text-dark font-semibold text-xs">Name List Item</label>
						<input
							type="text"
							name="name"
							id=""
							placeholder="Tambahkan nama list item"
							class="placeholder:text-[#A4A4A4] text-dark py-[14px] px-[18px] text-sm md:text-base outline-none border border-[#e5e5e5] rounded-md focus:ring ring-sky-200"
							:value="title"
							@input="$emit('update:title', $event.target.value)"
						/>
					</div>

					<div class="flex flex-col gap-2">
						<label for="" class="text-dark font-semibold text-xs">Name List Item</label>
						<!-- <PriorityOptions
							:priorities="priorityOptions"
							@update-selected="updateSelected"
							:selected-option="priority"
						/> -->

						<div class="relative w-max" data-te-dropdown-ref data-cy="priority-options">
							<button
								class="flex items-center whitespace-nowrap transition duration-150 ease-in-out text-dark py-[14px] px-[18px] text-sm md:text-base outline-none border border-[#e5e5e5] rounded-md focus:ring ring-sky-200 capitalize w-max group"
								type="button"
								id="dropDownPriority"
								data-te-dropdown-toggle-ref
								aria-expanded="false"
								data-te-dropdown-animation="off"
								@click.prevent="rotateArrow"
								data-cy="modal-add-priority-dropdown"
							>
								<span
									class="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5"
									:class="generatePriority(selectedOption)"
								></span>
								{{
									selectedOption == "normal"
										? "Medium"
										: selectedOption.split("-").toString().replace(/,/g, " ")
								}}

								<img src="@/assets/svg/ic-chevron-down.svg" class="ml-10" id="arrowDD" alt="" />
							</button>
							<ul
								class="absolute z-[1000] float-left m-0 hidden w-full list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-sm md:text-base shadow-lg [&[data-te-dropdown-show]]:block divide-y divide-[#e5e5e5]"
								aria-labelledby="dropDownPriority"
								data-te-dropdown-menu-ref
							>
								<template v-for="(priority, index) in priorityOptions" :key="index">
									<li>
										<a
											class="flex items-center w-full whitespace-nowrap bg-transparent py-2 md:py-[14px] px-4 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 capitalize"
											href="#"
											data-te-dropdown-item-ref
											@click.prevent="
												updateSelected(priority);
												$emit('update:priority', priority);
												selectedOption = priority;
											"
										>
											<span
												class="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full mr-5"
												:class="generatePriority(priority)"
											></span>
											{{
												priority == "normal"
													? "Medium"
													: priority.split("-").toString().replace(/,/g, " ")
											}}
										</a>
									</li>
								</template>
							</ul>
						</div>
					</div>
				</div>
				<div
					class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4"
				>
					<Button
						label="Simpan"
						variant="primary"
						:disabled="allowSubmit == false"
						@click="$emit('updateItem', title, id, activityId, priority)"
						data-te-modal-dismiss
					/>
				</div>
			</div>
		</div>
	</div>
</template>
