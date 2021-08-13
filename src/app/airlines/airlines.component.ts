import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'scroll-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css'],
})
export class AirlinesComponent implements OnInit, AfterViewInit {
  sub!: Subscription;
  observer:any;
  airlines: any=[];
  totalPages!: number;
  currentPages: number = 0;
  @ViewChildren('lastList', { read: ElementRef })
  lastList!: QueryList<ElementRef>;

  constructor(private _airlineService: AirlineService,private _spinner:NgxSpinnerService) {}

  ngOnInit(): void {
    this.getAirlines();
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.lastList.changes.subscribe((d)=>{
      console.log(d);
      if(d.last){
        this.observer.observe(d.last.nativeElement);
      }
    });
  }

  getAirlines() {
    this._spinner.show();
    this.sub = this._airlineService.getPage(0).subscribe((d) => {
      this._spinner.hide();
      this.totalPages = d.totalPages;
      d.data.forEach((element:any) => {
        this.airlines.push(element);
      });
    });
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if(this.currentPages < this.totalPages){
          this.currentPages++;
          this.getAirlines();
        }
      }
    }, options);
  }
}
