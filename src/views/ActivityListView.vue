<script setup>
	import TodoItem from "@/components/TodoItem.vue";
	import Button from "../components/Button.vue";
	import ModalCreate from "../components/ModalCreate.vue";
	import axios from "axios";
	import { onMounted, ref, inject, computed } from "vue";
	import { useRoute, RouterLink } from "vue-router";
	import ToastProps from "../components/ToastProps.vue";
	import ModalDelete from "../components/ModalDelete.vue";
import ModalEdit from "../components/ModalEdit.vue";

	const route = useRoute();
	const api = inject("api");
	const activity = ref([]);
	let todo_items = ref([]);
	let showForm = ref(false);
	let showActivityTitle = ref(true);
	let activityTitle = ref();
	let showModal = ref(false);
	let showToast = ref(false);

	// Pass activity variables to ModalDelete component
	let activityName = ref();
	let activityId = ref();

	// Pass data to modal edit
	let itemName = ref();
	let itemId = ref();
	let itemPriority = ref();

	function getActivity() {
		axios
			.get(`${api}/activity-groups/${route.params.id}`)
			.then((response) => {
				activity.value = response.data;
				activityTitle.value = activity.value.title;
				todo_items.value = activity.value.todo_items;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				showModal.value = true;
			});
	}

	function updateActivity() {
		if (activity.value.title != activityTitle.value) {
			axios
				.patch(`${api}/activity-groups/${route.params.id}`, {
					title: activityTitle.value,
				})
				.then((response) => {
					getActivity();
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					toggleEditActName();
				});
		} else {
			console.warning("Nothing to update");
		}
	}

	function createItem(title, groupId, priority) {
		axios
			.post(`${api}/todo-items`, {
				title: title,
				activity_group_id: groupId,
				priority: priority,
			})
			.then((response) => {
				getActivity();
				// console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	function updateItem(title, itemId, groupId, priority) {
		console.log(title, itemId, groupId, priority)
		axios
			.patch(`${api}/todo-items/${itemId}`, {
				id: itemId,
				title: title,
				activity_group_id: groupId,
				priority: priority,
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				getActivity()
			});
	}

	function deleteActivity(id) {
		axios
			.delete(`${api}/todo-items/${id}`)
			.then(() => {
				getActivity();
				showToast.value = true;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function markAsDone(id, value) {
		axios
			.patch(`${api}/todo-items/${id}`, {
				is_active: value,
			})
			.then(() => {
				getActivity();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function toggleEditActName() {
		showActivityTitle.value = !showActivityTitle.value;
		showForm.value = !showForm.value;

		if (showForm.value == true) {
			setTimeout(() => {
				document.getElementById("activityName").focus();
			}, 10);
		}
	}

	function passActivityData(id, name) {
		// console.log(id, name)
		return (activityName.value = name), (activityId.value = id);
	}

	function passItemData(id, name, priority) {
		// console.log(id, name, priority)
		return (itemId.value = id), (itemName.value = name), (itemPriority.value = priority);
	}

	onMounted(() => {
		getActivity();
	});
</script>

<template>
	<div class="container">
		<div class="flex flex-col md:flex-row md:items-center justify-between gap-8">
			<div class="inline-flex items-center gap-5 justify-between md:justify-start w-max">
				<!-- Back Button -->
				<RouterLink to="/">
					<button type="button" class="hidden md:block w-5 md:w-6">
						<img src="@/assets/svg/ic-chevron-left.svg" alt="" />
					</button>
				</RouterLink>
				<h1 class="text-base md:text-4xl font-bold" id="activityH1" v-if="showActivityTitle">
					{{ activity.title }}
				</h1>
				<input
					type="text"
					class="text-base md:text-4xl font-bold border-b border-b-[#D8D8D8] py-3 read-only:border-none outline-none w-max flex-shrink"
					v-if="showForm"
					:placeholder="activity.title"
					name="activity_name"
					id="activityName"
					v-model="activityTitle"
					@keyup.enter="updateActivity"
				/>
				<button type="button" class="w-5 md:w-6" @click="toggleEditActName">
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
			<template v-for="item in todo_items" :key="item.id">
				<TodoItem
					:id="item.id"
					:title="item.title"
					:priority="item.priority"
					:is-active="item.is_active"
					@mark-as-done="markAsDone"
					@pass-activity-data="passActivityData"
					@pass-item-data="passItemData"
				/>
			</template>
		</div>

		<img
			src="@/assets/svg/item-list-empty.svg"
			v-if="!todo_items.length"
			class="h-[490px] w-auto mx-auto mt-[60px] hidden md:block"
			alt=""
		/>
		<img
			src="@/assets/svg/item-list-empty-sm-screen.svg"
			v-if="!todo_items.length"
			class="w-auto mx-auto mt-[60px] block md:hidden"
			alt=""
		/>

		<ToastProps v-if="showToast" />

		<template v-if="showModal">
			<ModalCreate modal-type="create" :activity-id="activity.id" @create-item="createItem" />
			<ModalEdit :activity-id="activity.id" :id="itemId" v-model:priority="itemPriority" v-model:title="itemName" @update-item="updateItem" />
			<!-- <ModalCreate modal-type="edit" :activity-id="activity.id" :id="itemId" :selected-priority="itemPriority" :title-form="itemName" /> -->
			<ModalDelete :activityName="activityName" :activityId="activityId" @delete-activity="deleteActivity" />
		</template>
	</div>
</template>
