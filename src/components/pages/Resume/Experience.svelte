<script>
  export let experience = {
    title: '',
    start: '',
    end: '',
    company: '',
    description: ''
  };
</script>

<div class="experience mt-2 mb-2">
    <div>
        <span class="duration">{experience.start} - {experience.end}</span>
    </div>
    <span class="block uppercase">{experience.title}</span>
    <span class="block company">{experience.company}</span>
    <div class="description">{experience.description}</div>
</div>

<style>
    .experience {
        min-height: 180px;
    }

    .experience:last-of-type {
        margin-bottom: 0;
    }

    .duration {
        font-size: 13px;
        background-color: var(--primary);
        border-radius: var(--radius);
        padding: 1px 6px;
    }

    .company {
        font-size: 12px;
        color: var(--dark-text)
    }

    .description {
        font-size: 0.9em;
    }
</style>
