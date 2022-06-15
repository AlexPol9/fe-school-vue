<template>
  <div>
    <input
      type="radio"
      :value="value"
      v-model="change"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: "checkedItems",
    event: "change",
  },
  props: {
    value: {
      type: String,
      required: true
    },
    checkedItems: [Boolean],
  },
  data() {
    return {

    };
  },
  computed: {
    change: {
      get() {
        return this.checkedItems
      },
      set(newArr) {
        this.$emit('change', newArr)
      }
    },
  },
  methods: {
    
  },
};
</script>
