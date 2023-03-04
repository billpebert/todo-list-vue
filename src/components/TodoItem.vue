<script setup>
	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="rounded-xl bg-white shadow-custom flex flex-col py-[26px] px-6 w-full">
		<div class="inline-flex items-center justify-between">
			<div class="inline-flex gap-4 items-center">
				<input type="checkbox" name="" id="" />
				<span class="ml-1 w-[9px] h-[9px] bg-red-600 rounded-full"></span>
				<p class="font-medium text-lg text-dark">{{ title }}</p>
				<button type="button">
					<img src="@/assets/svg/ic-pencil.svg" alt="" />
				</button>
			</div>
			<button type="button">
				<img src="@/assets/svg/ic-trash.svg" alt="" />
			</button>
		</div>
	</div>
</template>
