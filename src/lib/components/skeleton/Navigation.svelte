<script>
    import Icons from "../Icons.svelte";

    let { home, page } = $props();
</script>

<nav class="flex justify-between items-center capitalize mb-1">
    {#if page.name !== 'accueil'}
        <div class="flex items-center ">
            <Icons {...home}/>
            <i class="bx bx-chevron-right text-xl"></i>
            <span>{ page.name }</span>
        </div>
    {:else}
        <div class="flex items-center gap-1">
            <Icons {...home} />
            <span>{page.name}</span>
        </div>
    {/if}
    <span class="uppercase font-[500] text-(--border)">{page.section} yasta</span>
</nav>