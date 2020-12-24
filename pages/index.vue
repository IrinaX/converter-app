<template>
  <div class="container">
    <div class="main">
      <h1 class="title">Currency Converter</h1>
      <div class="date">
        <div class="date__item">
          <div class="date__item-title">Day</div>
          <div class="date__item-value">10</div>
        </div>
        <div class="date__item">
          <div class="date__item-title">Month</div>
          <div class="date__item-value">10</div>
        </div>
        <div class="date__item">
          <div class="date__item-title">Year</div>
          <div class="date__item-value">2010</div>
        </div>
      </div>
      <div>
        <div class="currency-card">
          <button type="button" class="btn btn_change-curr">
            <span class="currency-card__abbr">usd</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.49999 5.40002L8.99999 9.90002L13.5 5.40002L15.3 6.30002L8.99999 12.6L2.69999 6.30002L4.49999 5.40002Z"
                fill="#1D1D1D"/>
            </svg>
          </button>
          <div class="currency-card__right">
            <div class="currency-card__amount">100$</div>
            <div class="currency-card__currency">American Dollar</div>
          </div>
        </div>
        <div class="currency-card">
          <button type="button" class="btn btn_change-curr">
            <span class="currency-card__abbr">rus</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.49999 5.40002L8.99999 9.90002L13.5 5.40002L15.3 6.30002L8.99999 12.6L2.69999 6.30002L4.49999 5.40002Z"
                fill="#1D1D1D"/>
            </svg>
          </button>
          <div class="currency-card__right">
            <div class="currency-card__amount">7500₽</div>
            <div class="currency-card__currency">Russian Rubble</div>
          </div>
        </div>
      </div>
    </div>
    <div class="numpad">
      <div class="numpad__btns">
        <button type="button" class="btn btn_numpad">1</button>
        <button type="button" class="btn btn_numpad">2</button>
        <button type="button" class="btn btn_numpad">3</button>
        <button type="button" class="btn btn_numpad">4</button>
        <button type="button" class="btn btn_numpad">5</button>
        <button type="button" class="btn btn_numpad">6</button>
        <button type="button" class="btn btn_numpad">7</button>
        <button type="button" class="btn btn_numpad">8</button>
        <button type="button" class="btn btn_numpad">9</button>
        <div class="numpad__btns-offset"></div>
        <button type="button" class="btn btn_numpad">0</button>
        <button type="button" class="btn btn_numpad">.</button>

      </div>
      <div class="numpad__aside-btns">
        <button type="button" class="btn btn_numpad-aside">AC</button>
        <button type="button" class="btn btn_numpad-aside">
          <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.69449 0.458374H22.8333C23.5185 0.458374 24.1755 0.730546 24.66 1.21501C25.1445 1.69948 25.4167 2.35657 25.4167 3.04171V15.9584C25.4167 16.6435 25.1445 17.3006 24.66 17.7851C24.1755 18.2695 23.5185 18.5417 22.8333 18.5417H9.69449C9.0094 18.5416 8.35243 18.2693 7.86807 17.7848L0.49653 10.4133C0.254379 10.171 0.118347 9.84255 0.118347 9.50004C0.118347 9.15754 0.254379 8.82906 0.49653 8.58683L7.86807 1.21529C8.35243 0.730788 9.0094 0.45852 9.69449 0.458374V0.458374ZM9.69449 15.9584H22.8333V3.04171H9.69449L3.23615 9.50004L9.69449 15.9584ZM18.2014 9.50004L20.0278 11.3265C20.2631 11.5701 20.3933 11.8963 20.3904 12.235C20.3874 12.5737 20.2516 12.8977 20.0121 13.1371C19.7726 13.3766 19.4486 13.5125 19.11 13.5154C18.7713 13.5184 18.445 13.3882 18.2014 13.1529L16.375 11.3265L14.5486 13.1529C14.4294 13.2762 14.2869 13.3746 14.1293 13.4423C13.9717 13.51 13.8022 13.5457 13.6307 13.5472C13.4592 13.5486 13.2891 13.516 13.1304 13.451C12.9716 13.3861 12.8274 13.2902 12.7061 13.1689C12.5849 13.0476 12.489 12.9034 12.424 12.7447C12.3591 12.5859 12.3264 12.4158 12.3279 12.2443C12.3294 12.0728 12.365 11.9033 12.4327 11.7457C12.5004 11.5881 12.5988 11.4456 12.7222 11.3265L14.5486 9.50004L12.7222 7.67363C12.5988 7.55447 12.5004 7.41194 12.4327 7.25436C12.365 7.09677 12.3294 6.92728 12.3279 6.75577C12.3264 6.58426 12.3591 6.41418 12.424 6.25543C12.489 6.09669 12.5849 5.95248 12.7061 5.8312C12.8274 5.70992 12.9716 5.61401 13.1304 5.54906C13.2891 5.48412 13.4592 5.45144 13.6307 5.45293C13.8022 5.45442 13.9717 5.49005 14.1293 5.55774C14.2869 5.62544 14.4294 5.72384 14.5486 5.84721L16.375 7.67363L18.2014 5.84721C18.3206 5.72384 18.4631 5.62544 18.6207 5.55774C18.7783 5.49005 18.9478 5.45442 19.1193 5.45293C19.2908 5.45144 19.4609 5.48412 19.6196 5.54906C19.7783 5.61401 19.9226 5.70992 20.0438 5.8312C20.1651 5.95248 20.261 6.09669 20.326 6.25543C20.3909 6.41418 20.4236 6.58426 20.4221 6.75577C20.4206 6.92728 20.385 7.09677 20.3173 7.25436C20.2496 7.41194 20.1512 7.55447 20.0278 7.67363L18.2014 9.50004Z"
              fill="#15BB70"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="modal">
      <div class="modal__header">
        <button type="button" class="btn btn_back">
          <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.632819 8C0.632819 7.45258 1.11648 7.00881 1.71311 7.00881H28.7203C29.317 7.00881 29.8006 7.45258 29.8006 8C29.8006 8.54742 29.317 8.99119 28.7203 8.99119H1.71311C1.11648 8.99119 0.632819 8.54742 0.632819 8Z"
              fill="#1D1D1D"/>
            <path
              d="M0.316409 8.70088C-0.10547 8.31379 -0.10547 7.6862 0.316409 7.29912L7.95521 0.290314C8.37709 -0.0967715 9.06109 -0.0967713 9.48297 0.290314C9.90485 0.6774 9.90485 1.30499 9.48297 1.69208L1.84417 8.70088C1.42229 9.08797 0.738289 9.08797 0.316409 8.70088Z"
              fill="#1D1D1D"/>
            <path
              d="M0.316409 8.70088C-0.10547 8.31379 -0.10547 7.6862 0.316409 7.29912C0.738289 6.91203 1.42229 6.91203 1.84417 7.29912L9.48297 14.3079C9.90485 14.695 9.90485 15.3226 9.48297 15.7097C9.06109 16.0968 8.37709 16.0968 7.95521 15.7097L0.316409 8.70088Z"
              fill="#1D1D1D"/>
          </svg>
        </button>
        <h2 class="title">Change Currency</h2>
      </div>
      <div class="search-panel">
        <svg class="search-panel__search-icon" width="19" height="19" viewBox="0 0 19 19" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.4305 17.1929L12.5974 11.3598C13.5025 10.1896 13.9922 8.75879 13.9922 7.25391C13.9922 5.45254 13.2892 3.76348 12.0179 2.48994C10.7466 1.21641 9.05303 0.515625 7.25391 0.515625C5.45479 0.515625 3.76123 1.21865 2.48994 2.48994C1.21641 3.76123 0.515625 5.45254 0.515625 7.25391C0.515625 9.05303 1.21865 10.7466 2.48994 12.0179C3.76123 13.2914 5.45254 13.9922 7.25391 13.9922C8.75879 13.9922 10.1873 13.5025 11.3575 12.5996L17.1906 18.4305C17.2077 18.4476 17.228 18.4612 17.2504 18.4704C17.2727 18.4797 17.2967 18.4845 17.3209 18.4845C17.3451 18.4845 17.3691 18.4797 17.3914 18.4704C17.4138 18.4612 17.4341 18.4476 17.4512 18.4305L18.4305 17.4534C18.4476 17.4363 18.4612 17.416 18.4704 17.3937C18.4797 17.3713 18.4845 17.3473 18.4845 17.3231C18.4845 17.2989 18.4797 17.275 18.4704 17.2526C18.4612 17.2303 18.4476 17.21 18.4305 17.1929ZM10.8117 10.8117C9.85938 11.7618 8.59707 12.2852 7.25391 12.2852C5.91074 12.2852 4.64844 11.7618 3.69609 10.8117C2.746 9.85938 2.22266 8.59707 2.22266 7.25391C2.22266 5.91074 2.746 4.64619 3.69609 3.69609C4.64844 2.746 5.91074 2.22266 7.25391 2.22266C8.59707 2.22266 9.86162 2.74375 10.8117 3.69609C11.7618 4.64844 12.2852 5.91074 12.2852 7.25391C12.2852 8.59707 11.7618 9.86162 10.8117 10.8117Z"
            fill="#1D1D1D" fill-opacity="0.5"/>
        </svg>
        <input type="text" class="search-panel__input" placeholder="Search currency..."/>
        <button type="button" class="btn btn_close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 0.25C4.125 0.25 0.25 4.125 0.25 9C0.25 13.875 4.125 17.75 9 17.75C13.875 17.75 17.75 13.875 17.75 9C17.75 4.125 13.875 0.25 9 0.25ZM12.375 13.375L9 10L5.625 13.375L4.625 12.375L8 9L4.625 5.625L5.625 4.625L9 8L12.375 4.625L13.375 5.625L10 9L13.375 12.375L12.375 13.375Z"
              fill="#1D1D1D" fill-opacity="0.5"/>
          </svg>
        </button>
      </div>
      <div class="modal__body">
        <button type="button" class="btn currency-item">
          <span>
            <span class="currency-item__abbr">usd</span>
            <span class="currency-item__currency">American Dollar</span>
          </span>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.400023 11.5L4.90002 6.99995L0.400024 2.49995L1.30002 0.699951L7.60002 6.99995L1.30002 13.3L0.400023 11.5Z"
              fill="#1D1D1D"/>
          </svg>
        </button>
        <button type="button" class="btn currency-item">
          <span>
            <span class="currency-item__abbr">rub</span>
            <span class="currency-item__currency">Russian Rubble</span>
          </span>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.400023 11.5L4.90002 6.99995L0.400024 2.49995L1.30002 0.699951L7.60002 6.99995L1.30002 13.3L0.400023 11.5Z"
              fill="#1D1D1D"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}

