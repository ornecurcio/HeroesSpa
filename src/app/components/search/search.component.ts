import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from "../../services/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @Input() heroe:any={}; 
  @Input() index:number=-1; 
  heroes:any[]=[]; 
  txt:string = ""; 

  constructor( private _activatedRoute: ActivatedRoute, 
               private _heroesService:HeroesService, 
               private _router:Router) { 
                }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
      this.txt=params['txt']; 
      this.heroes=this._heroesService.searchHeroes(params['txt']); 
      console.log(this.heroes); 
    }); 
  }

  verHeroe( ){
    this._router.navigate(['/heroe',this.index]); 
  }
  

}
