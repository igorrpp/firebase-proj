import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../model/Livro';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-livro-imagem',
  templateUrl: './livro-imagem.component.html',
  styleUrls: ['./livro-imagem.component.css']
})
export class LivroImagemComponent implements OnInit {
  message : string = null;
  livro : Livro = new Livro();
  urlImage : any = "";

  constructor(private Firestore : AngularFirestore,private route : ActivatedRoute,private stg : AngularFireStorage) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(resp=>{

      let id =resp.get('id');
      this.Firestore.collection('livro').doc(id).snapshotChanges().subscribe(data=>{
        this.livro = data.payload.data() as Livro;
        this.livro.id = data.payload.id;
        this.download();
      })
    })
    

    

    

  }
  upload(event){
    let img = event.srcElement.files[0];
    this.stg.storage.ref().child(`livros/${this.livro.id}.jpg`).put(img).then(data=>{
      this.download();
      this.message = ("Atualizado com sucesso!");
    })
  }
  download(){
    this.stg.storage.ref().child(`livros/${this.livro.id}.jpg`).getDownloadURL().then(data=>{
      console.log(data);
            this.urlImage = data;
    })
  }
}
  



