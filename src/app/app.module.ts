import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';




// Custom component imports
import { LoginComponent } from './login/login.component';

// Services
import { HttpClientModule } from '@angular/common/http';
import { BloggerservicesService } from './bloggerservices.service';
import { BloglistComponent } from './bloglist/bloglist.component';
import { ShowblogComponent } from './showblog/showblog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BloglistComponent,
    ShowblogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BloggerservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
