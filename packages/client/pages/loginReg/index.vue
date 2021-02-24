<template>
  <div class="uiflg">
    <div class="title is-2 has-text-centered">Вход</div>
    <LoginBlock
      :email="email"
      :password="password"
      :showComment="showComment"
      :isEmailDisable="isEmailDisable"
      :show-forgot-button="showForgotButton"
      :show-comment-retry-email="showCommentRetryEmail"
      :mode="mode"
    />
  </div>
</template>

<script>
  import { CST_REG_MODE__FORGOT, CST_REG_MODE__LOGIN, CST_REG_MODE__REG } from '../../utils/consts';
  import LoginBlock from '../../components/LoginBlock';

  export default {
    components: { LoginBlock },
    data() {
      return {
        mode: '',
        showComment: true,
        isEmailDisable: false,
        email: '',
        password: '',
        showForgotButton: false,
        showCommentRetryEmail: false
      }
    },
    mounted() {
      this.mt()
    },
    methods: {
      mt() {
        this.mode = this.$route.params.mode || CST_REG_MODE__REG;
        if (this.mode === CST_REG_MODE__LOGIN) {
          this.showComment = false;
          this.isEmailDisable = false;
        } else if (this.mode === CST_REG_MODE__REG) {
          this.showComment = true;
          this.isEmailDisable = true;
          this.email = this.$route.params.email
        }
        if(this.mode === CST_REG_MODE__FORGOT) {
          this.showComment = false;
          this.showForgotButton = true;
          this.showCommentRetryEmail  =true;
        }
      }
    }
  }
</script>

