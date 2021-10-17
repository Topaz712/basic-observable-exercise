import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  // constructor(private dataService:DataService){}
  ngOnInit(): void {
    //execute code in here
    this.route.params.subscribe((user)=>{
      console.log(user)
    })

  }

  // this.example.observable.subscribe((data)=>{})

}
