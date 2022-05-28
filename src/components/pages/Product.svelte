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
            <i class="mdi mdi-48px {product.icon} mr-1 primary-color"></i>
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

    .product-title > i,
    .product-title > span {
        vertical-align: middle;
    }
</style>

