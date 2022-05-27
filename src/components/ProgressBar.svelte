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
    <div class="dots-container mt-1">
        <div class="dots-percentage" style="width:{percentage}%;"></div>
        <div class="dots">
            {#each Array(12) as _}
                <div></div>
            {/each}
        </div>
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

    .dots-container {
        position: relative;
    }

    .dots {
        display: flex;
        justify-content: space-between;
    }

    .dots > div {
        width: 11px;
        height: 11px;
        background-color: var(--background);
        border-radius: var(--radius);
    }

    .dots-percentage {
        height: 10px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--primary);
        border-radius: var(--radius);
    }
</style>
