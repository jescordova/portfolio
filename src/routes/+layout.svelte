<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jesús Córdova - Développeur Web</title>
	<meta name="description" content="Portfolio de Jesús Córdova - Développeur Web avec svelteKit et TailwindCSS.">
  	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:title" content="Jesús Córdova — Développeur Web" />
  	<meta property="og:description" content="Portfolio et projets web." />
</svelte:head>

<div class="min-h-screen flex flex-col font-sans">
	<Header/>
	<main class="flex-grow container mx-auto p-4">
		{@render children?.()}
	</main>
	<Footer/>
</div>
