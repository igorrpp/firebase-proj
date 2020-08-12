import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { LivrosViewComponent } from './livros-view/livros-view.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AngularFireModule} from '@angular/fire';
import { AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { LivrosNewComponent } from './livros-new/livros-new.component';
import { LivrosDeleteComponent } from './livros-delete/livros-delete.component';
import { LivrosUpdateComponent } from './livros-update/livros-update.component';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { LivroImagemComponent } from './livro-imagem/livro-imagem.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    LivrosViewComponent,
    LivrosNewComponent,
    LivrosDeleteComponent,
    LivrosUpdateComponent,
    UsuarioNewComponent,
    LivroImagemComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
