<template>
  <form @submit="handleSubmit" class="bg-black rounded-xl shadow-primary min-h-[600px] p-10">
    <h2 class="text-primary text-3xl font-semibold text-center mb-10">
      Signup
    </h2>

    <div class="text-white text-lg mb-10">
      <label class="block mb-5" for="name">
        <div class="text-md mb-1 text-primary">Name</div>
        <input
          v-model="name"
          type="text"
          name="name"
          placeholder="Adam Smith"
          class="
              outline-none
              bg-transparent
              border-content
              border
              rounded-lg
              p-2.5
              w-full
            "
        />
      </label>

      <label class="block mb-5" for="email">
        <div class="text-md mb-1 text-primary">Email</div>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          class="
              outline-none
              bg-transparent
              border-content
              border
              rounded-lg
              p-2.5
              w-full
            "
        />
      </label>

      <label class="block mb-5" for="birthday">
        <div class="text-md mb-1 text-primary">Birthday</div>
        <input
          v-model="birthday"
          type="date"
          name="birthday"
          class="
              outline-none
              bg-transparent
              border-content
              border
              rounded-lg
              p-2.5
              w-full
            "
        />
      </label>

      <label for="color">
        <div class="text-md mb-1 text-primary">Favorite Color</div>
        <input
          v-model="color"
          type="text"
          name="color"
          placeholder="Blue"
          class="
              outline-none
              bg-transparent
              border-content
              border
              rounded-lg
              p-2.5
              w-full
            "
        />
      </label>
    </div>
    <button
      type="submit"
      class="bg-primary p-2.5 rounded-xl w-full"
    >Continue</button>
  </form>
</template>

<script>
import { Vue } from 'vue-class-component';

export default class FormSignup extends Vue {
  name = ''

  email = ''

  birthday = ''

  color = ''

  handleSubmit = (event) => {
    event.preventDefault();
  }
}
</script>
