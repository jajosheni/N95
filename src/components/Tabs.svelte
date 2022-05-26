<script>
  import {createEventDispatcher} from 'svelte';

  export let items;

  const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li class:active={item.active} on:click={() => dispatch('tabChange', item.name)}>
                <img class="icon" src={item.icon} alt={item.name}>
                {item.name}
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
        text-transform: uppercase;
        text-align: center;
        font-size: 0.75em;
        color: var(--text)
    }

    li {
        list-style: none;
        display: block;
        height: 70px;
        width: 100%;
        padding-top: 44px
    }

    li:hover, .active {
        color: var(--primary);
        background-color: var(--dark-background);
        background-blend-mode: screen
    }

    li::after {
        display: block;
        content: " ";
        height: 1px;
        background: linear-gradient(to left, var(--text), var(--text), transparent)
    }
</style>
