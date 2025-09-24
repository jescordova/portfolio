<script>
    import Icons from '../Icons.svelte';

    let { social } = $props();
</script>

<footer class="items-center grid md:grid-cols-2 mt-2">
    <p class="text-center md:text-start">&copy; Tous les droits réservés | <a href="/" class="capitalize text-(--info)">yasta web</a> 2025</p>
    <div class="text-center md:text-end">
        {#each social as icon}
            <Icons {...icon} />
        {/each}
    </div>
</footer>