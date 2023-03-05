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
	<div class="rounded-xl bg-white shadow-custom flex flex-col py-[18px] md:py-[26px] px-5 md:px-6 w-full">
		<div class="inline-flex items-center justify-between">
			<div class="inline-flex gap-4 items-center">
				<input type="checkbox" name="" id="" />
				<span class="ml-1 md:w-[9px] w-[5px] md:h-[9px] h-[5px] bg-red-600 rounded-full"></span>
				<p class="font-medium text-sm md:text-lg text-dark">{{ title }}</p>
				<button type="button" class="w-3 md:w-6">
					<img src="@/assets/svg/ic-pencil.svg" alt="" />
				</button>
			</div>
			<button type="button" class="w-4 md:w-6">
				<img src="@/assets/svg/ic-trash.svg" alt="" />
			</button>
		</div>
	</div>
</template>
