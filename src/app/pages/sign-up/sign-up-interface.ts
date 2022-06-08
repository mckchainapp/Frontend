export interface EmpresaSolicitud {
    codigounicoMinera: string;
    rucMinera: string;
    emailMinera: string;
  }

  export interface EmpresaSignup {
    utilitytokenUsuario: string;
    usernameUsuario: string;
    passwordUsuario: string;
  }
  
  export interface EncargadoSignup {
    utilitytokenUsuario: string;
    nombreUsuario: string;
    apellidoUsuario: string;
    usernameUsuario: string;
    passwordUsuario: string;
  }
  
  export interface OperarioSignup {
    utilitytokenUsuario: string;
    nombreUsuario: string;
    apellidoUsuario: string;
    usernameUsuario: string;
    passwordUsuario: string;
  }

  export interface CompradorSignup {
    nombreUsuario: string;
    emailUsuario: string;
    rucUsuario: string;
    apellidoUsuario: string;
    usernameUsuario: string;
    passwordUsuario: string;
  }
  