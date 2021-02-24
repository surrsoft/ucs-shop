<template>
  <div class="stb_align_h_center">
    <div class="nw_header-main_cont" style="width: 1920px;">
      <div class="nw_header_cont">
        <div class="nw_logo-space_cont">
          <div class="nw_logo_cont">
            <div>Лого</div>
          </div>
          <div class="nw_shop-desc_cont">
            <div>Короткое описание магазина</div>
            <div>в две строки</div>
          </div>
        </div>

        <div class="nw_social-and-sign_cont">
          <NwStdSocialBtns/>
          <div class="nw_00_gap"></div>
          <div class="nw_account_imgcont">
            <img src="/a1/common-account.svg">
          </div>
          <div class="nw_02_gap"></div>
          <div class="nw_sign_cont">
            <div class="nw_sign-link_leaf" @click="handleLogin">
              Вход
            </div>
            <div class="nw_sign_gap"></div>
            <div class="nw_vert-line_leaf"></div>
            <div class="nw_sign_gap"></div>
            <div class="nw_sign-link_leaf">
              Регистрация
            </div>
          </div>
        </div>
        <div class="nw_line_leaf"></div>
        <NwNavbar/>
      </div>

      <!--    <div class="nw_header-space_leaf"></div>-->
    </div>
  </div>
</template>

<script>
  import NwNavbar from '../components/NwNavbar';
  import NwStdSocialBtns from '../components/NwStdSocialBtns';

  export default {
    components: {
      NwNavbar,
      NwStdSocialBtns
    },
    methods: {
      handleLogin() {
        this.$router.push('/cabinet');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  .nw_header-main_cont {
    * {
      // outline: 1px black solid;
    }

    position: relative;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);

    .nw_header_cont {
      position: relative;
      height: $nw_header_h;
      width: 1176px;
      font-family: 'Montserrat Alternates', monospace;

      .nw_logo-space_cont {
        // --- pos
        position: absolute;
        top: 10px;
        left: 0;
        // --- cont
        display: flex;
        // ---
        .nw_logo_cont {
          width: 170px;
          height: 60px;
          // --- cont
          display: flex;
          align-items: center;
          justify-content: center;
          // ---
          background: #A6A6A6;
          opacity: 0.5;
          border-radius: 5px;
        }

        // ---
        .nw_shop-desc_cont {
          // --- size
          margin-left: 20px;
          margin-top: 15px;
          // --- font
          font-size: 12px;
          line-height: 15px;
          color: rgba(0, 0, 0, 0.45);
          opacity: 0.6;
        }
      }


      // ---

      .nw_social-and-sign_cont {
        position: absolute;
        right: 0;
        top: 25px;
        display: flex;
        float: right;

        .nw_00_gap {
          width: 62.5px;
          height: 100%;
        }

        .nw_02_gap {
          width: 12.5px;
        }

        .nw_account_imgcont {
          display: flex;
          align-items: center;
        }

        .nw_sign_cont {
          display: flex;
          align-self: center;

          .nw_sign-link_leaf {
            text-align: center;
            font-family: 'Montserrat Alternates', monospace;
            color: $nw_color_01_black;
            font-size: 14px;
            line-height: 16px;

            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }

          .nw_sign_gap {
            width: 14px;
          }

          .nw_vert-line_leaf {
            width: 1px;
            background-color: rgba(0, 0, 0, 0.85);
            align-self: stretch;
          }

        }
      }

      .nw_line_leaf {
        position: absolute;
        top: 80px;
        right: 0;
        left: 0;
        height: 1px;
        background: #2D2D2D;
        opacity: 0.1;
      }


    }
  }
</style>

