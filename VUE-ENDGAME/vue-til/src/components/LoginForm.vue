<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      //이메일 연산식을 계산해서 유효하면 'true' 유효하지 않으면 'false' 리턴
      // validateEmail가 유저네임을 하나하나 검사하면서 결과로 true false를 리턴
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        //비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
        //this.initForm();
      } catch (error) {
        //에러 핸들링할 코드
        //console.log(error.response);
        //error.response : 에러에 대한 상세 내역을 볼 수 있다.
        //console.log(error.response.data);
        this.logMessage = error.response.data;
        //this.initForm();
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
