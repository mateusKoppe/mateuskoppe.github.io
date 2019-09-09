<template>
  <div>
    <section-introduction/>
    <section-about/>
    <section-skills/>
    <section-projects
      :projects="projects"
    />
    <section-contact/>
  </div>
</template>

<script>
import SectionAbout from "@/components/section-about"
import SectionContact from "@/components/section-contact"
import SectionIntroduction from "@/components/section-introduction"
import SectionSkills from "@/components/section-skills"
import SectionProjects from "@/components/section-projects"

export default {
  components: {
    SectionAbout,
    SectionContact,
    SectionIntroduction,
    SectionSkills,
    SectionProjects
  },

  async asyncData ({ store }) {
    const res = await store.dispatch('project/loadList')
    return {
      projects: store.state.project.list
    }
  },
}
</script>
