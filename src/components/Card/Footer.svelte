<script>
  export let cv;
  export let email;
</script>

<div class="bottom-buttons">
    <button class="btn download-cv" on:click={() => window.location.assign(cv.url)}>
        <span>CV</span>
        <img class="icon" src={cv.icon} alt="download cv">
    </button>

    <div class="splitter"></div>

    <button
            class="btn email-me"
            on:click={() => window.location.href = `mailto:${email.address}?subject=Hello`}
    >
        <span>e-mail</span>
        <img class="icon" src={email.icon} alt="send an email">
    </button>
</div>


<style>
    .bottom-buttons {
        border-top: solid 1px rgba(255, 255, 255, 0.5);
        position: absolute;
        bottom: 0;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center
    }

    .btn {
        display: inline-block;
        border: none;
        padding: 1rem 2rem;
        background: transparent;
        cursor: pointer;
        text-transform: uppercase;
        color: var(--text);
        font-family: Poppins, sans-serif;
        font-size: 0.95em;
        width: inherit;
    }

    .btn:hover {
        background-color: rgba(255, 255, 255, 0.3);
        background-blend-mode: screen
    }

    .download-cv {
        border-radius: 0 0 0 5px
    }

    .email-me {
        border-radius: 0 0 5px 0
    }

    .splitter {
        display: inline-block;
        margin: 0;
        padding: 0 1px;
        height: available;
        width: 1px;
        background: linear-gradient(to bottom right, white, transparent, transparent)
    }

    .icon {
        margin-left: 5px;
        width: 20px;
        height: 20px;
    }

    button > img,
    button > span {
        vertical-align: middle;
    }
</style>
