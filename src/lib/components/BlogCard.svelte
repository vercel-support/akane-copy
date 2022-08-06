<script>
	import Button from './Button.svelte';

	export let text = '';
	export let image;
</script>

<!-- <div
	class="bg-zinc-50 flex flex-col gap-4 p-8 text-center shadow-secondary/70 shadow-2xl rounded-3xl dark:bg-dark dark:shadow-black dark:text-white"
>
	<img src={image.src} class="pb-0 rounded-3xl" alt={image.alt} />
	<p class="mt-4">
		{@html text}
	</p>
	<span>
		<Button text="Leer más" href="" variant="primary" />
	</span>
</div> -->

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
	<div class="flex-shrink-0">
		<img class="h-48 w-full object-cover" src={image.src} alt="" />
	</div>
	<div class="flex-1 bg-white p-6 flex flex-col justify-between">
		<div class="flex-1">
			<p class="text-sm font-medium text-primary">
				<a href="#" class="hover:underline"> Article </a>
			</p>
			<a href="#" class="block mt-2">
				<p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
				<p class="mt-3 text-base text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum
					eos quis dolorum.
				</p>
			</a>
		</div>
		<div class="mt-6 flex items-center">
			<div class="flex-shrink-0">
				<a href="#">
					<span class="sr-only">Roel Aufderehar</span>
					<img
						class="h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</a>
			</div>
			<div class="ml-3">
				<p class="text-sm font-medium text-gray-900">
					<a href="#" class="hover:underline"> Roel Aufderehar </a>
				</p>
				<div class="flex space-x-1 text-sm text-gray-500">
					<time datetime="2020-03-16"> Mar 16, 2020 </time>
					<span aria-hidden="true"> &middot; </span>
					<span> 6 min read </span>
				</div>
			</div>
		</div>
	</div>
</div>
