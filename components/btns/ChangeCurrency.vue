<template>
  <button type="button" class="btn btn_change-curr">
    <slot/>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.49999 5.40002L8.99999 9.90002L13.5 5.40002L15.3 6.30002L8.99999 12.6L2.69999 6.30002L4.49999 5.40002Z"
        fill="#1D1D1D"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: "ChangeCurrency"
};
</script>

<style scoped lang="scss">
.btn_change-curr{
  min-width: 80px;
}
</style>
