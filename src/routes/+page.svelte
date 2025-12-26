<script lang="ts">
	import Head from '$lib/components/front/Head.svelte';
	import { fade } from 'svelte/transition';
	import { typewriter } from '$lib/typewriter';
	import { onMount } from 'svelte';

	let heading = $state<string>();
	let shouldShow = $state<boolean>(false);

	const wait = (t: number) => new Promise((res) => setTimeout(res, t));

	onMount(async () => {
		heading = 'Home of the silly';
		await wait(1900);
		shouldShow = true;
	});
</script>

<Head title="Dumb little homepage" />

<div class="container mx-auto flex flex-1 flex-col justify-center items-center">
	{#if heading}
		<h1 in:typewriter={{ speed: 1, delay: 0 }} class="text-4xl font-bold">{heading}</h1>
	{/if}
	{#if shouldShow}
		<div in:fade class="mt-4 text-center">
			<p>Hi, I'm Lara, this site is work in progress but is also very silly</p>
		</div>
	{/if}
</div>
