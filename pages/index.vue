<template>
  <div>
    <section-introduction />
    <section-about />
    <section-skills />
    <section-contact />
  </div>
</template>

<script>
import SectionAbout from "@/components/section-about";
import SectionContact from "@/components/section-contact";
import SectionIntroduction from "@/components/section-introduction";
import SectionSkills from "@/components/section-skills";

export default {
  components: {
    SectionAbout,
    SectionContact,
    SectionIntroduction,
    SectionSkills,
  },
};
</script>
