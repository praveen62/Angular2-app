import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  /*@Output() ingredientAdded = new EventEmitter<Ingredient>();*/
  constructor(private shoppingListService: ShoppingListService) { }

  onAdd() {
     const nameInput = this.nameInputRef.nativeElement.value;
     const amountInput = this.amountInputRef.nativeElement.value;
    /* this.ingredientAdded.emit(new Ingredient(nameInput, amountInput));*/
     this.shoppingListService.addIngredient(new Ingredient(nameInput, amountInput));
  }


  ngOnInit() {
  }

}
