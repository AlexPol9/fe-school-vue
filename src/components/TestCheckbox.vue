<template>
  <div>
    <input
      type="checkbox"
      :value="value"
      v-model="change"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  // model: {
  //   prop: "checkedItems",
  //   event: "change",
  // },
  props: {
    value: String,
    checkedItems: [Array, String],
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
