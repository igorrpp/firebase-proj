import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-usuario-new',
  templateUrl: './usuario-new.component.html',
  styleUrls: ['./usuario-new.component.css']
})
export class UsuarioNewComponent implements OnInit {

  formGroup : FormGroup;
  message : string = null;

  constructor(private formBuilder : FormBuilder,
    private router : Router,
    public auth: AngularFireAuth) {
    this.iniciarForm();
  }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      username : ['',[Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]]
    })
  }

  onSubmit(){
    this.auth.createUserWithEmailAndPassword(this.formGroup.controls['username'].value,this.formGroup.controls['password'].value).then(()=>{
      this.router.navigate(['livros']);
    }).catch(()=>{
      this.message = "Erro ao cadastrar";
    })
  }

}
