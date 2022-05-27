<script>
  import resume from '../../resources/subpages/resume';
  import Section from '../components/pages/Resume/Section.svelte';
  import Card from '../shared/Card.svelte';
  import Experience from '../components/pages/Resume/Experience.svelte';
  import Education from '../components/pages/Resume/Education.svelte';
  import Award from '../components/pages/Resume/Award.svelte';
</script>

<div class="resume-container">
    <section>
        <Card>
            <Section item={resume.experience}>
                <div>
                    {#each resume.experience.data as experience}
                        <Experience {experience}/>
                    {/each}
                </div>
            </Section>
        </Card>
    </section>

    <section>
        <Card>
            <Section item={resume.education}>
                <div>
                    {#each resume.education.data as education}
                        <Education {education}/>
                    {/each}
                </div>
            </Section>
        </Card>
    </section>

    <section>
        <Card>
            <Section item={resume.certificatesAndAwards}>
                <div>
                    {#each resume.certificatesAndAwards.data as award}
                        <Award {award}/>
                    {/each}
                </div>
            </Section>
        </Card>
    </section>

    <section>
        <Card>
            <Section item={resume.certificatesAndAwards}>
                <div>
                    {#each resume.certificatesAndAwards.data as award}
                        <Award {award}/>
                    {/each}
                </div>
            </Section>
        </Card>
    </section>
</div>

<style>
    section {
        width: calc(50% - 5px);
    }

    .resume-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
