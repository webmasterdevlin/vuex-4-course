<template>
  <div>
    <form>
      <h3>Forgot Password</h3>

      <div class="form-group">
        <label for="email">Email address</label>
        <input
          autocomplete="off"
          id="email"
          type="email"
          class="form-control form-control-lg"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Reset password
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {};
  },
};
</script>

<style>
@import "../auth.css";
</style>
