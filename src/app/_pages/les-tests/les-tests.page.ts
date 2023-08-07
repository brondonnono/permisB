import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-les-tests',
  templateUrl: './les-tests.page.html',
  styleUrls: ['./les-tests.page.scss'],
})
export class LesTestsPage implements OnInit {

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {}

}
