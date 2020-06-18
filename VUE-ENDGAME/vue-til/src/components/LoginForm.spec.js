import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메세지가 출력된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    //username이라는 id를 가진 input
    // const idInput = wrapper.find('#username');
    // console.log('input 박스의 값', idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
    const warningText = wrapper.find('.warning');
    //console.log(warningText.html());
    //warningText.exists() : warningText가 존재하는지 검사
    //exists()는 있으면 true 반환, 없으면 false
    //해석 : warningText가 있다라고 가정하고 그 값이 true일 것이다
    expect(warningText.exists()).toBeTruthy();
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    //초기값만 있는 경우 : disabled가 true
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });
});
