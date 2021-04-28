<template>
  <div class="feedback_wiget" :class="{ focused: isShown }">
    <div class="forms">
      <form class="form" ref="form3">
        <ConsultForm />
      </form>
    </div>
  </div>
</template>

<script>
import ConsultForm from "@/components/feedback/consultForm";
export default {
  name: "FeedbackIndex",
  components: { ConsultForm },
  data: () => ({
    isShown: false
  })
};
</script>
