import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any={}; 
  @Input() index:number=0; 
  @Output() heroeSelected:EventEmitter<number>; 

  constructor(private _router:Router) { 
    this.heroeSelected=new EventEmitter(); 
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index); 
     this._router.navigate(['/heroe',this.index]); 
    //this.heroeSelected.emit(this.index); 
  }
}
