<script setup>
	import { ref, onMounted, inject } from "vue";
	import axios from "axios";
	import TodoCard from "@/components/TodoCard.vue";
	import Button from "@/components/Button.vue";
	import ModalDelete from "@/components/ModalDelete.vue";

	const activities = ref([]);
	const api = inject("api");
	const email = inject("email");

	async function getActivities() {
		try {
			const response = await axios.get(`${api}/activity-groups?email=bilpo@mail.com`);
			activities.value = response.data.data;
		} catch (error) {
			console.error(error);
		}
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
		// console.log(id)
		axios
			.delete(`${api}/activity-groups/${id}`)
			.then(() => {
				getActivities();
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	onMounted(() => {
		getActivities();
	});
</script>

<template>
	<div class="container">
		<div class="flex items-center justify-between">
			<h1 class="text-4xl font-bold">Activity</h1>
			<Button label="Tambah" icon="/src/assets/svg/ic-plus.svg" variant="primary" @click="createActivity" />
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[50px] gap-x-5 gap-y-6">
			<template v-for="activity in activities" :key="activity.id">
				<TodoCard
					:id="activity.id"
					:title="activity.title"
					:date="activity.created_at"
					@delete-activity="deleteActivity"
				/>
			</template>
		</div>

		<a href="#" class="btn-primary pt-10" data-te-toggle="modal" data-te-target="#modalDelete">Example Modal</a>

		<ModalDelete />

		<img
			v-if="!activities.length"
			src="@/assets/svg/activity-empty.svg"
			class="h-[490px] w-auto mx-auto mt-[60px]"
			alt=""
		/>
	</div>
</template>
