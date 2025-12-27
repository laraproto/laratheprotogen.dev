<script lang="ts">
	import Head from '$lib/components/front/Head.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import laraprootcrop from '$lib/assets/laraprootcrop.png';
	import { SiBluesky, SiGithub, SiTwitch, SiBuymeacoffee } from '@icons-pack/svelte-simple-icons';
</script>

<Head title="About | Lara's corner of whimsy" />

<div class="container mx-auto flex flex-1 flex-col md:items-start items-center justify-center">
	<div class="flex md:flex-row flex-col items-center">
		<Avatar.Root class="w-48 h-48">
			<Avatar.Image src={laraprootcrop} alt="Lara pfp" />
			<Avatar.Fallback>Lara</Avatar.Fallback>
		</Avatar.Root>
		<div
			class="justify-center md:items-start items-center text-center md:text-left flex flex-col px-6 text-lg"
		>
			<h4 class="text-3xl md:text-left">Lara (or Laura)</h4>
			<p>Severe amounts of whimsy, programmer, web dev, artist</p>
			<p class="text-ellipsis md:w-xl">
				BuyMeACoffee page down below, if you wish to give me money for my projects (or paying for a
				commission) you can find the link there
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
				<a class="hover:text-accent" href="https://buymeacoffee.com/laratheprotogen"
					><SiBuymeacoffee title="BuyMeACoffee" /></a
				>
			</div>
		</div>
	</div>
</div>
