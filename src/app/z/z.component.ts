import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-z',
  templateUrl: './z.component.html',
  styleUrls: ['./z.component.css']
})
export class ZComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWaterPage() {
  this.router.navigate(['water']);

};
goToSolidPage() {
this.router.navigate(['solid']);

};
}
