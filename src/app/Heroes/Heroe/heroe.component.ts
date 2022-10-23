import { Component } from "@angular/core";
import { VirtualTimeScheduler } from "rxjs";

@Component({
    selector: 'app-Heroe',
    templateUrl: 'heroe.component.html'
})

export class heroeComponent{
    nombre: String = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():String{
        return ` ${this.nombre} - ${this.edad} `;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 30;
    }

}