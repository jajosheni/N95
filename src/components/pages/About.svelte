<script>
  import about from '../../../resources/subpages/about';
  import Fields from './components/Fields.svelte';
  import Quote from './components/Quote.svelte';
  import Hobby from './components/Hobby.svelte';

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

    <span class="block bold">{about.greeting}</span>
    <p class="description mb-3">{about.description}</p>

    <Fields {fields}/>

    <Quote quote="{about.quote}"/>

    <span class="block mt-3 bold mb-3">Hobbies</span>
    <div>
        {#each about.hobbies as hobby}
            <div class="mb-1">
                <Hobby {hobby}/>
            </div>
        {/each}
    </div>
</div>

<style>
    .description {
        color: var(--dim-text);
        font-family: Poppins, sans-serif;
        font-weight: 300;
        font-size: 0.95em;
    }
</style>

