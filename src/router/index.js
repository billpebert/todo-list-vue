import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ActivityListView from "../views/ActivityListView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/activity-:id",
			name: "activity-list",
			component: ActivityListView,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
});

export default router;
