<script setup>
	import { computed } from "vue";
	const props = defineProps({
		id: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
	});

	const formattedDate = computed(() => {
		let d = new Date(props.date);
		const str = new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(d);
		return str;
	});
</script>

<template>
	<div
		class="relative rounded-xl bg-white shadow-custom flex flex-col py-[22px] px-6 min-h-[150px] md:min-h-[235px]"
		data-cy="activity-item"
	>
		<h5 class="text-sm md:text-lg font-bold" data-cy="activity-item-title">
			{{ title }}
		</h5>
		<RouterLink :to="`/activity-${id}`" class="inset-0 absolute"> </RouterLink>
		<div class="flex items-center justify-between mt-auto">
			<p class="text-[10px] md:text-sm text-grey font-medium" data-cy="activity-item-date">{{ formattedDate }}</p>
			<button
				type="button"
				class="relative z-10"
				@click="$emit('passActivityData', id, title)"
				data-te-toggle="modal"
				data-te-target="#modalDelete"
				data-cy="activity-item-delete-button"
			>
				<img src="@/assets/svg/ic-trash.svg" class="w-3 md:w-6" alt="" />
			</button>
		</div>
	</div>
</template>
