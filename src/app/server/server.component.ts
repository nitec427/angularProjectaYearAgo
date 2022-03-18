import {Component} from '@angular/core';


// import {required_thing} from _@angular/library
// Component Decorator must be written
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [".online{color:white}"]
})

export class ServerComponent {
    probability: number ;
    serverID: number;
    status: string = 'offline';
    backCol: string = '';
    
    constructor(){
        this.probability = Math.random();
        this.status = this.probability > 0.5 ? 'online' : 'offline';
        this.serverID = Math.floor(this.probability * 100);
    }
    getServerStatus(){
        return this.status;
    }
    getColor(){
        this.backCol = this.probability>0.5 ? 'green' : 'red';
        return this.backCol;
    }
}