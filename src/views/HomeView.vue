<script setup>
	import { ref, onMounted, inject, onUpdated } from "vue";
	import axios from "axios";
	import TodoCard from "@/components/TodoCard.vue";
	import Button from "@/components/Button.vue";
	import ModalDelete from "@/components/ModalDelete.vue";
	import ToastProps from "../components/ToastProps.vue";

	const activities = ref([]);
	const api = inject("api");
	const email = inject("email");
	let isLoading = ref(false);
	let showToast = ref(false);
	let toastText = ref("");

	// Pass activity variables to ModalDelete component
	let activityName = ref();
	let activityId = ref();

	// email params to get data of drafted email only
	async function getActivities() {
		// try {
		// 	const response = await axios.get(`${api}/activity-groups?email=bilpo@mail.com`);
		// 	activities.value = response.data.data;
		// } catch (error) {
		// 	console.error(error);
		// }
		isLoading.value = true;
		axios
			.get(`${api}/activity-groups?email=bilpo@mail.com`)
			.then((response) => {
				// console.log(response)
				activities.value = response.data.data;
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				isLoading.value = false;
			});
	}

	function createActivity() {
		axios
			.post(`${api}/activity-groups`, {
				title: "New Activity",
				email: email,
			})
			.then((response) => {
				// console.log(response)
				getActivities();
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function deleteActivity(id) {
		axios
			.delete(`${api}/activity-groups/${id}`)
			.then(function (response) {
				getActivities();
				toastText.value = "Activity berhasil dihapus";
				showToast.value = true;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function passActivityData(id, name) {
		return (activityName.value = name), (activityId.value = id);
	}

	onMounted(() => {
		getActivities();
	});
</script>

<template>
	<div class="container" v-if="!isLoading" data-cy="home-view">
		<div class="flex items-center justify-between">
			<h1 class="text-base md:text-4xl font-bold">Activity</h1>
			<Button
				label="Tambah"
				icon="@/assets/svg/ic-plus.svg"
				variant="primary"
				@click="createActivity"
				data-cy="activity-add-button"
			/>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-x-5 gap-y-6">
			<template v-for="activity in activities" :key="activity.id" data-cy="todo-card">
				<TodoCard
					:id="activity.id"
					:title="activity.title"
					:date="activity.created_at"
					@pass-activity-data="passActivityData"
				/>
			</template>
		</div>

		<ModalDelete
			:activityName="activityName"
			:activityId="activityId"
			@delete-activity="deleteActivity"
			data-cy="modal-delete"
		/>

		<ToastProps v-if="showToast" :text="toastText" data-cy="toast-props" />
		<img
			v-if="!activities.length"
			src="@/assets/svg/activity-empty.svg"
			class="h-[490px] w-auto mx-auto md:mt-[60px] hidden md:block"
			alt=""
		/>
		<img
			v-if="!activities.length"
			src="@/assets/svg/activity-empty-sm-screen.svg"
			class="w-auto mx-auto md:mt-[60px] block md:hidden mt-20"
			alt=""
		/>
	</div>

	<template v-else>
		<img src="@/assets/svg/loader.svg" class="mx-auto" alt="" />
	</template>
</template>
