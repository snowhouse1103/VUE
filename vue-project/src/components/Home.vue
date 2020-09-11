<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "welcome php world",
    };
  },
  methods: {
    show() {
      this.$http({
        method: "get",
        url: "http://localhost:9000",
        params: {
          name: "daisy",
        },
      });
    },
  },
  created() {
    this.show();
  },
};
</script>
<style scoped lang="scss"></style>
