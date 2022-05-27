<script>
  import Field from './Field.svelte';

  export let fields = [];
</script>

<div class="fields">
    {#each fields as field, i}
        {#if i % 2 === 0}
            <div class="field-group mr-1">
                <Field {field}/>
                <Field field={fields[i + 1]}/>
            </div>
        {/if}
    {/each}
</div>

<style>
    .fields {
        width: 100%;
        text-transform: uppercase;
        font-size: 0.9em;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .field-group:last-of-type {
        margin-right: 0;
    }
</style>
