<script>
  export let links = [];
</script>

<ul class="social-media mt-1">
    {#each links as link}
            <a class="mr-1" href={link.url} target="_blank">
                <i class="mdi mdi-24px {link.icon} text-color"></i>
            </a>
    {/each}
</ul>

<style>
    .social-media {
        text-align: center
    }

    .social-media > a {
        display: inline-block;
        padding: 0 3px;
    }

    .social-media > a:hover {
        background-color: var(--primary);
        background-blend-mode: screen;
        border-radius: var(--radius)
    }
</style>
