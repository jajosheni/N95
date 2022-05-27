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
        <img class="s-50 mr-1" src={hobby.image} alt={hobby.title}>
        {hobby.title} - {hobby.description}
    </div>
</Card>

<style>
    .hobby-container {
        display: flex;
        justify-content: space-between;
    }
</style>
