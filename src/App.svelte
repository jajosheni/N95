<script>
  import Background from './components/Background.svelte';
  import Header from './components/Header.svelte';
  import Profile from './pages/Profile.svelte';
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

<main>
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
        max-width: 1400px;
        min-width: 360px;
    }

    .container {
        padding: 20px;
        display: grid;
        grid-template-columns:90px 10px 0.8fr 1.2fr;
        grid-template-areas:"header separator profile drawer"
    }

    @media only screen and (max-width: 1130px) and (min-width: 700px) {
        main {
            padding: 1vh 2vw;
            max-width: 900px
        }

        .container {
            padding: 20px;
            display: grid;
            grid-template-columns: 90px 10px auto;
            grid-template-rows: auto auto;
            grid-template-areas: "header separator profile"
                                 "... ... drawer"
        }
    }

    @media only screen and (max-width: 700px) {
        main {
            padding: 0 10px;
            height: 100vh;
            max-width: 100%
        }

        .container {
            padding: 0;
            display: grid;
            grid-template-columns:auto;
            grid-template-rows:90px 10px auto auto;
            grid-template-areas:"header" "separator" "profile" "drawer"
        }
    }
</style>

