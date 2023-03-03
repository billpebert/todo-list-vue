<script setup>
	defineProps({
		title: {
			type: String,
			required: true,
		},
        date: {
            type: String,
            required: true
        }
	});
</script>

<template>
	<div class="rounded-xl bg-white shadow-custom flex flex-col py-[22px] px-6 md:min-h-[235px]">
		<h5 class="text-lg font-bold">{{ title }}</h5>
		<div class="flex items-center justify-between mt-auto">
			<p class="text-sm text-grey font-medium">{{ date }}</p>
			<button type="button">
				<img src="@/assets/svg/ic-trash.svg" alt="" />
			</button>
		</div>
	</div>
</template>
