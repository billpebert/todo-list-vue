<script setup>
    import { computed } from 'vue';
	const props = defineProps({
		label: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: false,
		},
		variant: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			required: false,
		},
	});

    // https://vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods
    const computedVariant = computed(() => {
        if (props.variant == "primary") {
			return "bg-skyBlue text-white";
		} else if (props.variant  == "danger") {
			return "bg-[#ED4C5C] text-white";
		} else if (props.variant  == 'secondary') {
            return "bg-secondary text-darkBrown"
        }
    })

	// function variantStyle(ve) {
	// 	if (ve == "primary") {
	// 		return "bg-skyBlue text-white";
	// 	} else if (ve == "danger") {
	// 		return "bg-[#ED4C5C] text-white";
	// 	} else if (ve == 'secondary') {
    //         return "bg-secondary text-darkBrown"
    //     }
	// }
</script>

<template>
	<button
		type="button"
		class="flex items-center text-xs md:text-lg font-semibold rounded-full px-[15px] md:px-7 py-2 md:py-3 disabled:bg-opacity-20"
		:class="computedVariant"
		:disabled="disabled"
	>
		<img :src="`@/assets/${icon}`" v-if="icon" class="mr-[6px] w-3 md:w-6" alt="" />
		{{ label }}
	</button>
</template>
