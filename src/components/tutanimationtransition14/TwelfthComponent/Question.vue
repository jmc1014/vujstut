<template>
    <div class="card">
        <div class="card-header">
           <h3>{{ question }}</h3>
        </div>
        <div class="card-body row">
            <div class="col-12 col-md-6 text-center mt-3">
                <button class="btn btn-primary btn-block btn-lg" @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</button>
            </div>
            <div class="col-12 col-md-6 text-center mt-3">
                <button class="btn btn-primary btn-block btn-lg" @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</button>
            </div>
            <div class="col-12 col-md-6 text-center mt-3">
                <button class="btn btn-primary btn-block btn-lg" @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</button>
            </div>
            <div class="col-12 col-md-6 text-center mt-3">
                <button class="btn btn-primary btn-block btn-lg" @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</button>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
    const MODE_ADDITON = 1
    const MODE_SUBTRACTION = 2
    
    export default {
        data() {
            return {
                question: 'Oops an error ocurred:/',
                btnData: [
                    {correct: true, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                ]
            }
        },
        methods: {
            generateQuestion() {
                const firstNumber = this.generateRandomNumber(1, 100)
                const secondNumber = this.generateRandomNumber(1, 100)
                const modeNumber = this.generateRandomNumber(1, 2)

                let correctAnswer = 0

                switch (modeNumber) {
                    case MODE_ADDITON:
                        correctAnswer = firstNumber + secondNumber;
                        this.question = `What's ${firstNumber} + ${secondNumber}?`
                        break;

                    case MODE_SUBTRACTION:
                        correctAnswer = firstNumber - secondNumber;
                        this.question = `What's ${firstNumber} - ${secondNumber}?`
                        break;
                
                    default:
                        correctAnswer = 0
                        this.question = 'Oops, an Error occured:/'
                        break;
                }
                this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
                this.btnData[0].correct = false
                this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
                this.btnData[1].correct = false
                this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
                this.btnData[2].correct = false
                this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
                this.btnData[3].correct = false

                const correctButton = this.generateRandomNumber(0,3)
                this.btnData[correctButton].correct = true
                this.btnData[correctButton].answer = correctAnswer
            },
            generateRandomNumber(min, max, except) {
                const rndNumber = Math.round(Math.random() * (max - min)) + min
                console.log(min, max. rndNumber)
                if(rndNumber === except) {
                    return this.generateRandomNumber(min, max, except)
                }
                return rndNumber
            },
            onAnswer(isCorrect) {
                this.$emit('answered', isCorrect)
            }
        }, 
        created() {
            this.generateQuestion()
        }
    }
</script>
