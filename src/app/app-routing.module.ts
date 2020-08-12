import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LivrosComponent } from './livros/livros.component';
import { LivrosViewComponent } from './livros-view/livros-view.component';
import { LogoutComponent } from './logout/logout.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LivrosNewComponent } from './livros-new/livros-new.component';
import { LivrosUpdateComponent } from './livros-update/livros-update.component';
import { LivrosDeleteComponent } from './livros-delete/livros-delete.component';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { LivroImagemComponent } from './livro-imagem/livro-imagem.component';
import { PerfilComponent } from './perfil/perfil.component';


const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {
    path: 'livros', 
    component: LivrosComponent,
  
  },
  {path: 'login/new',
  component: UsuarioNewComponent, 
 },

 {path: 'perfil',
   component: PerfilComponent,
   canActivate : [AngularFireAuthGuard],
   data : {authGuardPipe : redirectToLogin} 
  },
  
  {path: 'logout',
   component: LogoutComponent,
   canActivate : [AngularFireAuthGuard],
   data : {authGuardPipe : redirectToLogin} 
  },
  {
    path: 'livros/new',
   component: LivrosNewComponent,
   canActivate : [AngularFireAuthGuard],
   data : {authGuardPipe : redirectToLogin} 
  },

  {
    path: 'livros/imagem/:id',
   component: LivroImagemComponent,
   canActivate : [AngularFireAuthGuard],
   data : {authGuardPipe : redirectToLogin} 
  },

  
  {path: 'livros/update/:id', component: LivrosUpdateComponent,
  canActivate : [AngularFireAuthGuard],
  data : {authGuardPipe : redirectToLogin} 
 },
  
 {path: 'livros/delete/:id', component: LivrosDeleteComponent,
  canActivate : [AngularFireAuthGuard],
  data : {authGuardPipe : redirectToLogin} 
 },
  {path: 'livros/:id',
   component: LivrosViewComponent,
   canActivate : [AngularFireAuthGuard],
   data : {authGuardPipe : redirectToLogin} 
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
