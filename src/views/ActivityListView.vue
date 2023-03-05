<script setup>
	import TodoItem from "@/components/TodoItem.vue";
	import Button from "../components/Button.vue";
	import ModalCreate from "../components/ModalCreate.vue";
</script>

<template>
	<div class="container">
		<div class="flex flex-col md:items-center justify-between gap-8">
			<div class="inline-flex items-center gap-5 justify-between md:justify-start">
				<!-- Back Button -->
				<button type="button" class="hidden md:block">
					<img src="@/assets/svg/ic-chevron-left.svg" alt="" />
				</button>
				<h1 class="text-base md:text-4xl font-bold">Daftar Belanja Bulanan</h1>
				<button type="button" class="w-5 md:w-6">
					<img src="@/assets/svg/ic-pencil.svg" alt="" />
				</button>
			</div>
			<div class="inline-flex items-center gap-5 self-end">
				<!-- Sort Button -->
				<button type="button" class="border border-[#e5e5e5] rounded-full p-[11px] md:p-[15px]">
					<img src="@/assets/svg/ic-arrows.svg" class="w-4 md:w-6" alt="" />
				</button>
				<Button
					label="Tambah"
					icon="/src/assets/svg/ic-plus.svg"
					variant="primary"
					data-te-toggle="modal"
					data-te-target="#exampleModal"
				/>
			</div>
		</div>

		<div class="flex flex-col mt-7 md:mt-[50px] gap-y-[10px]">
			<TodoItem title="Belanja buladnan" date="5 Oktober 2012" />
		</div>

		<img src="@/assets/svg/item-list-empty.svg" class="h-[490px] w-auto mx-auto mt-[60px]" alt="" />

		<ModalCreate />
	</div>
</template>
