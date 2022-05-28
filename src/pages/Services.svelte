<script>
  import services from '../../resources/subpages/services';
  import Product from '../components/pages/Product.svelte';
</script>


<span class="block bold mb-2">{services.header}</span>
<div class="services-container">
    {#each services.products as product}
        <div class="product">
            <Product {product}/>
        </div>
    {/each}
</div>

<style>
    .product {
        width: calc(50% - 15px);
    }

    .services-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
    }


    @media only screen and (max-width: 850px) {
        .product {
            width: 100%;
        }

        .services-container {
            column-gap: 0;
            row-gap: 10px;
        }
    }
</style>
