<script setup>
import TodoCard from "@/components/TodoCard.vue";
import Button from "@/components/Button.vue";
</script>

<template>
	<div class="container">
		<div class="flex items-center justify-between">
			<h1 class="text-4xl font-bold">Activity</h1>
            <Button label="Tambah" icon="/src/assets/svg/ic-plus.svg" variant="primary" />
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-x-5 gap-y-6">
            <TodoCard title="Belanja bulanan" date="5 Oktober 2012" />
		</div>

		<img src="@/assets/svg/activity-empty.svg" class="h-[490px] w-auto mx-auto mt-[60px]" alt="" />
	</div>
</template>
