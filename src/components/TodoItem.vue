<script setup>
	import { computed, onUpdated } from "vue";
	const props = defineProps({
		id: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		priority: {
			type: String,
			required: true,
		},
		isActive: {
			type: Number,
			required: true,
		},
	});

	let valPriority = props.priority;

	// Bug: not triggered after data updated
	// const generatePriority = computed(() => {
	// 	console.log('priority computing')
	// 	if (valPriority == "very-high") {
	// 		return "bg-danger";
	// 	} else if (valPriority == "high") {
	// 		return "bg-warning";
	// 	} else if (valPriority == "normal") {
	// 		return "bg-success";
	// 	} else if (valPriority == "low") {
	// 		return "bg-cyan";
	// 	} else {
	// 		return "bg-magenta";
	// 	}
	// });

	function generatePriority(valPriority) {
		if (valPriority == "very-high") {
			return "bg-danger";
		} else if (valPriority == "high") {
			return "bg-warning";
		} else if (valPriority == "normal") {
			return "bg-success";
		} else if (valPriority == "low") {
			return "bg-cyan";
		} else {
			return "bg-magenta";
		}
	}
</script>

<template>
	<div class="rounded-xl bg-white shadow-custom flex flex-col py-[18px] md:py-[26px] px-5 md:px-6 w-full">
		<div class="inline-flex items-center justify-between">
			<div class="inline-flex gap-4 items-center">
				<input
					type="checkbox"
					name="isFinish"
					:id="`${title}Checkbox`"
					class="hidden-box"
					:checked="!isActive"
					@click="$emit('markAsDone', id, !isActive)"
					data-cy="todo-item-checkbox"
				/>
				<label :for="`${title}Checkbox`" class="check--label cursor-pointer">
					<span class="check--label-box"></span>
					<span class="check--label-text">
						<span
							class="md:w-[9px] w-[5px] md:h-[9px] h-[5px] rounded-full"
							:class="generatePriority(priority)"
						></span>
						<p class="font-medium text-sm md:text-lg">{{ title }}</p>
					</span>
				</label>
				<button
					type="button"
					class="w-3 md:w-6"
					@click="$emit('passItemData', id, title, props.priority)"
					data-te-toggle="modal"
					data-te-target="#modalUpdate"
				>
					<img src="@/assets/svg/ic-pencil.svg" alt="" />
				</button>
			</div>
			<button
				type="button"
				class="w-4 md:w-6"
				@click="$emit('passActivityData', id, title)"
				data-te-toggle="modal"
				data-te-target="#modalDelete"
				data-cy="todo-item-delete-button"
			>
				<img src="@/assets/svg/ic-trash.svg" alt="" />
			</button>
		</div>
	</div>
</template>
