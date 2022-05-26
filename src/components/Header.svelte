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

<div class="grid-item-header">
    <Tabs items={$TabStore} on:tabChange={handleTabChange}/>
</div>

<style>
    .grid-item-header {
        margin-top: 20px;
        grid-area: header;
        border-radius: var(--radius);
        background: var(--card-background);
        width: 100%;
        height: fit-content;
    }
</style>
