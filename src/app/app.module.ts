import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { UserEmailPipeComponent } from './components/user-email.pipe/user-email.pipe.component';
import { ListComponent } from './pages/products/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    LoginComponent,
    MenuComponent,
    UserEmailPipeComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserEmailPipeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
