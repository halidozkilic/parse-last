import { Component, OnInit } from '@angular/core';
import { ParsService } from '../../pars.service';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})




export class Dashboard2Component implements OnInit {

  

  constructor(private userService:ParsService) {
    
   }

  ngOnInit(): void {
  }

}
