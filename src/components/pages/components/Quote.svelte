<script>
  export let quote;
</script>

<div class="quote">
    <span class="left mt-2" style="margin-left: -10px">"</span>
    <blockquote>{quote}</blockquote>
    <span class="right mt-3 mr-1">"</span>
</div>

<style>
    .quote {
        text-align: center;
        margin: 20px auto;
    }

    .quote > span {
        color: var(--primary);
        font-size: 4em;
        font-style: italic;
        line-height: 0
    }
</style>
