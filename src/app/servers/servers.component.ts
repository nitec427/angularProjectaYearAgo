import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverMessage: string = 'Server has yet to be created';
  serverName: string = "None";
  serverCreated: boolean = false;
  servers= ["Minecraft","COD","Assassin's Creed"];
  constructor() { 
    // When the server is initialized, do the tasks speficied below
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }
  onMouseClick(){
this.serverMessage = 'Server was created with your click. The name of your serve is: ' + this.serverName;
this.serverCreated = true;
this.servers.push(this.serverName);
  }
  onServerNameChange(event: Event /* Capture the event by $event in html file */){
this.serverName = (<HTMLInputElement>event.target).value;

  }
}
