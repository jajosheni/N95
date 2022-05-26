<script>
  import {createEventDispatcher} from 'svelte';
  import HeaderButton from '../components/HeaderButton.svelte';

  export let items;

  const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChange', item.name)}>
                <div class:active={item.active}>
                    <HeaderButton name={item.name}/>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .head {
        padding: 0;
        margin: 20px 0 15px -10px;
        grid-area: header;
        height: fit-content;
        height: -moz-fit-content;
        border-radius: var(--radius);
    }

    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
        padding-bottom: 8px;
    }
</style>
