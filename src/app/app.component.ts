import { Component, ViewChild, ViewContainerRef,AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';

  @ViewChild('user' , {read:ViewContainerRef}) vcr!:ViewContainerRef;
  @ViewChild('name') name!:ElementRef;
  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent)
    console.log("cf",componentRef)
    console.log("nam",this.name);
    this.name.nativeElement.innerText = 'Inside native element'
  }
}
