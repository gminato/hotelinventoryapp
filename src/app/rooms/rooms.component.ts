import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor() {}
  hotelName = 'BakaSenpai'
  isHidden = false;
  roomList:RoomList[] = []
  roomSelected!:RoomList;
  room?:Room = {
    totalRooms:100,
    availableRooms:20,
    bookedRooms:40
  }
  ngOnInit(): void {   
      this.roomList= [
      {
        roomNo:101,
        roomType: 'Deluxe Room' ,
        amenities: 'Air Conditioner Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos :'https://images.deepai.org/art-image/a4bfcad34c97466880c15b31544cb854/pastel-pink-yellow-blue-stars-graffiti-thumb.jpg' ,
        checkInTime: new Date( '11-Nov-2022'),
        checkOutTime: new Date( '12-Nov-2023'),
        rating:4.32343
      },
      {
        roomNo:102,
        roomType: 'Deluxe Room' ,
        amenities: 'Air Conditioner Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1800,
        photos :'https://images.deepai.org/art-image/a4bfcad34c97466880c15b31544cb854/pastel-pink-yellow-blue-stars-graffiti-thumb.jpg' ,
        checkInTime: new Date( '10-Nov-2023'),
        checkOutTime: new Date( '12-Nov-2023'),
        rating:4.43112
      },
      {
        roomNo:103,
        roomType: 'Private Room' ,
        amenities: 'Air Conditioner Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 5000,
        photos :'https://images.deepai.org/art-image/a4bfcad34c97466880c15b31544cb854/pastel-pink-yellow-blue-stars-graffiti-thumb.jpg' ,
        checkInTime: new Date( '10-Nov-2023'),
        checkOutTime: new Date( '12-Nov-2023'),
        rating:4.52322
      },
  
    ]
  }
  toogle() {
    this.isHidden = !this.isHidden;
  }

  selectedRoom(event:RoomList) {
    this.roomSelected = event
    console.log(event);
  }

  addRoom() {
    let room:RoomList = ({
      roomNo:104,
      roomType: 'Guest Room' ,
      amenities: 'Air Conditioner Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos :'https://images.deepai.org/art-image/a4bfcad34c97466880c15b31544cb854/pastel-pink-yellow-blue-stars-graffiti-thumb.jpg' ,
      checkInTime: new Date( '11-Nov-2022'),
      checkOutTime: new Date( '12-Nov-2023'),
      rating:4.0
    });
    // this.roomList.push(room);
    this.roomList = [...this.roomList,room]
  }
}
