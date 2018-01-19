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

  filterByAge: string = "all animals";

  onChange(ageOption) {
    this.filterByAge = ageOption;
  }

  editClicked(whichAnimal: Animal){
    this.clickSender.emit(whichAnimal);
  }

}
