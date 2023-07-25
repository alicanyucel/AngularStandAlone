import { CommonModule } from "@angular/common";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      HttpClientModule,
      RouterModule.forRoot([
        {
          path:"login",
          loadComponent:()=>import("./app/components/login/login.component").then(c=>c.LoginComponent)
        },
        {
          path:"",
          loadComponent:()=>import("./app/components/layouts/layouts.component").then(c=>c.LayoutsComponent),
          children:[
           {

            path:"",
            loadComponent:()=>import("./app/components/home/home.component").then(c=>c.HomeComponent)
           }
            , {
              path:"about",
              loadComponent:()=>import("./app/components/about/about.component").then(c=>c.AboutComponent)
            }
          ]
        },
        {
          path:"**",
        loadComponent:()=>import("./app/components/notfound/notfound.component").then(c=>c.NotfoundComponent)
        }
      ]),
      BrowserModule
    )
  ]
})