<script>
    export let title;
    export let description;
    export let tech = []; // tableau de strings
    export let urlLive;
    export let urlCode;
    export let image;
</script>

<div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
    {#if image}
        <img src={image} alt={"Aperçu de " + title} class="w-full h-48 object-cover">
    {/if}
    <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{title}</h3>
        <p class="text-gray-600 mb-4">{description}</p>

        <div class="mb-4 flex flex-wrap gap-2">
            {#each tech as t}
                <span class="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">{t}</span>
            {/each}
        </div>

        <div class="flex space-x-4">
            {#if urlLive}
                <a href={urlLive} target="_blank" class="text-blue-600 hover:underline">Live</a>
            {/if}
            {#if urlCode}
                <a href={urlCode} target="_blank" class="text-blue-600 hover:underline">Code</a>
            {/if}
        </div>
    </div>
</div>