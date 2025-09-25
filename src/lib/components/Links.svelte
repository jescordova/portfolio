<script>
    let { project } = $props();
</script>

<div class="link flex flex-col md:flex-row">
    <a href={project.href} class="text-base text-(--info)">{project.name} :</a>
    <span>{project.apps}</span>
</div>
<span>[ {project.year} ]</span>