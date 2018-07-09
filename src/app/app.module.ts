import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MomentModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
