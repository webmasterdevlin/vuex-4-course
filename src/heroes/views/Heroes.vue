<template>
  <div class="container-fluid">
    <h1>Heroes Works!</h1>
    <section>
      <div class="card-header">
        <h3 class="card-title">hero.firstNamehero.lastName</h3>
        <h5 class="card-subtitle mb-2 text-muted">hero.house</h5>
        <p class="card-text">hero.knownAs</p>
      </div>

      <section class="card-body">
        <div class="row">
          <button class="btn btn-primary card-link col text-center">
            EDIT
          </button>
          <button class="btn btn-secondary card-link col text-center">
            DETAIL
          </button>
          <button class="btn btn-outline-danger card-link col text-center">
            DELETE
          </button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
