<template>
  <div>
    <div class="top">

    </div>
    <HeroSection />
    <SectionOffer />
    <hr />
    <FeatureSection />
    <div class="container">
      <PartnersWiget />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HeroSection from "@/components/hero";
import SectionOffer from "@/components/offer";
import FeatureSection from "@/components/feature";
import PartnersWiget from "@/components/slider";
export default {
  name: "home",
  components: {
    PartnersWiget,
    FeatureSection,
    SectionOffer,
    HeroSection
  }
};
</script>
<style>

</style>
