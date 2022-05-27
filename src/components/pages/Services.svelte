<script>
  import services from '../../../resources/subpages/services';
  import Product from './components/Product.svelte';
</script>


<span class="block bold mb-2">{services.header}</span>
<div class="services-container">
    {#each services.products as product}
        <div class="product mb-3">
            <Product {product}/>
        </div>
    {/each}
</div>

<style>
    .product {
        width: 48%;
    }

    .services-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
