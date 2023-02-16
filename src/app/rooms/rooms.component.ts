import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'BakaSenpai'
  isHidden = false;
  room?:Room = {
    totalRooms:100,
    availableRooms:20,
    bookedRooms:40
  }

  roomList : RoomList[] = [
    {
      roomNo:101,
      roomType: 'Deluxe Room' ,
      amenities: 'Air Conditioner Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 50,
      photos :'https://images.deepai.org/art-image/a4bfcad34c97466880c15b31544cb854/pastel-pink-yellow-blue-stars-graffiti-thumb.jpg' ,
      checkInTime: new Date( '11-Nov-2022'),
      checkOutTime: new Date( '12-Nov-2023'),
    },
    {
      roomNo:102,
      roomType: 'Deluxe Room' ,
      amenities: 'Air Conditioner Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 50,
      photos :'https://images.deepai.org/art-image/a4bfcad34c97466880c15b31544cb854/pastel-pink-yellow-blue-stars-graffiti-thumb.jpg' ,
      checkInTime: new Date( '10-Nov-2023'),
      checkOutTime: new Date( '12-Nov-2023'),
    },
    {
      roomNo:103,
      roomType: 'Private Room' ,
      amenities: 'Air Conditioner Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 50,
      photos :'https://images.deepai.org/art-image/a4bfcad34c97466880c15b31544cb854/pastel-pink-yellow-blue-stars-graffiti-thumb.jpg' ,
      checkInTime: new Date( '10-Nov-2023'),
      checkOutTime: new Date( '12-Nov-2023'),
    },

  ]
  toogle() {
    this.isHidden = !this.isHidden;
  }
}
