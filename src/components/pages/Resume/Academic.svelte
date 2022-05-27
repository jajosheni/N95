<script>
  export let academic = {
    title: '',
    date: '',
    issuedBy: '',
    description: ''
  };
</script>

<div class="academic mt-2 mb-2">
    <div>
        <span class="duration">{academic.date}</span>
    </div>
    <span class="block uppercase">{academic.title}</span>
    <span class="block issued-by">{academic.issuedBy}</span>
    <div class="description">{academic.description}</div>
</div>

<style>
    .academic {
        min-height: 180px;
    }

    .academic:last-of-type {
        margin-bottom: 0;
    }

    .duration {
        font-size: 13px;
        background-color: var(--primary);
        border-radius: var(--radius);
        padding: 1px 6px;
    }

    .issued-by {
        font-size: 12px;
        color: var(--dark-text)
    }

    .description {
        font-size: 0.9em;
    }
</style>
