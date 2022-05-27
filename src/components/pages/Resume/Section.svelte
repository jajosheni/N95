<script>
  export let item = {
    title: '',
    icon: ''
  };
</script>

<div>
    <div class="section-title">
        <img class="s-50 mr-1" src={item.icon} alt={item.title}>
        <span class="uppercase">{item.title}</span>
    </div>
    <slot></slot>
</div>

<style>
    .section-title > img,
    .section-title > span {
        vertical-align: middle;
    }
</style>
