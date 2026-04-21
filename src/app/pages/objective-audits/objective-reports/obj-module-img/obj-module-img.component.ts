import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obj-module-img',
  templateUrl: './obj-module-img.component.html',
  styleUrls: ['./obj-module-img.component.scss']
})
export class ObjModuleImgComponent implements OnInit {
  filterToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


element = document.getElementById('some-id');
if (element) {
  element.classList.add('some-class');
}

viewMode: number = 2; // 1 = single view, 2 = double view

  images = [
    { title: 'Rear', src: '../../../assets/obj-car.png' },
    { title: 'BSO', src: '../../../assets/obj-seat.png' },
    { title: 'Front', src: '../../../assets/obj-front.png' },
    { title: 'Left Door', src: '../../../assets/obj-door3.png' },
    { title: 'Right Door', src: '../../../assets/obj-door1.png' }
  ];




}
