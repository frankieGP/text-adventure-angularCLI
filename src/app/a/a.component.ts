import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToLightPage() {
  this.router.navigate(['light']);
};
  goToDarkPage() {
  this.router.navigate(['dark']);
};
}
