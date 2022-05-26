<script>
  import Tabs from '../shared/Tabs.svelte';
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

<div class="head">
    <Tabs items={$TabStore} on:tabChange={handleTabChange}/>
</div>

<style>
</style>
