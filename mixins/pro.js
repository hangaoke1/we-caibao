import _ from 'lodash';
export default {
  methods: {
    navigateTo: _.debounce(function(opt) {
      uni.navigateTo(opt)
    }, 500, {
      leading: true,
      trailing: false
    })
  }
}
