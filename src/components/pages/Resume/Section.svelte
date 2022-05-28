<script>
  export let item = {
    title: '',
    icon: ''
  };
</script>

<div>
    <div class="section-title">
        <i class="mdi mdi-48px {item.icon} mr-1 primary-color"></i>
        <span class="uppercase">{item.title}</span>
    </div>
    <slot></slot>
</div>

<style>
    .section-title {
        display: flex;
        align-items: center;
    }
</style>
