import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {Perfil} from '../model/perfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  formGroup : FormGroup;
  idUser : string = "";
  message : string = null;
  perfil : Perfil = new Perfil();

  constructor(private formBuilder : FormBuilder,
    private auth : AngularFireAuth,
    private firestore : AngularFirestore) {
    this.iniciarForm();
  }


    ngOnInit(): void {
      this.auth.currentUser.then(data=>{
        this.idUser = data.uid;
        this.dadosPerfil();
      })
    }

    dadosPerfil(){
      this.firestore.collection('perfil').doc(this.idUser).snapshotChanges().subscribe(data=>{
        
        if(data.payload.data()!==undefined){
  
          this.perfil = data.payload.data() as Perfil;
         
          this.formGroup.controls['nome'].setValue(this.perfil.nome);
          this.formGroup.controls['telefone'].setValue(this.perfil.telefone);
          this.formGroup.controls['dataNascimento'].setValue(this.perfil.dataNascimento);
          this.formGroup.controls['cpf'].setValue(this.perfil.cpf);
        }      
  
      })
    }

    iniciarForm(){
      this.formGroup= this.formBuilder.group({
        nome : ['',[Validators.required]],
        telefone: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        cpf: ['', [Validators.required]]   
     
  
      })
    }

    atualiza(){
    
      this.firestore.collection('perfil').doc(this.idUser)
        .set(this.formGroup.value).then(data=>{
          this.message = "Atualizado com sucesso";
      })
    }
}