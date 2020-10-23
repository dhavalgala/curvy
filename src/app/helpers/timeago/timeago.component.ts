import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timeago',
  templateUrl: './timeago.component.html',
  styleUrls: ['./timeago.component.scss'],
})
export class TimeagoComponent implements OnInit, OnDestroy {

  @Input() time: Date;
  @Input() live = true;
  @Input() interval: number = 60 * 1000;
  @Input() maxPeriod: number = 365 * 24 * 60 * 60 * 1000 * 10;
  @Input() afterMaxDateFormat = 'medium';
  @Input() suffix = 'ago';
  timeago: string;
  private timer: any;

  constructor() { }

  ngOnInit() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (!this.time) {
      console.warn(`time property is required.`);
    } else if (!this.supports(this.time)) {
      console.error(`${this.time} isn't valid date format.`);
    } else {
      this.transform(this.time);
    }
  }

  transform(val) {
    this.timeago = this.getTimeAgo(val);
    if (this.live) {
      this.timer = setInterval(() => {
        this.timeago = this.getTimeAgo(val);
      }, this.interval);
    }
  }

  getTimeAgo(val) {
    const diff: number = new Date().getTime() - new Date(val).getTime();

    if (diff > this.maxPeriod) {
      const datePipe: DatePipe = new DatePipe('');
      return datePipe.transform(val, this.afterMaxDateFormat);
    }

    const period: { [key: string]: number } = {
      second: 1000,
      minute: 60 * 1000,
      hour: 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 1000 * 60,
      month: 30 * 24 * 60 * 1000 * 60,
      year: 365 * 24 * 60 * 1000 * 60
    };
    let i: string,
      j: string;

    for (i in period) {
      if (period[i]) {
        if (diff < period[i]) {
          return this.makeupStr(j || 'second', Math.round(diff / (period[j] || 1000)));
        }
        j = i;
      }
    }
    return this.makeupStr(i, Math.round(diff / period[i]));
  }

  makeupStr(unit: string, n: number) {
    return n + ' ' + unit + (n !== 1 ? 's' : '') + ' ' + this.suffix;
  }

  supports(obj: any): boolean {
    // return isDate(obj) || isNumber(obj)
    return true;
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
