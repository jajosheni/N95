<script>
  import about from '../../../resources/subpages/about';
  import Fields from './components/Fields.svelte';

  const fields = [
    {
      name: 'age',
      value: (new Date()).getFullYear() - about.birthYear || 2000
    },
    {name: 'residence', value: about.residence},
    {name: 'freelance', value: about.freelance},
    {name: 'address', value: about.address}
  ];
</script>

<div class="about-container">

    <span class="block greeting">{about.greeting}</span>
    <p class="description mb-2">{about.description}</p>

    <Fields {fields}/>

    <div class="quote">
        <span class="left mt-2" style="margin-left: -10px">"</span>
        <blockquote>{about.quote}</blockquote>
        <span class="right mt-3 mr-1">"</span>
    </div>

</div>

<style>
    .about-container {
        margin: 30px;
    }

    .greeting {
        font-weight: 600;
    }

    .description {
        color: var(--dim-text);
        font-family: Poppins, sans-serif;
        font-weight: 300;
        font-size: 0.95em;
    }

    .quote {
        text-align: center;
        margin: 20px auto;
    }

    .quote > span {
        color: var(--primary);
        font-size: 4em;
        font-style: italic;
        line-height: 0
    }
</style>

