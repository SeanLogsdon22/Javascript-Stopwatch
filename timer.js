class Timer {
    constructor(startButton, stopButton, duration, callback) {
        this.startButton = startButton
        this.stopButton = stopButton
        this.duration = duration
        if(callback) {
            this.onStart = callback.onStart
            this.onTick = callback.onTick
            this.onComplete = callback.onComplete
        }

        this.startButton.addEventListener('click', this.start)
        this.stopButton.addEventListener('click', this.pause)
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.interval = setInterval(this.tick, 5)
    }
    pause = () => {
        clearInterval(this.interval)
    }
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause()
            if (this.onComplete){
                this.onComplete()
            }
        } else {
        this.timeRemaining = this.timeRemaining - .005
        if (this.onTick) {
            this.onTick(this.timeRemaining)
        }
        }
    }
    get timeRemaining() {
        return parseFloat(this.duration.value)
    }
    set timeRemaining(time) {
        this.duration.value = time.toFixed(3)
    }

}