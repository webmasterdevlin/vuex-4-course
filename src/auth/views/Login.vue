<template>
  <div>
    <Form
      v-slot="{ values }"
      @submit="onSubmit"
      :validation-schema="loginYupValidation"
    >
      <h3>Login</h3>

      <section class="form-group">
        <label for="email" class="mr-4">Email address</label>
        <ErrorMessage name="email" class="text-danger" />
        <Field
          name="email"
          as="input"
          v-model="loginForm.email"
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
          v-model="loginForm.password"
          placeholder="🔑"
          autocomplete="off"
          id="password"
          type="password"
          class="form-control form-control-lg"
        />
      </section>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Login</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
      <pre>{{ values }}</pre>
    </Form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import { loginYupValidation, loginForm } from "../schema/loginYupValidation";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data: () => ({
    loginForm,
    loginYupValidation,
  }),

  methods: {
    ...mapActions("authModule", ["loginUserAction"]),
    onSubmit() {
      this.loginUserAction(this.loginForm).then(() => {
        this.$router.push({ name: "heroes" });
      });
    },
  },
};
</script>

<style scoped></style>
