const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const duration = document.querySelector('#duration')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let timePassed
const timer = new Timer(startButton, stopButton, duration, {
    onStart(duration) {
        timePassed = duration
    }, 
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / timePassed - perimeter)
        
    }, 
    onComplete(){
        console.log('timer done')
    }
})
