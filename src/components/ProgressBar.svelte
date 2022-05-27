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
        <div class="dots">
            {#each Array(20) as _, i}
                <div class="dot" class:active={(level) > (5 * i)}></div>
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

    .dot {
        width: var(--radius);
        height: var(--radius);
        background-color: var(--background);
        border-radius: var(--radius);
    }

    .active {
        background-color: var(--primary);
    }
</style>
