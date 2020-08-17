import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/model/livro';

@Component({
  selector: 'app-livros-update',
  templateUrl: './livros-update.component.html',
  styleUrls: ['./livros-update.component.css']
})
export class LivrosUpdateComponent implements OnInit {

  formGroup : FormGroup;
  message : string = null;

  constructor(
    private formBuilder : FormBuilder, private firestore: AngularFirestore,private route: ActivatedRoute,)  {
      this.iniciarForm();
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(resp=>{

      let id = resp.get('id');
      this.firestore.collection('livro').doc(id).snapshotChanges().subscribe(data=>{
        let livro : Livro = data.payload.data() as Livro;
        this.formGroup.controls['titulo'].setValue(livro.titulo);
        this.formGroup.controls['autor'].setValue(livro.autor);
        this.formGroup.controls['editora'].setValue(livro.editora);
        this.formGroup.controls['preco'].setValue(livro.preco);
        this.formGroup.controls['resumo'].setValue(livro.resumo);

        this.formGroup.controls['cargo'].setValue(livro.cargo);
        this.formGroup.controls['nome'].setValue(livro.nome);
        this.formGroup.controls['cpf'].setValue(livro.cpf);
        this.formGroup.controls['idade'].setValue(livro.idade);
        this.formGroup.controls['salario'].setValue(livro.salario);
    
    
      })
    });
  }

  

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      titulo : ['',[Validators.required]],
      autor: ['', [Validators.required]],
      editora: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      preco: ['', [Validators.required]],

      cargo : ['',[Validators.required]],
      nome : ['',[Validators.required]],
      cpf : ['',[Validators.required]],
      idade : ['',[Validators.required]],
      salario : ['',[Validators.required]],

   

    })
  }

  onSubmit(){
  
    this.route.paramMap.subscribe(resp=>{

      let id = resp.get('id');
  
      this.firestore.collection('livro').doc(id).set(this.formGroup.value).then(() =>{
              this.message = "Atualizado com sucesso!";
            
            }).catch(()=>{
              this.message = "Erro ao atualizar"; 
            })

          })
  }

}