<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>The Second Animation Transition</h2>
            </div>
            <div class="col-12 mt-3 bg-light py-3">
              <button class="btn btn-primary" @click="hide = !hide">Hide Alert</button>
              <transition
              appear
                enter-active-class="animated rubberBand"
                leave-active-class="animated hinge"
              >
                  <div class="alert alert-info mt-3" v-if="hide">
                    <a href="https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes" class="btn btn-secondary">Custom Transition Classes</a>
                    <p class="mb-0 mt-3">You can also specify custom transition classes by providing the following attributes:</p>
                    <ul class="p-0 m-0">
                      <li class="badge badge-warning">enter-class</li>
                      <li class="badge badge-warning">enter-active-class</li>
                      <li class="badge badge-warning">enter-to-class (2.1.8+)</li>
                      <li class="badge badge-warning">leave-class</li>
                      <li class="badge badge-warning">leave-active-class</li>
                      <li class="badge badge-warning">leave-to-class (2.1.8+)</li>
                    </ul>
                  </div>
              </transition>
            </div>
            <div class="col-12 mt-3 bg-light py-3">
              <select v-model="alertAnimation" class="form-control ">
                <option value="animated bounce">bounce exit</option>
                <option value="animated flash">flash exit</option>
                <option value="animated pulse">pulse exit</option>
                <option value="animated rubberBand">rubberBand exit</option>
                <option value="animated shake">shake exit</option>
                <option value="animated headShake">headShake exit</option>
                <option value="animated swing">swing exit</option>
                <option value="animated tada">tada exit</option>
                <option value="animated wobble">wobble exit</option>
                <option value="animated jello">jello exit</option>
              </select>
              <transition
                appear
                enter-active-class="animated rubberBand"
                :leave-active-class='alertAnimation'
              >
                    <div class="alert alert-info mt-3" v-if="showexit">{{ alertAnimation }} exit</div>
              </transition>
              <button class="btn btn-primary mt-3" @click="showexit = !showexit">Show Exit</button>
            </div>
            <div class="col-12 mt-3 bg-light py-3">
              <button class="btn btn-primary mb-3" @click="hidea = !hidea">Hide Alert</button>
              <transition name="fade">
                  <div class="alert alert-info mt-3" v-if="hidea">Slide Animation</div>
              </transition>
              <transition name="slide">
                  <div class="alert alert-info mt-3" v-if="hidea">Slide Animation</div>
              </transition>
              <transition name="fade" mode="out-in">
                <div class="alert alert-info" v-if="hidea" key="info">This is some Info</div>
                <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
              </transition>
            </div>
            <div class="col-12 mt-3 bg-light py-3">
              <button  class="btn btn-success " @click="load = !load">Load/Remove Element</button>
              <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false"
              >
                <div class="bg-success mt-3" style="width: 300px; height: 100px;" v-if="load"></div>
              </transition>
            </div>

            <div class="col-12 mt-3 bg-light py-3">
              <button  class="btn btn-primary mb-3"
              @click="selectedComponent === 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Mutiple Component</button>
              <transition name="fade" mode="out-in">
                <component :is="selectedComponent"></component>
              </transition>
            </div>

            <div class="col-12 mt-3 bg-light py-3">
              <button class="btn btn-primary" @click="addItem">Add Item</button>
              <p class="mt-3">The &lt;transition-group&gt; component has another trick up its sleeve. It can not only animate entering and leaving, but also changes in position. The only new concept you need to know to use this feature is the addition of the <span class="badge badge-warning">v-move</span> class, which is added when items are changing positions. Like the other classes, its prefix will match the value of a provided name attribute and you can also manually specify a class with the <span class="badge badge-warning">move-class</span> attribute.</p>
              <transition-group name="slide" tag="ul" class="list-group mt-3">
                <li
                  class="list-group-item"
                  v-for="(number, index) in numbers"
                  :key="number"
                  @click="removeItem(index)">{{ number }}</li>
              </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import DangerAlert from '@/components/tutanimationtransition14/EleventhComponent/DangerAlert'
import SuccessAlert from '@/components/tutanimationtransition14/EleventhComponent/SuccessAlert'

export default {
  data() {
    return {
      show: false,
      load: true,
      hide: true,
      hidea: true,
      showexit: true,
      alertAnimation: 'animated bounce',
      elementWidth: 100,
      selectedComponent: 'app-success-alert',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter')
      this.elementWidth = 100
      el.style.width = this.elementWidth + 'px'
    },
    enter(el, done) {
      console.log('enter')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px'
        round++;
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)

    },
    afterEnter(el) {
      console.log('afterEnter')
    },
    enterCancelled(el) {
      console.log('enterCancelled')
    },
    beforeLeave(el) {
      console.log('beforeLeave')

      this.elementWidth = 300
      el.style.width = this.elementWidth + 'px'
    },
    leave(el,done) {
      console.log('leave')

      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px'
        round++;
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('afterLeave')
    },
    leaveCancelled(el) {
      console.log('leaveCancelled')
    },
    addItem () {
      const pos = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(pos, 0, this.numbers.length+1)
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    }
  },
  components: {
    'app-success-alert': SuccessAlert,
    'app-danger-alert': DangerAlert
  }
}
</script>
