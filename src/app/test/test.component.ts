import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as _ from "lodash";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  settings = {
   selectMode: 'multi',
   columns: {
     id: {
       title: 'ID',
       filter: false,
     },
     name: {
       title: 'Full Name',
       filter: false,
     },
     username: {
       title: 'User Name',
       filter: false,
     },
     email: {
       title: 'Email',
       filter: false,
     },
   },
 };

 data = [
   {
     id: 1,
     name: 'Leanne Graham',
     username: 'Bret',
     email: 'Sincere@april.biz',
   },
   {
     id: 2,
     name: 'Ervin Howell',
     username: 'Antonette',
     email: 'Shanna@melissa.tv',
   },
   {
     id: 3,
     name: 'Clementine Bauch',
     username: 'Samantha',
     email: 'Nathan@yesenia.net',
   },
   {
     id: 4,
     name: 'Patricia Lebsack',
     username: 'Karianne',
     email: 'Julianne.OConner@kory.org',
   },
   {
     id: 5,
     name: 'Chelsey Dietrich',
     username: 'Kamren',
     email: 'Lucio_Hettinger@annie.ca',
   },
   {
     id: 6,
     name: 'Mrs. Dennis Schulist',
     username: 'Leopoldo_Corkery',
     email: 'Karley_Dach@jasper.info',
   },
   {
     id: 7,
     name: 'Kurtis Weissnat',
     username: 'Elwyn.Skiles',
     email: 'Telly.Hoeger@billy.biz',
   },
   {
     id: 8,
     name: 'Nicholas Runolfsdottir V',
     username: 'Maxime_Nienow',
     email: 'Sherwood@rosamond.me',
   },
   {
     id: 9,
     name: 'Glenna Reichert',
     username: 'Delphine',
     email: 'Chaim_McDermott@dana.io',
   },
   {
     id: 10,
     name: 'Clementina DuBuque',
     username: 'Moriah.Stanton',
     email: 'Rey.Padberg@karina.biz',
   },
   {
     id: 11,
     name: 'Nicholas DuBuque',
     username: 'Nicholas.Stanton',
     email: 'Rey.Padberg@rosamond.biz',
   },
 ];

 source: LocalDataSource;

 constructor() {
   this.source = new LocalDataSource(this.data);
 }

 onSearch(query: string = undefined) {
   console.log(query)
   if(!query)
   {
    this.source.reset();
    return;
   }



   this.source.setFilter([
     // fields we want to inclue in the search
     {
       field: 'id',
       search: query,
     },
     {
       field: 'name',
       search: query,
     },
     {
       field: 'username',
       search: query,
     },
     {
       field: 'email',
       search: query,
     },
   ], false);
   // second parameter specifying whether to perform 'AND' or 'OR' search
   // (meaning all columns should contain search query or at least one)
   // 'AND' by default, so changing to 'OR' by setting false here
 }
 onSelect(event){
  let ar=event.map(_.property('id')) 

  console.log(ar);
 }
}
