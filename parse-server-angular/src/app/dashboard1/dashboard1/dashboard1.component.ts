import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ParsService } from '../../pars.service';

export interface UserData {
  objectId: string;
  username: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt:Date;
}




@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit  {

  displayedColumns: string[] = ['objectId', 'username', 'emailVerified', 'createdAt','updatedAt'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService:ParsService) {
    
    var datas;
    
    //FİLTER ÇALISIYOR AMA NEDENSE SIRALAMA VE İTEM SAYISI EVENTLERİ CALISMIYOR muhtmelen Id lerin 1 den baslamaması ile alakası var.

    this.userService.getUsers().subscribe(
      user=>{
        
        datas=user;
       console.log(datas)
       this.dataSource = new MatTableDataSource(datas);
      },
      error=>console.log("cöp")
     );
     
    // Assign the data to the data source for the table to render
    //console.log(datas);
    this.dataSource =this.dataSource;
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}