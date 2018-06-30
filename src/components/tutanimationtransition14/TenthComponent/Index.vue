<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>The First Animation Transition</h2>
            </div>
            <div class="col-12 bg-light py-3">
              <button class="btn btn-primary" @click="show = !show">Show Alert</button>
              <transition name="fade">
                <div class="alert alert-info mt-3" v-if="show">
                  <p>This is some Info</p>
                  <a href="https://vuejs.org/v2/guide/transitions.html#Transition-Classes" class="btn btn-secondary">Transition Classes</a>
                  <p><strong class="badge badge-warning">v-enter</strong> : Starting state for enter. Added before element is inserted, removed one frame after element is inserted.</p>
                  <p><strong class="badge badge-warning">v-enter-active</strong>: Active state for enter. Applied during the entire entering phase. Added before element is inserted, removed when transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.</p>
                  <p><strong class="badge badge-warning">v-enter-to</strong>: Only available in versions 2.1.8+. Ending state for enter. Added one frame after element is inserted (at the same time v-enter is removed), removed when transition/animation finishes.</p>
                  <p><strong class="badge badge-warning">v-leave</strong>: Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame. </p>
                  <p><strong class="badge badge-warning">v-leave-active</strong>: Active state for leave. Applied during the entire leaving phase. Added immediately when leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.</p>
                  <p><strong class="badge badge-warning">v-leave-to</strong>: Only available in versions 2.1.8+. Ending state for leave. Added one frame after a leaving transition is triggered (at the same time v-leave is removed), removed when the transition/animation finishes.</p>
                  <p>Here the <strong class="badge badge-warning">v-</strong> prefix is the default when you use a &lt;transition&gt; element with no name.</p>
                </div>
              </transition>
              <transition name="slide">
                  <div class="alert alert-info mt-3" v-if="show">Slide Animation</div>
              </transition>
              <transition name="transition-with-animation" type="animation">
                  <div class="alert alert-info mt-3" v-if="show">
                    <p>Slide Animation with Transition</p>
                    <p class="badge badge-warning">&lt;transition name="transition-with-animation" type="animation"&gt;&lt;/transition&gt;</p>
                    <p>Having a CSS animation triggered by Vue, along with a CSS transition effect on hover. In these cases, you will have to explicitly declare the <span class="badge badge-warning">type</span> you want Vue to care about in a type attribute, with a value of either <span class="badge badge-warning">animation</span> or <span class="badge badge-warning">transition</span>.</p>
                  </div>
              </transition>
            </div>
            <div class="col-12 mt-3 bg-light py-3">
              <button class="btn btn-primary" @click="hide = !hide">Hide Alert</button>
              <p class="mt-3">By Adding <span class="badge badge-warning">appear</span> attribute in <span class="badge badge-warning">transition</span> tag it will animate the effects when it will appear</p>
              <transition name="fade" appear>
                  <div class="alert alert-info mt-3" v-if="hide">Fade Transition</div>
              </transition>
              <transition name="transition-with-animation" appear>
                  <div class="alert alert-info mt-3" v-if="hide">Slide Animation</div>
              </transition>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      show: false,
      hide: true
    }
  }
}
</script>
