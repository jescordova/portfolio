<script>
    import Header from "$lib/components/skeleton/Header.svelte";
    import { user } from '$lib/js/infos';
    
</script>

<div id="container">
    <Header { user } />
    <main>
        <h1>Welcome to SvelteKit</h1>
        <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
    </main>
</div>

