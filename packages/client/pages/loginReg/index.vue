<template>
  <div class="uiflg">
    <div class="title is-2 has-text-centered">Регистрация</div>
    <LoginBlock
      :email="email"
      :password="password"
      :showComment="showComment"
      :isEmailDisable="isEmailDisable"
      :show-forgot-button="showForgotButton"
      :show-comment-retry-email="showCommentRetryEmail"
      :btn-submit-text="btnSubmitText"
      :mode="mode"
    />
    <button
      :class="['button', 'is-primary']"
      @click="tempHandle"
    >
      temp
    </button>
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
      showCommentRetryEmail: false,
      btnSubmitText: 'Войти'
    }
  },
  mounted() {
    this.mt()
  },
  methods: {
    mt() {
      this.mode = this.$route.params.mode || CST_REG_MODE__REG;
      console.log('!!-!!-!! this.mode {210702091714}\n', this.mode); // del+
      if (this.mode === CST_REG_MODE__LOGIN) {
        this.showComment = false;
        this.isEmailDisable = false;
      } else if (this.mode === CST_REG_MODE__REG) {
        this.showComment = true;
        this.isEmailDisable = false;
        this.showComment = false;
        this.email = this.$route.params.email;
        this.btnSubmitText = 'Зарегистрировать'
      } else if (this.mode === CST_REG_MODE__FORGOT) {
        this.showComment = false;
        this.showForgotButton = true;
        this.showCommentRetryEmail = true;
      }
    },
    tempHandle() {
    }
  }
}
</script>