.main, .modal {
  padding: 30px 20px 20px;
}

.title {
  text-align: center;
  font-weight: normal;
  font-size: 20px;
  line-height: 31px;
  color: $text;
  margin-bottom: 30px;
}

.currency-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &__abbr {
    font-weight: 500;
    font-size: 25px;
    line-height: 120%;
    text-transform: uppercase;
  }

  &__right {
    text-align: right;
  }

  &__amount {
    font-weight: 500;
    font-size: 25px;
    line-height: 120%;

  }

  &__currency {
    font-size: 14px;
    line-height: 120%;
  }
}

.date {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;

  &__item {
    padding: 0 20px;
    position: relative;

    &:after {
      content: '';
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba($primary, .5);
    }

    &:last-child {
      &:after {
        content: none;
      }

      .date__item-value {
        min-width: 70px;
      }
    }

    &-title {
      font-size: 14px;
    }

    &-value {
      min-width: 35px;
      font-weight: 500;
      font-size: 25px;

    }
  }
}

.numpad {
  padding: 20px;
  padding-left: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 254px;
  background: $light;
  display: flex;
  align-items: center;
  justify-content: center;

  &__btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: 15px;

    &-offset {
      min-width: 73px;
    }
  }
}

.modal {
  background: $main;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    .btn_back {
      position: relative;
      z-index: 2;

      svg {
        vertical-align: sub;
      }
    }

    .title {
      width: 100%;
      margin-left: -30px;
      margin-bottom: 0;
    }
  }

  .search-panel {
    background: $light;
    box-shadow: 0px 0px 70px -20px rgba(0, 0, 0, 0.25);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &__input {
      font-family: inherit;
      font-size: 18px;
      width: 100%;
      outline: none;
      border: none;
      padding: 0 10px;
      display: block;
    }

    .btn_close {
      svg {
        vertical-align: sub;
      }
    }
  }

  &__body {
    .currency-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      text-align: left;
      position: relative;
      margin-bottom: 32px;
      &__abbr {
        display: block;
        font-weight: 500;
        font-size: 25px;
        line-height: 120%;
        text-transform: uppercase;
      }

      &__currency {
        display: block;
        font-size: 14px;
        line-height: 120%;
      }
      &:after{
        content: '';
        width: 100%;
        height: 2px;
        background: rgba($text,.3);
        position: absolute;
        bottom: -17px;
        left: 0;
      }
      &:last-child{
        margin-bottom: 0;
        &:after{
          content: none;

        }
      }
    }
  }
}
</style>
