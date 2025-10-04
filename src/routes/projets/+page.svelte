<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";

    const projets = [
        {
            title: "Todo App",
            description: "",
            tech: ["SvelteKit","TailwindCSS","JavaScript"],
            urlLive: "https://todo-app-demo.netlify.app",
            urlCode: "https://github.com/jescordova/todo-app",
            image: ""
        },
        {
            title: "Galerie d’images",
            description: "Un projet de galerie d’images avec filtres et animations.",
            tech: ["SvelteKit", "TailwindCSS"],
            urlLive: "#",
            urlCode: "#",
            image: ""
        }
    ]
</script>

<section class="py-16">
    <h1 class="text-4xl font-bold text-center mb-10">Mes projets</h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projets as projet}
            <ProjectCard 
                title= {projet.title}
                description= {projet.description}
                tech= {projet.tech}
                urlLive= {projet.urlLive}
                urlCode= {projet.urlCode}
                image= {projet.image}
            />
        {/each}
    </div>
</section>