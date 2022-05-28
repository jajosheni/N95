<script>
  export let links = [];
</script>

<ul class="social-media mt-1">
    {#each links as link}
        <li class="mr-1">
            <a href={link.url} target="_blank">
                <i class="mdi mdi-24px {link.icon} mdi-light"></i>
            </a>
        </li>
    {/each}
</ul>

<style>
    .social-media {
        text-align: center
    }

    .social-media > li {
        margin: 0 1px;
        display: inline-block;
        height: 36px;
        width: 36px;
        padding: 6px;
    }

    .social-media > li:hover {
        background-color: var(--primary);
        background-blend-mode: screen;
        border-radius: var(--radius)
    }
</style>
