import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Livro }  from 'src/app/model/Livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  itens: any[ ] = [];

  constructor(private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('funcionarios').snapshotChanges().subscribe(data=>{
      console.log(data);

      data.map(obj=>{
        let livro : Livro =  obj.payload.doc.data() as Livro;
        livro.id = obj.payload.doc.id;
        this.itens.push(livro);

      })

      console.log(this.itens);
    })
  }

}
