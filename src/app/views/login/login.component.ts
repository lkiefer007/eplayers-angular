import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //  nossas variáveis e métodos
  userModel = new User()
  mensagem = ""
  receberDados() {
    console.log(this.userModel);

    //disparando/send
    this.userService.logarUsuario(this.userModel).subscribe({
      next: (response) => {//sucesso
        console.log ("deu certo");
        console.log (response);
        this.mensagem = "logado com sucesso";
      }, 
        
      error: (err) => {//erro

        console.log ("deu Ruim");
        console.log (err);
        this.mensagem = "ERRO!";
      }
    })

  }

  teste() {
    this.userModel.email = "Coca Cola"
  }

}