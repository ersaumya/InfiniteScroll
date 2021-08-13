import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { IConfig } from './utility/IConfig';
import { environment } from 'src/environments/environment';
import { APP_CONFIG } from './utility/Config';

const Config: IConfig = {
  apiEndPoint: environment.apiEndPoint
};

@NgModule({
  declarations: [AppComponent, AirlinesComponent],
  imports: [FormsModule,BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: APP_CONFIG, useValue: Config }],
  bootstrap: [AppComponent],
})
export class AppModule {}
