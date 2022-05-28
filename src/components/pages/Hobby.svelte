<script>
  import Card from '../../shared/Card.svelte';

  export let hobby = {
    title: '',
    icon: '',
    description: ''
  };
</script>

<Card>
    <div class="hobby-container">
        <img class="s-50 mr-1" src={hobby.icon} alt={hobby.title}>
        {hobby.title} - {hobby.description}
    </div>
</Card>

<style>
    .hobby-container {
        display: flex;
        justify-content: space-between;
    }
</style>
