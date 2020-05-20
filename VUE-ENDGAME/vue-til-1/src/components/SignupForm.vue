<template>
  <form @submit.prevent="submitForm">
    <!-- 버튼으로부터 이벤트 버블링으로 submit을 받기때문에 v-on:submit이라는 뷰 디렉티브를 활용해서 이벤트를 받을 수 있다
        때문에 폼태그에 메소드를 걸어준다. 버튼을 클릭하고 나면 폼태그에 걸린 서브밋 이벤트가 실행되는 형태이다. -->
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button
      :disabled="!isUsernameValid || !password || !nickname"
      type="submit"
    >
      회원 가입
    </button>
    <p>{{ logMessage }}</p>
    <!-- 버튼에 type:submit을 주면 이벤트 버블링을 이용해 폼에 서브밋을 받을 수 있음 -->
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      console.log('폼제출');

      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      //넘기면 register에 객체가 전달되면서 post에 유저데이터가 전달된다.
      //const response = await registerUser(userData); //api 호출
      const { data } = await registerUser(userData);
      //console.log(response.data);
      console.log(data.username);
      this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style>
.on {
  border: 2px solid red;
}
</style>
