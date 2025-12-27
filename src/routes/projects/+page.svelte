<script lang="ts">
	import protogensocial from '$lib/assets/protogensociallogo.png';
	import lara from '$lib/assets/lara.png';
	import Head from '$lib/components/front/Head.svelte';
	import ProjectCard from '$lib/components/front/ProjectCard.svelte';
</script>

<Head title="Projects | Lara's corner of whimsy" />

<div class="container mx-auto flex flex-1 flex-col justify-center">
	<h1 class="text-4xl md:text-left text-center font-bold mb-6">Projects</h1>
	<div class="md:w-200 w-100 ml-1 md:ml0 grid md:grid-cols-2 grid-rows-2 gap-2">
		<ProjectCard
			title="protogen.social"
			description="Formerly a mastodon instance, you can now just use it to get a handle on bluesky"
			href="https://protogen.social"
			img={protogensocial}
			alt="Protogen.social logo"
		/>
		<ProjectCard
			title="RemoteAdminPlus"
			description="Wreck of an unfinished project but technically functional moderation tool for SCP Secret Laboratory, no proper logo for it yet"
			href="https://github.com/laraproto/RemoteAdminPlus"
			img={lara}
			alt="my pfp because remoteadminplus has no logo"
		/>
		<ProjectCard
			title="Wobble"
			description="Functional but somewhat rushed project, discord bot in a single executable file, dashboard and all, loosely inspired by Zeppelin, also no logo"
			href="https://github.com/laraproto/Wobble"
			img={lara}
			alt="my pfp because wobble has no logo"
		/>
	</div>
</div>
