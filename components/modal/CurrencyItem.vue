<template>
  <button type="button" class="btn currency-item">
          <slot/>
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.400023 11.5L4.90002 6.99995L0.400024 2.49995L1.30002 0.699951L7.60002 6.99995L1.30002 13.3L0.400023 11.5Z"
        fill="#1D1D1D"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: "CurrencyItem"
};
</script>

<style scoped lang="scss">
.currency-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  position: relative;
  padding: 12px 0;

  //&:after {
  //  content: '';
  //  width: 100%;
  //  height: 2px;
  //  background: rgba($text, .3);
  //  position: absolute;
  //  bottom: -17px;
  //  left: 0;
  //}

  &:last-child {
    margin-bottom: 0;

    //&:after {
    //  content: none;
    //
    //}
  }
}
</style>
