import UTitle from '@/components/units/u-title'
import UInput from '@/components/units/u-input'

export default {
  data () {
    return {
      see: false,
      phoneNumber: null,
      password: null
    }
  },
  components: {
    UTitle,
    UInput
  },
  methods: {
    onSee () {
      this.see = !this.see
    },
    onSubmit () {

    },
    setPhone (val) {
      this.phoneNumber = val
    },
    setPassword (val) {
      this.password = val
    }
  }
}
