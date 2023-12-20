import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });
    // const promise = new Promise((resolve, reject) => {
    //   if(false){
    //     resolve('Hola mundo');

    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promise.then((msg) => {
    //   console.log(msg);
    // })
    // .catch((err) => {
    //   console.log('Error en promesa', err)
    // });

    // console.log('Fin del init')
  }

  getUsuarios() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users').then(resp => resp.json())
      .then( res => resolve(res.data));
    });

  }
}
