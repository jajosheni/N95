<script>
  export let field = {
    name: '',
    value: ''
  };
</script>

<div class="field">
    <span class="mr-2">{field.name}:</span>


    <span class="right">
        {#if field.name === 'email'}
            <a class="lowercase" href="mailto:{field.value}">{field.value}</a>
        {:else if field.name === 'tel'}
            <a href="tel:{field.value}">{field.value}</a>
        {:else}
            {field.value}
        {/if}
    </span>
</div>

<style>
    .field {
        min-width: 200px;
    }
</style>
