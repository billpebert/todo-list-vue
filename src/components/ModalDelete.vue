<script setup>
	import Button from "../components/Button.vue";

	const props = defineProps({
		activityId: {
			type: Number,
		},
		activityName: {
			type: String,
		},
	});
</script>

<template>
	<!-- Modal -->
	<div
		data-te-modal-init
		class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
		id="modalDelete"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div
			data-te-modal-dialog-ref
			class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out mx-auto mt-20 max-w-[320px] md:max-w-[490px]"
		>
			<div
				class="sm:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-xl border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
			>
				<div class="relative flex-auto flex flex-col gap-[26px] p-5 md:p-10" data-te-modal-body-ref>
					<div class="flex flex-col gap-2 items-center">
						<img src="@/assets/svg/ic-exclamation-triangle.svg" alt="" />
						<p class="text-center font-medium text-sm md:text-lg my-7 md:my-8">
							Apakah anda yakin menghapus activity <br class="hidden md:block" />
							<span class="font-bold">"{{ activityName }}"</span>?
						</p>
						<div class="inline-flex gap-5">
							<Button label="Batal" variant="secondary" data-te-modal-dismiss aria-label="Close" />
							<Button label="Hapus" variant="danger" data-te-modal-dismiss @click="$emit('deleteActivity', activityId)" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
