<script>
  import Card from '../../../shared/Card.svelte';

  export let hobby = {
    title: '',
    image: '',
    description: ''
  };
</script>

<Card>
    <div class="hobby-container">
        <img class="icon mr-1" src={hobby.image} alt={hobby.title}>
        {hobby.title} - {hobby.description}
    </div>
</Card>

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
