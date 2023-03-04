<script setup>
	import { RouterView } from "vue-router";
	import Navbar from "./components/Navbar.vue";
</script>

<template>
	<Navbar />

	<main class="pb-20">
		<RouterView />
	</main>
</template>
