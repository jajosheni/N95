<script>
  export let cv = '';
  export let email = '';
</script>

<div class="bottom-buttons">
    <button class="btn download-cv uppercase" on:click={() => window.location.assign(cv.url)}>
        <span>CV</span>
        <i class="mdi mdi-18px ml-1 {cv.icon} text-color"></i>
    </button>

    <div class="splitter"></div>

    <button
            class="btn email-me uppercase"
            on:click={() => window.location.href = `mailto:${email.address}?subject=Hello`}
    >
        <span>e-mail</span>
        <i class="mdi mdi-18px ml-1 {email.icon} text-color"></i>
    </button>
</div>


<style>
    .bottom-buttons {
        border-top: solid 1px var(--white-overlay);
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center
    }

    .btn {
        display: inline-block;
        border: none;
        padding: 1rem 2rem;
        background: transparent;
        cursor: pointer;
        color: var(--text);
        font-family: var(--font-family);
        font-size: 0.95em;
        width: inherit;
    }

    .btn:hover {
        background-color: var(--light-white-overlay);
        background-blend-mode: screen
    }

    .download-cv {
        border-radius: 0 0 0 var(--radius)
    }

    .email-me {
        border-radius: 0 0 var(--radius) 0
    }

    .splitter {
        display: inline-block;
        padding: 0 1px;
        height: available;
        width: 1px;
        background: linear-gradient(to bottom right, white, transparent, transparent)
    }

    button {
        display: flex;
        align-items: center;
    }
</style>
