<template>
  <header>
      <h1>{{ propsdata }}</h1>
      <button @click="sendEvent">send</button>
  </header>
</template>

<script>
//컴포넌트 파일명 지을때 참고
//두단어 이상 - 일반 HTML 태그와 겹칠 수 있기 때문
//단어의 첫글자를 대문자로 쓰는 형식 - 파스칼표기법
export default {
    props:['propsdata'],
    methods:{
        sendEvent(){
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>