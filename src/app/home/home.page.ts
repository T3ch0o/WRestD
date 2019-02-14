import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    title : string = 'Start';
    percent : number = 0;
    radius : number = 100;
    fullTime : string = '00:01:00';

    timer : any = false;
    progress : number = 0;
    minutes : number = 1;
    seconds : number = 0;

    startTime() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = false;
        this.percent = 0;
        this.progress = 0;
        this.title = 'Stop';

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
}
