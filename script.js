Vue.createApp({
  data() {
    return {
      passwordType: "password",
      button: "Show Password",
      passwordOne: "",
      passwordTwo: "",
    };
  },
  methods: {
    changeType() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
        this.button = "Hide Password";
      } else {
        this.passwordType = "password";
        this.button = "Show Password";
      }
    },
  },
  computed: {
    containNumber() {
      return /[0-9]/.test(this.passwordOne);
    },
    containUppercase() {
      return /[A-Z]/.test(this.passwordOne);
    },
    containLowercase() {
      return /[a-z]/.test(this.passwordOne);
    },
    samePassword() {
      return this.passwordOne === this.passwordTwo && this.passwordOne !== "";
    },
    atLeast10Char() {
      return this.passwordOne.length > 10;
    },
  },
}).mount("#app");
