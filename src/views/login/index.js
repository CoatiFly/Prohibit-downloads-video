
export default {
  name: 'Login',
  data() {
    return {
      userInfo: {
        username: 'Hadmin',
        password: 'Pvio125%',
      },
      loginBtnText: 'LOGIN',
      form: {
        username: '',
        password: '',
      },
      popupStatus: false,
    };
  },
  mounted() {

  },
  methods: {
    // login
    onSubmit() {
      this.popupStatus = true;
      if(this.form.username === this.userInfo.username && this.form.password === this.userInfo.password) {
        setTimeout(() => {
          this.popupStatus = false;
          this.$tool.go('Index');
        }, 2000);
      }else{
        this.$message.error('用户名或密码错误！');
        this.popupStatus = false;
        console.log('Error_Info: ', '用户名或密码错误！');
      }
    },
  },
};
