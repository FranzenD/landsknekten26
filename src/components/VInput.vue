<template>
   <div class="input-container">
      <label v-if="showLabel" :for="name" class="label">{{ label }}</label>
      <input
         :type="type"
         :value="value"
         :name="name"
         :placeholder="placeholder"
         class="input"
         @input="$emit('input', $event.target.value)"
      />
   </div>
</template>

<script>
export default {
   name: 'VInput',
   props: {
      label: String,
      name: String,
      placeholder: String,
      type: String,
      value: String
   },
   data() {
      return {};
   },
   computed: {
      showLabel() {
         return !!(this.label && this.label.length);
      }
   }
};
</script>

<style scoped lang="scss">
.label {
   color: darkviolet;
   display: block;
   margin-bottom: 5px;
}
.input-container {
   display: inline-flex;
   flex-direction: column;
   align-items: flex-start;
   margin: 5px;
}
.input {
   border: solid 1px;
   border-radius: 3px;
   padding: 15px 10px;
   display: block;
   min-width: 200px;
   margin-bottom: 10px;
   outline: none;

   &:focus {
      border: solid 1px rgb(79, 204, 204);
   }
}
</style>
