<script lang="ts">
	import Head from '$lib/components/front/Head.svelte';
	import { fade } from 'svelte/transition';
	import { typewriter } from '$lib/typewriter';
	import { SiBluesky, SiGithub, SiTwitch } from '@icons-pack/svelte-simple-icons';
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

<Head title="Lara's corner of whimsy" />

<div class="container mx-auto flex flex-1 flex-col justify-center">
	{#if heading}
		<h1 in:typewriter={{ speed: 1, delay: 0 }} class="text-4xl md:text-left text-center font-bold">
			{heading}
		</h1>
	{/if}
	{#if shouldShow}
		<div in:fade class="mt-4 md:text-left text-center">
			<p>Hi, I'm Lara, this site is work in progress but is also very silly</p>
			<p>
				Suggestions welcome, I improvised on these colors and I think it looks a bit harsh in some
				places
			</p>
			<div
				class="flex flex-row md:text-left text-center md:justify-start justify-center items-center mt-4 space-x-4"
			>
				<a
					class="hover:text-accent"
					href="https://bsky.app/profile/did:plc:d3lrsz5je2dloj3zfbwi6ch6"
					><SiBluesky title="Bluesky" /></a
				>
				<a class="hover:text-accent" href="https://www.twitch.tv/laratheprotogen"
					><SiTwitch title="Twitch" /></a
				>
				<a class="hover:text-accent" href="https://github.com/laraproto"
					><SiGithub title="Github" /></a
				>
			</div>
		</div>
	{/if}
</div>
