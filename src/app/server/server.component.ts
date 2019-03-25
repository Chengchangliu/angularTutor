import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';
import { Dish } from '../../shared/dish.model';
@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offLine';
    counter = 0;
    isLogin = false;
    userName: string;
    cook: string;
    isDish = false;
    final_result: string;
    Dishs: Dish[] = [new Dish('gongbaojiding' ,  ['cucumber', 'chicken', 'peanut']),
                      new Dish('mapodoufu',  ['tofu',  'pork'])];

    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
    new Student('Steve Jobs', 'Computer Science'),
    new Student('Elon Musk', 'Computer Science')];

  currentlist: string [] = new Array(5);

  getServerStatus(){
    return this.serverStatus;
  }

  counterPlus() {
    this.counter ++;
  }

  resetCounter() {
    this.counter = 0;
  }

  login() {
    this.isLogin = true;
  }

  signOut() {
    this.isLogin = false;
  }

  // Event Binding
  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

    adding() {
       this.currentlist.push(this.cook);
    }

    judge() {

       for ( const dish of this.Dishs) {
         this.isDish = true;
           for (const cur_thing of dish.things_list) {
               if ( this.currentlist.indexOf(cur_thing) === -1) {
                  this.isDish = false;
                  break;
               }
           }
           if (this.isDish === true) {
             this.final_result = dish.name;
             return;
           }
       }
       this.final_result = 'no dish can be cooked';
       return;
    }


}
