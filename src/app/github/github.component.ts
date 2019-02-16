import { Component, OnInit } from '@angular/core';
import {LandingSubject} from '../landing/landing-subject';
import {GithubInfo} from './github-info';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  githubPages: GithubInfo[] = [];

  constructor() { }

  ngOnInit() {

    this.githubPages = [
      {
        name: 'Clean Machine',
        link: 'https://github.com/SyedMehdi2/CleanMachine',
        descr: [
          'Application that attempts to "clean" songs from their profanity automatically',
          'Also provides an in-built music player and GUI',
          'Made using Java, Java\'s sound API, substance look & feel'
        ]
      },
      {
        name: 'Reflection Framework',
        link: 'https://github.com/WasayMehdi/ReflectionFramework/tree/master/src/com/arteropk',
        descr: [
          'A utility to help me hook onto Jar classes using Java\'s reflection',
          'Used to help me figure out potential exploits people can abuse in our client when working on the ArteroPK project,' +
          ' however the full source code for ArteroPK is not available publicly',
          'Some of the specifics for the ArteroPK client were stripped to leave a more general reflection utility'
        ]
      },
      {
        name: 'Clock',
        link: 'https://github.com/WasayMehdi/clock/tree/master/src',
        descr: [
          'A simple application which will keep a traditional clock in the background of your desktop'
        ]
      }
    ];

  }

}
