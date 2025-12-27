<script lang="ts">
	const {
		img,
		alt,
		title,
		description,
		href
	}: { img: string; alt: string; title: string; description: string; href: string } = $props();
</script>

<a class="rounded-lg shadow-md space-y-2 overflow-hidden bg-secondary text-current" {href}>
	<img class="h-48 w-full object-cover" src={img} {alt} />
	<div class="space-y-1 pb-4 px-4">
		<h4 class="text-2xl font-semibold truncate">{title}</h4>
		<p>{description}</p>
	</div>
</a>
