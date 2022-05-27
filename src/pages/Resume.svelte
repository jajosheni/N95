<script>
  import resume from '../../resources/subpages/resume';
  import Section from '../components/pages/Resume/Section.svelte';
  import Card from '../shared/Card.svelte';
  import Experience from '../components/pages/Resume/Experience.svelte';
  import Education from '../components/pages/Resume/Education.svelte';
</script>

<div class="resume-container">
    <div class="section">
        <Card>
            <Section item={resume.experience}>
                <div>
                    {#each resume.experience.data as experience}
                        <Experience {experience}/>
                    {/each}
                </div>
            </Section>
        </Card>
    </div>

    <div class="section">
        <Card>
            <Section item={resume.education}>
                <div>
                    {#each resume.education.data as education}
                        <Education {education}/>
                    {/each}
                </div>
            </Section>
        </Card>
    </div>
</div>

<style>
    .section {
        width: 49.5%;
    }

    .resume-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
