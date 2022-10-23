import { NgModule } from '@angular/core';
import { contadorComponent } from './Contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        contadorComponent
    ],
    exports: [
        contadorComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule {}