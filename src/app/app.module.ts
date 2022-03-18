import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

/* Designate where the ServerComponent comes from. */

@NgModule({
  declarations: [
    AppComponent,
    /* To use newly crated components under app component you should write them into declarations */
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
