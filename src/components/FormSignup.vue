<template>
  <form @submit="handleSubmit" class="bg-black rounded-xl shadow-primary min-h-[600px] p-10">
    <div v-if="!success">
      <h2 class="text-primary text-3xl font-semibold text-center mb-10">
        Signup
      </h2>

      <div class="text-white text-lg mb-10">
        <div class="block mb-5">
          <div class="text-md mb-1 text-primary">Name</div>
          <label for="name">
            <input
              v-model="form.name.value"
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
          <p class="text-secondary text-sm mt-2">{{ form.name.error }}</p>
        </div>

        <div class="block mb-5">
          <div class="text-md mb-1 text-primary">Email</div>
          <label for="email">
            <input
              v-model="form.email.value"
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
          <p class="text-secondary text-sm mt-2">{{ form.email.error }}</p>
        </div>

        <div class="block mb-5">
          <div class="text-md mb-1 text-primary">Birthday</div>
          <label for="birthday">
            <input
              v-model="form.birthday.value"
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
        </div>

        <div class="block mb-5">
          <div class="text-md mb-1 text-primary">Favorite Color</div>
          <label for="color">
            <input
              v-model="form.color.value"
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
          <p class="text-secondary text-sm mt-2">{{ form.color.error }}</p>
        </div>

      </div>
      <button
        type="submit"
        class="bg-primary p-2.5 rounded-xl w-full"
      >Continue</button>
    </div>
    <div v-if="success" class="min-h-[inherit] flex items-center justify-center">
      <h2 class="text-primary text-3xl font-semibold text-center mb-10">
        Success!
      </h2>
    </div>
  </form>
</template>

<script>
import { Vue } from 'vue-class-component';
import regex from '@/constants/regex';

export default class FormSignup extends Vue {
  success = false

  form = {
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    birthday: { value: '', error: '' },
    color: { value: '', error: '' },
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.validateForm();

    const {
      name, email, birthday, color,
    } = this.form;
    const formHasError = name.error || email.error || birthday.error || color.error;

    if (!formHasError) {
      this.saveUser();
    }
  }

  saveUser = async () => {
    const {
      name, email, birthday, color,
    } = this.form;

    const request = await fetch(`${process.env.VUE_APP_API_URL}/api/user`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        birthday: birthday.value,
        favorite_color: color.value,
      }),
    });

    const { success } = await request.json();
    if (success) {
      this.success = true;
    }
  }

  validateForm = () => {
    this.validateColor();
    this.validateEmail();
    this.validateName();
  }

  validateName = () => {
    const name = this.form.name.value;
    if (regex.name.test(name)) {
      this.form.name.error = '';
    } else {
      this.form.name.error = 'Please enter a valid name';
    }
  }

  validateEmail = () => {
    const email = this.form.email.value;
    if (regex.email.test(email)) {
      this.form.email.error = '';
    } else {
      this.form.email.error = 'Enter a valid email';
    }
  }

  validateColor = () => {
    const color = this.form.color.value;
    if (regex.color.test(color) && color) {
      this.form.color.error = '';
    } else {
      this.form.color.error = 'Please enter a valid color name';
    }
  }
}
</script>
