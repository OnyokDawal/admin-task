import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private httpClient:HttpClient){}

  skills(){
    this.httpClient.get(`http://13.75.89.123/api/skill`)
    .subscribe(
        (data: any[]) =>{
            console.log(data)
        });
    }
}

