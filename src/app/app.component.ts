import { Component } from '@angular/core';
import { Animal } from './animal-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zootopia';
  selectedAnimal = null;
  masterAnimals: Animal[] = [
      {species: "Arctic Fox", name: "Moon", age:2, diet: "canivore", location: "Northern trail",  caretakers: 5, sex: "female", likes: "cold", dislikes: "Loud noises"},
      {species: "Ocelot", name: "Prince", age:4, diet: "canivore", location: "Jungel trail",  caretakers: 6, sex: "male", likes: "Murder", dislikes: "stupidity"},
      {species: "Coyote", name: "Trickster", age:100, diet: "omnivorous", location: "Northwest trail?",  caretakers: 10, sex: "unknown", likes: "New things", dislikes: "Complacency"}
  ];
  addedAnimal = {};

  newAnimal(animal: Animal){
    this.masterAnimals.push(animal);
  }

  editAnimal(animal){
    console.log(animal);
    this.selectedAnimal = animal;
  }
  saveAnimal() {
    this.selectedAnimal = null;
  }
}
