<script>
  import Card from '../../../shared/Card.svelte';

  export let hobby = {
    title: '',
    image: '',
    description: ''
  };
</script>

<div class="mb-1">
<Card>
    <div class="hobby-container">
        <img class="icon mr-1" src={hobby.image} alt={hobby.title}>
        {hobby.title} - {hobby.description}
    </div>
</Card>
</div>

<style>
    .hobby-container {
        display: flex;
        justify-content: space-between;
    }

    .icon {
        width: 50px;
        height: 50px;
    }
</style>
