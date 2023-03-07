<script setup>

function addCheckIcon(el) {
    // Remove sort-bg-check
    let elements = document.querySelectorAll('[data-te-dropdown-item-ref]')
    for (var i=0; i < elements.length; i++) {
        elements[i].classList.remove('sort-bg-check')
    }

    return el.target.classList.add('sort-bg-check')
}

</script>

<template>
	<div class="relative" data-te-dropdown-ref>
		<button
			type="button"
			id="dropdownMenuButton1"
			data-te-dropdown-toggle-ref
			aria-expanded="false"
			class="border border-[#e5e5e5] rounded-full p-[11px] md:p-[15px]"
		>
			<img src="@/assets/svg/ic-arrows.svg" class="w-4 md:w-6" alt="" />
		</button>
		<ul
			class="absolute z-[1000] float-left m-0 hidden min-w-[190px] md:min-w-[235px] max-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-left text-base shadow-custom [&[data-te-dropdown-show]]:block divide-y divide-[#E5E5E5]"
			aria-labelledby="dropdownMenuButton1"
			data-te-dropdown-menu-ref
		>
			<li>
				<a
					class="flex items-center gap-[15px] w-full whitespace-nowrap bg-transparent py-[14px] px-5 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 sort-bg-check"
					href="#"
					data-te-dropdown-item-ref
                    @click.prevent="$emit('sortData', 'newest'); addCheckIcon($event)"
					>
                        <img src="@/assets/svg/ic-sort-newest.svg" alt="">
                        Terbaru
                    </a
				>
			</li>
			<li>
				<a
					class="flex items-center gap-[15px] w-full whitespace-nowrap bg-transparent py-[14px] px-5 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
					href="#"
					data-te-dropdown-item-ref
                    @click.prevent="$emit('sortData', 'oldest'); addCheckIcon($event)"
					>
                        <img src="@/assets/svg/ic-sort-oldest.svg" alt="">
                        Terlama
                    </a
				>
			</li>
			<li>
				<a
					class="flex items-center gap-[15px] w-full whitespace-nowrap bg-transparent py-[14px] px-5 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
					href="#"
					data-te-dropdown-item-ref
                    @click.prevent="$emit('sortData', 'asc'); addCheckIcon($event)"
					>
                        <img src="@/assets/svg/ic-sort-asc.svg" alt="">
                        A-Z
                    </a
				>
			</li>
			<li>
				<a
					class="flex items-center gap-[15px] w-full whitespace-nowrap bg-transparent py-[14px] px-5 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
					href="#"
					data-te-dropdown-item-ref
                    @click.prevent="$emit('sortData', 'desc'); addCheckIcon($event)"
					>
                        <img src="@/assets/svg/ic-sort-desc.svg" alt="">
                        Z-A
                    </a
				>
			</li>
			<li>
				<a
					class="flex items-center gap-[15px] w-full whitespace-nowrap bg-transparent py-[14px] px-5 text-sm md:text-base font-normal text-[#4A4A4A] hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
					href="#"
					data-te-dropdown-item-ref
                    @click.prevent="$emit('sortData', 'ongoing'); addCheckIcon($event)"
					>
                        <img src="@/assets/svg/ic-sort-arrow.svg" alt="">
                        Belum Selesai
                    </a
				>
			</li>
		</ul>
	</div>
</template>
