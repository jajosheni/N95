<script>
  import Tabs from '../components/Tabs.svelte';
  import TabStore from '../stores/TabStore';

  const handleTabChange = (e) => {
    const name = e.detail;

    TabStore.update(tabItems => {
      let clonedTabs = [...tabItems];

      clonedTabs.forEach(tab => {
        tab.active = tab.name === name;
      });

      return clonedTabs;
    });
  };
</script>

<div class="grid-item-header mt-2">
    <Tabs items={$TabStore} on:tabChange={handleTabChange}/>
</div>

<style>
    .grid-item-header {
        grid-area: header;
        border-radius: var(--radius);
        background: var(--card-background);
        width: 100%;
        height: fit-content;
    }

    @media only screen and (max-width: 1130px) and (min-width: 700px) {
        .grid-item-header {
            position: fixed;
            max-width: 90px;
        }
    }

    @media only screen and (max-width: 700px) {
        .grid-item-header {
            margin-top: 12px;
            max-height: 90px;
            position: fixed;
            z-index: 100;
            max-width: calc(100% - 20px);
        }
    }
</style>
