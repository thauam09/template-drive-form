import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    console.log('submitted');
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  ngOnInit(): void {}
}
