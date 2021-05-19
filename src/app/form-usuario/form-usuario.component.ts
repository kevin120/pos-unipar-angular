import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  formGroup?: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    
    const usuario: any = {};

    this.createForm(usuario);

  }

  salvar() {
    if (this.formGroup?.invalid) {
        alert("Campos inválidos ou não preenchidos!");
        return;
    }
    const usuario = this.formGroup?.getRawValue() as Usuario;

    //chama o service para salvar na API
    //const userSaved = this.serviceUser.save(usuario);

    alert("Pode Salvar!");

    //quem seta esses valores é a API
    usuario.id = 1;
    usuario.dataInsert = new Date();
    usuario.dateUpdate = new Date();
  }

  get userName() {
    return this.formGroup?.get('userName');
  }

  private createForm(usuario: Usuario) {
    this.formGroup = this.formBuilder.group({
      userName: [
        { value: usuario.userName, disabled: usuario.id !== undefined },
        Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)] )
      ],
      password: [
        usuario.password,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      name:[
        usuario.name,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      email: [
        usuario.email,
        Validators.compose([Validators.required, Validators.email])
      ]
    })
  }

}
