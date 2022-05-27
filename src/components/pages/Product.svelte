<script>
  import Card from '../../shared/Card.svelte';

  export let product = {
    title: '',
    icon: '',
    description: ''
  };
</script>

<Card>
    <div class="container">
        <div class="product-title mb-2">
            <img class="s-50 mr-1" src={product.icon} alt={product.title}>
            <span class="uppercase">{product.title}</span>
        </div>
        <span>{product.description}</span>
    </div>
</Card>

<style>
    .container {
        width: 100%;
        min-height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product-title > img,
    .product-title > span {
        vertical-align: middle;
    }
</style>

