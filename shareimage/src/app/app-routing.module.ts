import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImageShareListComponent } from "./image-share-list/image-share-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: 'imageshare', component: ImageShareListComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
