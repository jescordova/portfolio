<script>
    import Header from "$lib/components/skeleton/Header.svelte";
    import Navigation from "$lib/components/skeleton/Navigation.svelte";
    import Links from "$lib/components/Links.svelte";

    import { user } from '$lib/js/infos';
    import { home } from '$lib/js/icons';
    import { projects } from '$lib/js/links';

    const page = {
        name: `${home.label.toLowerCase()}`,
        section: 'portfolio'
    }
</script>

<Navigation {home} {page} />

<div id="container">
    <Header { user } />
    <main>
        <section>
            <h3 class="text-xl">Mes Projets</h3>
            <ul class="list-disc ml-7">
                {#each projects as project}
                    <li class="flex items-center justify-between"><Links {project} /></li>
                {/each}
            </ul>
        </section>
    </main>
</div>

