import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.page.html',
  styleUrls: ['./group-chat.page.scss'],
})
export class GroupChatPage implements OnInit {

  messageText: any;
  messages = [];

  tempMessages = [
    {
      'text': 'Bonjour',
      'userEmail': 'brondonnono3@gmail.com',
      'date': '10/12/2020 10:24'
    },
    {
      'text': 'Bonjour Brondon',
      'userEmail': 'brondonnono@gmail.com',
      'date': '10/12/2020 10:30'
    },
    {
      'text': 'Cmt u vas?',
      'userEmail': 'brondonnono3@gmail.com',
      'date': '10/12/2020 10:34'
    },
    {
      'text': 'cava et toi?',
      'userEmail': 'brondonnono@gmail.com',
      'date': '10/12/2020 10:40'
    },
    {
      'text': 'ca va merci',
      'userEmail': 'brondonnono3@gmail.com',
      'date': '10/12/2020 10:54'
    },
    {
      'text': 'Et le skul?',
      'userEmail': 'brondonnono@gmail.com',
      'date': '10/12/2020 11:00'
    },
    {
      'text': 'c\'est là et de ton côté?',
      'userEmail': 'brondonnono3@gmail.com',
      'date': '10/12/2020 11:04'
    },
    {
      'text': 'idem',
      'userEmail': 'brondonnono@gmail.com',
      'date': '10/12/2020 10:10'
    }
  ];

  constructor( private user: UserService) { }

  ngOnInit() {
    this.getMessages();
  }

  sendMessage() {
    console.log('messageText: ' + this.messageText);
    this.tempMessages.push(
      {
        'text': this.messageText,
        'userEmail': this.user.userData.email,
        'date': '13/12/10 03:33'
      }
    );
    this.messageText = '';
    console.log(this.tempMessages);
    this.getMessages();
  } 

  getMessages() {
    // ici on a cree les fakes messages
    this.messages = [];
    this.messages = this.tempMessages;
  }


}
