import { Component, OnInit } from '@angular/core';
import { ParsService } from '../../pars.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})




export class Dashboard2Component implements OnInit {

  loginForm:FormGroup =new FormGroup({
    caseType:new FormControl(null,Validators.required),
    caseOrder:new FormControl(null,Validators.required),
    belongTo:new FormControl(null,Validators.required),
    file:new FormControl(null,Validators.required)
  })

  public cases;
  selectedCase;

  constructor(private userService:ParsService) {
    this.userService.getCases().subscribe(
      user=>{
        
        this.cases=user;
        
      },
      error=>console.log("hata")
     );
    
   }

   parseUser;
   show=false;
   deleteCase(cased){
     this.userService.deleteCase(cased);
   }
   editCase(id){
    this.selectedCase=id;
    this.show=false;
   }
   saveChanges(selectedone){
     
     this.userService.updateCase(selectedone,selectedone.objectId)
   }
   detail(id){
    this.show=true;
     console.log(id);
     this.selectedCase=null;
     this.userService.getUserById(id).subscribe(
      user=>{
        
        this.parseUser=user;
        console.log(this.parseUser)
      },
      error=>console.log("hata")
     );
     
   }
   addg=false;

   add(slect){
    this.userService.createCase(slect);
   }
  ngOnInit(): void {
    this.userService.getCases().subscribe(
      user=>{
         
        this.cases=user;
        
      },
      error=>console.log("hata")
     );
  }

}
