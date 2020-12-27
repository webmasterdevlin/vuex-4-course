<template>
  <div>
    <Form
      v-slot="{ values }"
      @submit="onSubmit"
      :validation-schema="registerYupValidation"
    >
      <h3>Register</h3>
      <section class="form-group">
        <label for="email" class="mr-4">Email address</label>
        <ErrorMessage name="email" class="text-danger" />
        <Field
          name="email"
          as="input"
          v-model="registerForm.email"
          placeholder="📧"
          autocomplete="off"
          id="email"
          type="email"
          class="form-control form-control-lg"
        />
      </section>

      <section class="form-group">
        <label for="password" class="mr-4">Password</label>
        <ErrorMessage name="password" class="text-danger" />
        <Field
          name="password"
          as="input"
          v-model="registerForm.password"
          placeholder="🔑"
          autocomplete="off"
          id="password"
          type="password"
          class="form-control form-control-lg"
        />
      </section>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Register
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
      <pre>{{ values }}</pre>
    </Form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import {
  registerYupValidation,
  registerForm,
} from "@/auth/schema/registerYupValidation";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data: () => ({
    registerYupValidation,
    registerForm,
  }),

  methods: {
    ...mapActions("authModule", ["registerUserAction"]),

    onSubmit(values) {
      this.registerUserAction(this.registerForm).then(() => {
        this.$router.push({ name: "heroes" });
      });
    },
  },
};
</script>

<style scoped></style>
