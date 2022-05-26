<script>
  import HeaderButton from '../shared/HeaderButton.svelte';
  import subpages from '../../resources/subpages';
</script>

<div class="head">
    <ul>
        {#each subpages as subpage}
            <li>
                <HeaderButton name={subpage.name}/>
            <li>
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
</style>
