<script>
  import Background from './components/Background.svelte';
  import Header from './components/Header.svelte';
  import Profile from './components/Profile.svelte';
  import Drawer from './components/Drawer.svelte';
  import {title, meta} from '../resources/miscellaneous';
</script>

<svelte:head>
    <title>{title}</title>

    {#each meta as m (m.name)}
        <meta name={m.name} content={m.content}>
    {/each}
</svelte:head>

<Background/>

<main role="main">
    <div class="container">
        <Header/>
        <Profile/>
        <Drawer/>
    </div>
</main>

<style>
    main {
        margin: 0 auto;
        padding: 10vh 2vw;
        width: 100%;
        height: 85vh;
        max-width: 1400px
    }

    .container {
        padding: 20px;
        display: grid;
        grid-template-columns:90px 10px 0.8fr 1.2fr;
        grid-template-areas:"header separator profile drawer"
    }
</style>

