import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:  string = 'ironman';
  public age:   number = 45;
  public xposition: number = 100;

  public heroNames: string[] = ['ironman',
                                'spiderman',
                                'batman',
                                'aquaman'
                                ];


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }

  // changeHero() :void{
  //   // console.log( this.heroNames.length );
  //   // herosQuantity = heroNames.length;
  //   let i: number;
  //   let x: number;

  //   for (i = 0; i <= this.heroNames.length-1; i++ ) {
  //     if (this.name == this.heroNames[i]){
  //       // console.log(this.heroNames[i] + i);
  //       this.xposition=i;
  //     }
  //   }
  //   console.log(this.xposition);

  // }


  changeHero():void {
    this.name = 'Spiderman';
  }


  changeAge() :void {
    this.age = 25;
  }


  resetForm(): void{
    this.name = 'ironman'
    this.age = 45;
  }



}
