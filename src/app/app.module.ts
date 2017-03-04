import { ResultPage } from '../pages/result/result';
import { GiphyProvider } from '../providers/giphy';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ResultPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, GiphyProvider]
})
export class AppModule { }
