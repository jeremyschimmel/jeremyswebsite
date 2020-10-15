import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatCheckboxModule,
      MatProgressSpinnerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './modules/components/home/home.component';
import { AboutComponent } from './modules/components/about/about.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { PortfolioComponent } from './modules/components/portfolio/portfolio.component';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
