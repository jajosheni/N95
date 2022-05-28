<script>
  import contact from '../../resources/subpages/contact';
  import Fields from '../components/pages/Fields.svelte';
  import Card from '../shared/Card.svelte';

  const fields = [
    {name: 'address', value: contact.address},
    {name: 'email', value: contact.email},
    {name: 'hours', value: contact.hours},
    {name: 'tel', value: contact.tel},
  ];
</script>

<div class="contact-container">
    <span class="block bold mb-2">{contact.header}</span>

    <div class="map mb-3">
        {@html contact.mapsIframe}
    </div>

    <div class="mb-3">
        <Card>
            <Fields {fields}/>
        </Card>
    </div>
</div>

<style>
    :global(.map > iframe) {
        width: 100%;
        height: 35vh;
        border: 0;
    }
</style>
