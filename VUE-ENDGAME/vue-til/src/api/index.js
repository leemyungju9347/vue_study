import axios from 'axios';

// axios.create(axiosRequestConfig) : 요청할때 공통 설정들을 넣어줄 수 있는 axios api
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  //환경변수의 있는 파일을 index.js에 자동으로 들고 올 수 있게 된다.
});

//const vm = new Vue({})

// 인스턴스를 생성해서 라이브러리를 사용하는 방식과 같이 선언해준다.
//POST 방식은 데이터를 서버로 제출하여 추가 또는 수정하기 위해서 사용하는 방식
function registerUser(userData) {
  //const url = 'http://localhost:3000/signup'; // 서버의 주소 입력, api Endpoint

  //return axios.post(url, userData);
  return instance.post('signup', userData);

  //axios post 결과가 promise 방식이기 때문에 결과를 return 해줘야지 register를 호출하고 이후에 비동기동작을 수행할 수 있다.
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
