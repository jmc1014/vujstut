<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>The Third Quiz App</h2>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-sm-8">
                <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import Question from '@/components/tutanimationtransition14/TwelfthComponent/Question'
import Answer from '@/components/tutanimationtransition14/TwelfthComponent/Answer'

export default {
    data () {
        return {
            mode: 'app-question'
        }
    },
    components: {
        'app-question': Question,
        'app-answer': Answer
    },
    methods: {
        answered(isCorrect) {
            if(isCorrect) {
                this.mode = 'app-answer'
            } else {
                this.mode = 'app-question'
                alert('Wrong, try again!')
            }
        }
    }
}
</script>
