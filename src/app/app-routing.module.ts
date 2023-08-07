import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./_pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'les-tests',
    loadChildren: () => import('./_pages/les-tests/les-tests.module').then( m => m.LesTestsPageModule)
  },
  {
    path: 'les-panneaux',
    loadChildren: () => import('./_pages/les-panneaux/les-panneaux.module').then( m => m.LesPanneauxPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./_pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./_pages/forgotPassword/forgotPassword.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'les-cours',
    loadChildren: () => import('./_pages/_cours/les-cours/les-cours.module').then( m => m.LesCoursPageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./_pages/edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  },
  {
    path: 'detail-page',
    loadChildren: () => import('./_pages/_cours/detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  },
  {
    path: 'les-actualites',
    loadChildren: () => import('./_pages/les-actualites/les-actualites.module').then( m => m.LesActualitesPageModule)
  },
  {
    path: 'actualite-detail',
    loadChildren: () => import('./_pages/actualite-detail/actualite-detail.module').then( m => m.ActualiteDetailPageModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./_pages/a-propos/a-propos.module').then( m => m.AProposPageModule)
  },
  {
    path: 'signification',
    loadChildren: () => import('./_pages/signification/signification.module').then( m => m.SignificationPageModule)
  },
  {
    path: 'parametres',
    loadChildren: () => import('./_pages/parametres/parametres.module').then( m => m.ParametresPageModule)
  },
  {
    path: 'sous-menu',
    loadChildren: () => import('./_pages/_cours/sous-menu/sous-menu.module').then( m => m.SousMenuPageModule)
  },
  {
    path: 'simple-chat',
    loadChildren: () => import('./_pages/simple-chat/simple-chat.module').then( m => m.SimpleChatPageModule)
  },
  {
    path: 'group-chat',
    loadChildren: () => import('./_pages/group-chat/group-chat.module').then( m => m.GroupChatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
