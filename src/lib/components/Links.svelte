<script>
    let { project } = $props();
</script>

<div class="link">
    <a href={project.href} class="text-base text-(--info)">{project.name} :</a>
    <span>avec - {project.apps}</span>
</div>
<span>[ {project.year} ]</span>