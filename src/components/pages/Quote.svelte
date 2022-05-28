<script>
  export let quote = '';
</script>

<div class="quote">
    <span class="left mt-1 primary-color" style="margin-left: -10px">"</span>
    <blockquote>{quote}</blockquote>
    <span class="right mt-3 mr-1 primary-color">"</span>
</div>

<style>
    .quote {
        text-align: center;
        margin: 20px auto;
    }

    .quote > span {
        font-size: 4em;
        font-style: italic;
        line-height: 0
    }

    @media only screen and (max-width: 700px) {
        .quote > span {
            font-size: 3em;
        }
    }
</style>
