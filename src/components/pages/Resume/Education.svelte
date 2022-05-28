<script>
  export let education = {
    major: '',
    start: '',
    end: '',
    institute: '',
    description: ''
  };
</script>

<div class="education mt-2 mb-2">
    <div>
        <span class="duration">{education.start} - {education.end}</span>
    </div>
    <span class="block uppercase">{education.major}</span>
    <span class="block institute">{education.institute}</span>
    <div class="description">{education.description}</div>
</div>

<style>
    .education {
        min-height: 180px;
    }

    .education:last-of-type {
        margin-bottom: 0;
    }

    .duration {
        font-size: 13px;
        background-color: var(--primary);
        border-radius: var(--radius);
        padding: 1px 6px;
    }

    .institute {
        font-size: 12px;
        color: var(--dark-text)
    }

    .description {
        font-size: 0.9em;
    }
</style>
