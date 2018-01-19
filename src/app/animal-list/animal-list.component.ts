import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from "../animal-model";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  @Input() childAnimals:Animal[];
  @Output() clickSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  editClicked(whichAnimal: Animal){
    console.log(whichAnimal);
    this.clickSender.emit(whichAnimal);
  }
  ageColor(animal){
    if (animal.age >= 10) {
      return "oldy"
    } else if (animal.age <= 2) {
      return "baby"
    } else {
      return "normie"
    }
  }
}
