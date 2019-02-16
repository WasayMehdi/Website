import { Component, OnInit } from '@angular/core';
import {SmacksPostComponent} from '../smacks-post/smacks-post.component';

@Component({
  selector: 'app-smacks',
  templateUrl: './smacks.component.html',
  styleUrls: ['./smacks.component.css']
})

export class SmacksComponent implements OnInit {

  smacks_list: Review[] = [];

  constructor() { }

  ngOnInit() {

    this.smacks_list.push({
      smacks: true,
      likes: 0,
      dislikes: 0,
      name: 'VTHacks Food'
    });



  }

}
