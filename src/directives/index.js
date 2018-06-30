import Vue from 'vue'

Vue.directive('higlight', {
  bind (el, binding, vnode) {
    el.style.backgroundColor = 'green'
  }
})

Vue.directive('directive-with-value', {
  bind (el, binding, vnode) {
    el.style.backgroundColor = binding.value
  }
})

Vue.directive('directive-with', {
  bind (el, binding, vnode) {
    var delay = 0
    if (binding.modifiers['modifierset']) {
      delay = 3000
    }

    setTimeout(() => {
      if (binding.arg === 'argument') {
        el.style.color = binding.value
      } else {
        el.style.backgroundColor = binding.value
      }
    }, delay)
  }
})
