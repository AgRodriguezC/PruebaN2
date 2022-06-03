function validar()
        {
            var nombre = document.formulario.txt_nombre.value
            var apellidos = document.formulario.txt_apellidos.value
            var rut = document.formulario.txt_rut.value
            var telefono = document.formulario.int_telefono.value
            var gmail = document.formulario.txt_gmail.value

            if (nombre.length <3)
            {
                alert("El Nombre debe tener al menos 3 caracteres")
                document.formulario.txt_nombre.focus()
                return false
            }
            if (apellidos.length <3)
            {
                alert("Su apellido(s) debe contener al menos 3 caracteres")
                document.formulario.txt_apellidos.focus()
                return false
            }
            if (rut<9 || rut>10 || rut.indexOf('-')<0 || rut.indexOf('.')>0)
            {
                alert("El rut debe tener entre 9 y 10 caracteres, debe contener un guión y no debe contener puntos")
                document.formulario.txt_rut.focus()
                return false
            }
            if (telefono.substring(0,1)!="9" || telefono.indexOf('+')>0 || telefono.indexOf('-')>0)
            {
                alert("El teléfono debe comenzar con 9 sin + ni guión")
                document.formulario.int_telefono.focus()
                return false
            }
            if (gmail.indexOf('@')<0 || gmail.indexOf('.')<0 || gmail.length <3)
            {
                alert("El correo debe poseer al menos 3 caracteres un '@' y un punto ")
                document.formulario.txt_gmail.focus()
                return false
            }
            if (document.getElementById("aceptocondiciones_chk").checked==false)
            {
                alert("Debe aceptar los terminos y servicios para completar esta acción")
                document.getElementById("<strong>aceptocondiciones_chk</strong>").focus()
                return false
                {
                    return true
                }
            }
            else
            {
                alert("Datos Ingresados"+ '\n'+"Nombre: "+nombre+'\n'+"Apellido(s): "+apellidos+'\n'+"Rut: "+rut+'\n'+"Teléfono: "+telefono+'\n'+"Gmail: "+gmail)
            }
        }