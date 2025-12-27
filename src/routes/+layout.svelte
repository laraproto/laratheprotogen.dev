<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/lara.png';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/front/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<div class="flex min-h-screen flex-col">
	<header class=" sticky top-0 flex h-16 shrink-0 items-center gap-2 px-4 z-10">
		<a href="/"><img src={favicon} alt="Site Icon" class="h-16 w-16" /></a>
		<Navbar />
	</header>
	<main class="flex flex-1 flex-col">
		{@render children?.()}
	</main>
</div>
