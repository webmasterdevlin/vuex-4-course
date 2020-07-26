<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h3>Login</h3>

      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="loginForm.email"
          autocomplete="off"
          id="email"
          type="email"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="loginForm.password"
          autocomplete="off"
          id="password"
          type="password"
          class="form-control form-control-lg"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Login</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data: () => ({
    loginForm: {
      email: "",
      password: "",
    },
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

<style>
@import "../auth.css";
</style>
