<template>
   <div class="input-container">
      <label v-if="showLabel" :for="name" class="label">{{ label }}</label>
      <input
         v-bind="$attrs"
         class="input"
         :name="name"
         :value="value"
         @input="$emit('input', $event.target.value)"
      />
   </div>
</template>

<script>
export default {
   name: 'VInput',
   inheritAttrs: false,
   props: {
      label: String,
      name: String,
      value: {
         type: String,
         default: ''
      }
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
