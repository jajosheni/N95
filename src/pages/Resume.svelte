<script>
  import resume from '../../resources/subpages/resume';
  import Section from '../components/pages/Resume/Section.svelte';
  import Card from '../shared/Card.svelte';
  import Experience from '../components/pages/Resume/Experience.svelte';
  import Education from '../components/pages/Resume/Education.svelte';
  import Award from '../components/pages/Resume/Award.svelte';
  import Academic from '../components/pages/Resume/Academic.svelte';
  import ProgressBar from '../components/ProgressBar.svelte';
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
            <Section item={resume.academic}>
                <div>
                    {#each resume.academic.data as academic}
                        <Academic {academic}/>
                    {/each}
                </div>
            </Section>
        </Card>
    </section>

    <span class="block bold mt-2 mb-2 " style="width: 100%">Skills</span>

    {#each resume.skills as skillData}
        <section>
            <Card>
                <Section item={skillData}>
                    <div>
                        {#each skillData.items as skill}
                            <div class="mt-2">
                                <span>{skill.title}</span>
                                <ProgressBar type={skillData.barType} level={skill.level}/>
                            </div>
                        {/each}
                    </div>
                </Section>
            </Card>
        </section>
    {/each}
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
