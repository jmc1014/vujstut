<template>
  <section class="bg-secondary text-white">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-8">
          <h1>Built-in Directives</h1>
          <p v-text="'Some Text'"></p>
          <p v-html="'<strong>Some strong text</strong>'"></p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-8">
          <h1>Custom Directives</h1>
          <p v-higlight>Color this</p>
          <p v-directive-with-value="'pink'">Color this</p>
          <p v-directive-with:argument="'yellow'">Color This</p>
          <p v-directive-with:argumen-t="'yellow'">Color This</p>
          <p v-directive-with.modifierset="'red'">Color This</p>
          <p v-local-directive.modifierset="'blue'">Color This Local Directive</p>
          <p v-local-directive-width:background.blink.delayed="{}">Color This Local Directive</p>
          <p v-local-directive-width:background.blink.delayed="{ mainColor: 'pink', secondColor: 'red', blinkDelay: '200'}">Color This Local Directive</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
  export default {
    directives: {
      'local-directive': {
        bind(el, binding, vnode) {
          var delay = 0
          if (binding.modifiers['modifierset']) {
            delay = 2000
          }

          setTimeout(() => {
            if (binding.arg === 'argument') {
              el.style.color = binding.value
            } else {
              el.style.backgroundColor = binding.value
            }
          }, delay)
        }
      },
      'local-directive-width': {
        bind(el, binding, vnode) {
          var delay = 0
          if (binding.modifiers['delayed']) {
            delay = 2000
          }
          let val = binding.value
          let mainColor = val.mainColor ? val.mainColor : 'white'
          let secondColor = val.secondColor ? val.secondColor : 'black'
          let currentColor = mainColor
          let blinkDelay = val.blinkDelay ? val.blinkDelay : 100

          setTimeout(() => {
            if (binding.modifiers['blink']) {
              setInterval(() => {
                currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor
                if (binding.arg === 'background') {
                  el.style.backgroundColor = currentColor
                } else {
                  el.style.color = currentColor
                }
              }, blinkDelay)
            } else {
                if (binding.arg === 'background') {
                  el.style.backgroundColor = currentColor
                } else {
                  el.style.color = currentColor
                }
            }
          }, delay)
        }
      }
    }
  }
</script>
