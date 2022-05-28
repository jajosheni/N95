<script>
  import about from '../../resources/subpages/about';
  import Fields from '../components/pages/Fields.svelte';
  import Quote from '../components/pages/Quote.svelte';
  import Hobby from '../components/pages/Hobby.svelte';

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

    <div class="mb-3">
        <Fields {fields}/>
    </div>

    <Quote quote="{about.quote}"/>

    {#if !!about.hobbies}
        <span class="block mt-3 bold mb-3">Hobbies</span>
        <div>
            {#each about.hobbies as hobby}
                <div class="mb-1">
                    <Hobby {hobby}/>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .description {
        color: var(--dim-text);
        font-family: Poppins, sans-serif;
        font-weight: 300;
        font-size: 0.95em;
    }
</style>

