<script>
  import {createEventDispatcher} from 'svelte';

  export let items = [];

  const dispatch = createEventDispatcher();

  const handleClick = (tabName) => {
    dispatch('tabChange', tabName);

    document.getElementById('drawer-anchor').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

</script>

<div class="tabs">
    <ul class="uppercase">
        {#each items as item (item.name)}
            <li class:active={item.active} on:click={() => handleClick(item.name)}>
                <i class="mdi mdi-24px {item.icon} text-color"></i>
                <span>{item.pageTitle}</span>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin: 15px 0;
        user-select: none;
        -webkit-user-select: none;
    }

    ul {
        text-align: center;
        font-size: 0.75em;
        margin: 15px 0;
        display: flex;
        flex-direction: column;
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

    @media only screen and (max-width: 700px) {
        .tabs {
            margin: 0 15px;
        }

        ul {
            margin: 0;
            flex-direction: row;
        }
    }

</style>
