<script>
  import {createEventDispatcher} from 'svelte';

  export let items = [];

  const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul class="uppercase">
        {#each items as item (item.name)}
            <li class:active={item.active} on:click={() => dispatch('tabChange', item.name)}>
                <img class="icon" src={item.icon} alt={item.pageTitle}>
                <span>{item.pageTitle}</span>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin: 15px 0;
        padding: 0;
    }

    ul {
        text-align: center;
        font-size: 0.75em;
        margin: 15px 0;
    }

    .icon {
        height: 24px;
        width: 24px;
    }

    li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 70px;
        width: 100%;
        padding: 5px 0;
    }

    li:hover, .active {
        color: var(--primary);
        background-color: var(--dark-background);
        background-blend-mode: screen
    }

</style>
