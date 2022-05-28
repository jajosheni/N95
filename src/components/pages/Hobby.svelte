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
        <i class="mdi mdi-48px {hobby.icon} primary-color mr-1"></i>
        {hobby.title} - {hobby.description}
    </div>
</Card>

<style>
    .hobby-container {
        display: flex;
        justify-content: space-between;
    }
</style>
