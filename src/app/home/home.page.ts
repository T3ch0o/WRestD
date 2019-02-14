import { Component } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    title : string = '';
    percent : number = 0;
    radius : number = 100;
    fullTime : string = '00:01:00';

    timer : any = false;
    progress : number = 0;
    minutes : number = 1;
    seconds : number = 0;

    elapsed : any = {
        h: '00',
        m: '00',
        s: '00'
    };

    overallTimer : any = false;

    constructor(private insomnia : Insomnia) {

    }

    startTime() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        if (!this.overallTimer) {
            this.title = 'Workout';
            this.progressTimer();
            this.insomnia.keepAwake();
        }

        this.timer = false;
        this.percent = 0;
        this.progress = 0;

        const timeSplit = this.fullTime.split(':');
        this.minutes = parseInt(timeSplit[1]);
        this.seconds = parseInt(timeSplit[2]);

        const totalSeconds = Math.floor(this.minutes * 60) + this.seconds;

        this.timer = setInterval(() => {
            if (this.percent === this.radius) {
                clearInterval(this.timer);
            }

            this.percent = Math.floor((this.progress / totalSeconds) * 100);
            this.progress++;
        }, 1000);
    }

    changeSession() {
        if (this.timer) {
            if (this.title === 'Workout') {
                this.title = 'Rest';
            } else {
                this.title = 'Workout';
            }

            this.startTime();
        }
    }

    progressTimer() {
        const countDownDate = new Date();

        this.overallTimer = setInterval(() => {
            const now = new Date().getTime();
            const distance = now - countDownDate.getTime();

            this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.elapsed.s = Math.floor((distance % (1000 * 60)) / 1000);

            this.elapsed.h = this.pad(this.elapsed.h, 2);
            this.elapsed.m = this.pad(this.elapsed.m, 2);
            this.elapsed.s = this.pad(this.elapsed.s, 2);
        }, 1000);
    }

    pad(number : number, size : number) {
        let s = number + '';

        while (s.length < size) {
            s = '0' + s;
        }

        return s;
    }

    stopTime() {
        clearInterval(this.timer);
        clearInterval(this.overallTimer);
        this.overallTimer = false;
        this.timer = false;
        this.percent = 0;
        this.progress = 0;
        this.elapsed = {
            h: '00',
            m: '00',
            s: '00'
        };

        this.title = '';
        this.insomnia.allowSleepAgain();
    }
}
