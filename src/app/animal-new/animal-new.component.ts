import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal-model';


@Component({
  selector: 'app-animal-new',
  templateUrl: './animal-new.component.html',
  styleUrls: ['./animal-new.component.css']
})

export class AnimalNewComponent implements OnInit {
  @Input() childNewAnimal:Animal;
  @Output() sendNew = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitForm(species, name, age, diet, location, caretakers, sex, likes, dislikes){
    let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.sendNew.emit(newAnimalToAdd);
  }

}
