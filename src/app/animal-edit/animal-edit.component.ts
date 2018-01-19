import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal-model';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {
  @Input() childSelectedAnimal: Animal;
  @Output() resetSend = new EventEmitter();

  saveAnimalClicked(){
    this.resetSend.emit();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
