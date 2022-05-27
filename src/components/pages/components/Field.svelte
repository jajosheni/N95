<script>
  export let field = {
    name: '',
    value: ''
  };
</script>

<div class="field">
    <span class="mr-2">{field.name}:</span>
    <span class="right">{field.value}</span>
</div>

<style>
    .field {
        min-width: 200px;
    }
</style>
