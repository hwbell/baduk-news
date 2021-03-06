import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NewsPageComponent } from "./news-page/news-page.component";
import { ReviewsPageComponent } from "./reviews-page/reviews-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "news",
    component: NewsPageComponent
  },
  {
    path: "reviews",
    component: ReviewsPageComponent
  },
  {
    path: "profile",
    component: ProfilePageComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
