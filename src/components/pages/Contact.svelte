<script>
  import contact from '../../../resources/subpages/contact';
  import Fields from './components/Fields.svelte';
  import Card from '../../shared/Card.svelte';

  const fields = [
    {name: 'address', value: contact.address},
    {name: 'email', value: contact.email},
    {name: 'hours', value: contact.hours},
    {name: 'tel', value: contact.tel},
  ];
</script>

<div class="contact-container">
    <span class="block bold mb-2">Drop a Line</span>

    <div class="map mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95871.48845589603!2d19.747783295014003!3d41.33096097063582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTirana!5e0!3m2!1sen!2s!4v1601648127003!5m2!1sen!2s"></iframe>
    </div>

    <div class="mb-3">
        <Card>
            <Fields {fields}/>
        </Card>
    </div>
</div>

<style>
    .map > iframe {
        width: 100%;
        height: 30vh;
        border: 0;
    }
</style>
