<script>
  import card from '../../resources/card';
  import Links from './Card/Links.svelte';
  import Footer from './Card/Footer.svelte';
</script>

<div class="grid-item-profile">
    <div class="profile-content">
        <div class="banner-container">
            <img class="banner" src={card.coverImage} alt="banner">
        </div>
        <div class="profile-pic-container">
            <img src={card.profileImage} alt="profile pic" class="profile-pic">
        </div>

        <div class="full-name">
            <span id="full-name">{card.fullName}</span>
        </div>

        <div class="subtitle">
            <span id="profession">{card.profession}</span>
        </div>

        <Links links={card.links}/>

        <Footer cv={card.cv} email={card.email}/>
    </div>
</div>

<style>
    .grid-item-profile {
        grid-area: profile;
        height: 72vh;
        min-height: 450px;
        box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
        position: relative;
        background: var(--card-background);
        width: 100%
    }

    .banner-container {
        width: 100%;
        height: 35vh;
    }

    .banner {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: var(--radius);
    }

    .profile-pic-container {
        width: 140px;
        height: 140px;
        margin: -85px auto 20px
    }

    .profile-pic {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        border: solid 3px var(--card-background);
    }

    .full-name {
        text-align: center;
        font-size: 30px;
    }

    .subtitle {
        text-align: center;
        font-size: 0.95em;
    }

    .subtitle > span {
        display: block;
        color: var(--primary)
    }
</style>
