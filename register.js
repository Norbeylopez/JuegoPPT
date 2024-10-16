class Register{

    constructor(){
       
    }


    registrar(){

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;


        let object = [
            {username, password}
        ];

       

        return object;
    }

    guardarLocalStorange(){
        localStorage.setItem('registro', JSON.stringify(this.registrar()));
        alert("Registro Exitoso Caremonda")


    }

    generarEvento(){
        let btn = document.getElementById('btn-register');
        btn.addEventListener('click', ()=> this.guardarLocalStorange());
    }

}



let register = new Register();

register.generarEvento();