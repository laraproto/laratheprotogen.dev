<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<div class="flex min-h-screen flex-col">
	<header
		class="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 z-10"
	></header>
	<main class="flex flex-1 flex-col">
		{@render children?.()}
	</main>
</div>
