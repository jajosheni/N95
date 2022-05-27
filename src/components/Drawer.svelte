<script>
  import About from './pages/About.svelte';
  import Resume from './pages/Resume.svelte';
  import Services from './pages/Services.svelte';
  import Contact from './pages/Contact.svelte';
  import TabStore from '../stores/TabStore';

  const components = {
    'about': About,
    'resume': Resume,
    'services': Services,
    'contact': Contact,
  };
</script>

<div class="grid-item-drawer mb-1 mt-2">
    <a id="info-anchor"></a>

    {#each $TabStore as item (item.name)}
        {#if item.active}
            <svelte:component this={components[item.name]}/>
        {/if}
    {/each}
</div>

<style>
    .grid-item-drawer {
        grid-area: drawer;
        position: relative;
        background: var(--card-background);
        width: 100%;
        height: 67vh;
        box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2) inset;
        border-radius: 0 var(--radius) var(--radius) 0;
        overflow-y: scroll;
        padding-bottom: 10px;
    }
</style>
