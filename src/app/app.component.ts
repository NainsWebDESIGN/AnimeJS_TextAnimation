import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("text") Text: ElementRef;
  title = 'app';
  constructor() { }
  ngOnInit() {
    this.Text.nativeElement.innerHTML = this.Text.nativeElement.firstChild.textContent.replace(/\S/g, "<span>$&</span>");
  }
  ngAfterViewInit() {
    anime.timeline({ loop: true })
      .add({
        targets: '.text span',
        translateY: [-600, 0],
        scale: [10, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: anime.stagger(100),
      })

      .add({
        targets: '.text span',
        translateX: [0, -1000],
        scale: [1, 1],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: anime.stagger(100)
      })

      .add({
        targets: '.text span',
        translateX: [1000, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: anime.stagger(100)
      })

      .add({
        targets: '.text span',
        translateX: [0, 0],
        scale: [1, 50],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: anime.stagger(100)
      })
  }
}
