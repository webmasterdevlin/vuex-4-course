<template>
  <div class="card my-3" style="width: auto;">
    <VeeForm
      @submit="onSubmit"
      v-slot="{ isSubmitting, handleReset }"
      :validation-schema="heroYupValidation"
      class="card-header"
      style="min-width: 460px;"
    >
      <div class="d-flex flex-column">
        <section class="form-group">
          <label for="firstName" class="mr-2">First Name</label>
          <ErrorMessage name="firstName" class="text-danger" />
          <VeeField
            id="firstName"
            v-model="obj.firstName"
            placeholder="📛"
            autocomplete="off"
            name="firstName"
            as="input"
            type="text"
            class="form-control"
          />
        </section>

        <section class="form-group">
          <label for="lastName" class="mr-2">Last Name</label>
          <ErrorMessage name="lastName" class="text-danger" />
          <VeeField
            id="lastName"
            v-model="obj.lastName"
            placeholder="📛"
            autocomplete="off"
            name="lastName"
            as="input"
            type="text"
            class="form-control"
          />
        </section>
        <section class="form-group">
          <label for="house" class="mr-2">House</label>
          <ErrorMessage name="house" class="text-danger" />
          <VeeField
            id="house"
            v-model="obj.house"
            placeholder="🏠"
            autocomplete="off"
            name="house"
            as="input"
            type="text"
            class="form-control"
          />
        </section>
        <section class="form-group">
          <label for="knownAs" class="mr-2">Known as</label>
          <ErrorMessage name="knownAs" class="text-danger" />
          <VeeField
            id="knownAs"
            v-model="obj.knownAs"
            placeholder="👀"
            autocomplete="off"
            name="knownAs"
            as="input"
            type="text"
            class="form-control"
          />
        </section>
        <button type="submit" :disabled="validate" class="btn btn-success">
          {{ text }}
        </button>
      </div>
    </VeeForm>
  </div>
</template>

<script>
import { Field as VeeField, Form as VeeForm, ErrorMessage } from "vee-validate";
import { heroYupValidation } from "./heroYupValidation";

export default {
  name: "Form",
  components: {
    VeeForm,
    VeeField,
    ErrorMessage,
  },
  data: () => ({
    heroYupValidation,
  }),
  props: {
    text: {
      type: String,
      default: () => String,
    },
    obj: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style scoped></style>
