import Vue from 'vue'

Vue.filter('toLowercase', function (value) {
  return value.toLowerCase()
})

Vue.filter('changeColor', function (value, color) {
  return value + color
})

Vue.filter('dateFormat', function (value) {
  var x = new Date(value)
  return x.toDateString('MM DD YYYY')
  // return Date.parse(value).toString('MM DD YYYY')
})
