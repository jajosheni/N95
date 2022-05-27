<script>
  export let links = [];
</script>

<ul class="social-media mt-1">
    {#each links as link}
        <li>
            <a href={link.url} target="_blank">
                <img src={link.icon} alt={link.title}>
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
        padding: 7px 0;
    }

    .social-media > li:hover {
        background-color: #5196fd;
        background-blend-mode: screen;
        border-radius: var(--radius)
    }
</style>
