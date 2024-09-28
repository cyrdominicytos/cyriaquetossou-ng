import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./pages/resume/resume.component";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {ServicesPortfoliComponent} from "./pages/services-portfoli/services-portfoli.component";
import {NgModule} from "@angular/core";

 export const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'services', component: ServicesPortfoliComponent },
  { path: 'app', component: AppComponent },
  { path: '**', component:  PageNotFoundComponent },  // Wildcard route for a 404 page
];


/*const routerOptions: ExtraOptions  = {
  scrollPositionRestoration: 'enabled', // Restore la position de scroll
  anchorScrolling: 'enabled',           // Active le scroll vers l'ancre
  scrollOffset: [0, 64]                 // Décalage de scroll si vous avez une navbar fixe (ajustez selon votre besoin)
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
