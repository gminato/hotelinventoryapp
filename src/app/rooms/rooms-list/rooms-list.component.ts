import { Component,Input,Output,EventEmitter, ChangeDetectionStrategy,OnChanges,SimpleChanges} from '@angular/core';
import { RoomList } from '../rooms';
// import { EventEmitter }

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {

  @Input()roomList:RoomList[] = [];
  @Output() roomSelected = new EventEmitter<RoomList>()

  ngOnChanges(simpleChange:SimpleChanges) {
    console.log(simpleChange)
  }

  selectRoom(room:RoomList) {
    this.roomSelected.emit(room)
  }
}
