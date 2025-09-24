<script>
    import Icons from "../Icons.svelte";
    import { contacts } from '$lib/js/icons';

    let { user } = $props();
</script>

<header>
    <div class="user flex justify-between items-center flex-col md:flex-row">
        <img 
            src={user.src} 
            alt="{user.first_name} {user.last_name}" 
            class="w-25 rounded-md border-4 border-double border-(--info) shadow-lg mx-auto md:mx-0"
        />
        <div class="info text-center md:text-right">
            <h1 class="text-3xl md:text-5xl">{user.first_name} <strong>{user.last_name}</strong></h1>
            <h2 class="text-xl md:text-3xl">{user.diploma}</h2>
            <div class="icons">
                {#each contacts as icon}
                    <Icons {...icon} />
                {/each}
            </div>
        </div>
    </div>
    <div class="my-4">
        <h3 class="text-xl">{user.presenting.title}</h3>
        <p class="text-justify">{@html user.presenting.description}</p>
    </div>
</header>