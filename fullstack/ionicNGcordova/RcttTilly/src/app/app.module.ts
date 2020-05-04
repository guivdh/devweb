import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ComponentsModule } from './components/components.module';

import { EventPageModule } from './pages/event-add/event-add.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { HttpClientModule } from '@angular/common/http';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule  } from '@ionic/storage';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(), 
    IonicModule.forRoot(),
    AppRoutingModule,
    EventPageModule,
    BrowserAnimationsModule,
    DragDropModule,
    ScrollingModule,
    HttpClientModule,
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ComponentsModule,
    UserService,
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
