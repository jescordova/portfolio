<script>
    let {...icon} = $props();
</script>

<a  class="text-2xl text-(--info) cursor-pointer"
    href={icon.href}     
    aria-label={icon.label}
    target={icon.target}
    title={icon.label}
><i class={icon.name}></i></a>

<style>
    a:hover { transform: translateY(-2px); }
</style>