<template>
  <main class="min-h-screen from-primary to-secondary bg-gradient-to-t">
    <div class="relative pt-20 pb-20 z-20 min-h-screen flex">
      <FormSignup class="m-auto flex-1 max-w-[390px]" />
    </div>
  </main>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import FormSignup from '@/components/FormSignup.vue';

@Options({
  components: {
    FormSignup,
  },
})

export default class PageHome extends Vue {
}
</script>
