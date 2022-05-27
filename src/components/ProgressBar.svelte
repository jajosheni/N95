<script>
  export let type = 'line';
  export let level = 0;

  $: percentage = (level < 0 || level > 100) ? 50 : level;
</script>

{#if type === 'line'}
    <div class="progress mt-1">
        <div class="percentage" style="width:{percentage}%;"></div>
    </div>
{:else if type === 'dots'}
    <div class="dots mt-1">
        <div class="dots-percentage" style="width:{percentage}%;"></div>
    </div>
{/if}

<style>
    .progress, .percentage {
        width: 100%;
        height: var(--radius);
        border-radius: var(--radius);
        background-color: var(--background);
    }

    .percentage {
        background-color: var(--primary);
    }
</style>
