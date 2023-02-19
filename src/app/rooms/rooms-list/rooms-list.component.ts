import { Component,Input,Output,EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';
// import { EventEmitter }

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input()roomList:RoomList[] = [];
  @Output() roomSelected = new EventEmitter<RoomList>()

  selectRoom(room:RoomList) {
    this.roomSelected.emit(room)
  }
}
