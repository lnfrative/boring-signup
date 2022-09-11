<template>
  <Home />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from '@/components/Home.vue';
import './styles/index.css';

@Options({
  components: {
    Home,
  },
})

export default class App extends Vue {}
</script>
