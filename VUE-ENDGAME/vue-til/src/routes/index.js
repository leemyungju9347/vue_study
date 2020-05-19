import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  //routes: vue 라우터에 의해서 컨트롤, 제어되는 페이지의 정보를 나타내는, 라우팅 정보를 담는 배열
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      //코드스플리팅 적용
      //로그인과 회원가입 url로 이동할떄 마다 필요한 자바스크립트 파일을 가져오는 것이 코드스플리팅이라는 것.
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    //path : '*' 위에있는 url을 제외한 모든 url에 반응하겠다는 것.
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
