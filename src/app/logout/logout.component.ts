import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router, private auth: AngularFireAuth) {

   }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    this.auth.signOut().then(data=>{
      this.router.navigate(['/login']);
    })
  }

}
