<script setup>
	import { computed } from 'vue';
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
            required: true
        }
	});

	const formattedDate = computed(() => {
		let d = new Date(props.date)
		const str = new Intl.DateTimeFormat("id-ID", { dateStyle: 'long' }).format(d)
		return str
	})

</script>

<template>
	<div class="rounded-xl bg-white shadow-custom flex flex-col py-[22px] px-6 md:min-h-[235px]">
		<h5 class="text-lg font-bold">
            <RouterLink to="/list">{{ title + id }}</RouterLink>
        </h5>
		<div class="flex items-center justify-between mt-auto">
			<p class="text-sm text-grey font-medium">{{ formattedDate }}</p>
			<button type="button" @click="$emit('deleteActivity', id)">
				<img src="@/assets/svg/ic-trash.svg" alt="" />
			</button>
		</div>
	</div>
</template>
