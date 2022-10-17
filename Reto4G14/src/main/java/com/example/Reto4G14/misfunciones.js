function leerClientes(){
    //FUNCION GET
        $.ajax({    
            url : 'http://144.22.53.225:8080/api/Client/all',
            type : 'GET',
            dataType : 'json',
    
            success : function(clientes) {
                   let cs=clientes.items;
                   $("#listaClientes").empty();
                   for(i=0;i<cs.length;i++){
                       $("#listaClientes").append(cs[i].id+" "+cs[i].email+" "+cs[i].password+" <b>"+cs[i].name+"</b>"+cs[i].age);
                       $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
                   
                   }
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
        });
    }
    
    
    function guardarCliente() {
        let idCliente=$("#idCliente").val();
        let mailCliente=$("#mailCliente").val();
        let passCliente=$("#passCliente").val();
        let nombre=$("#nombreCliente").val();
        let edad=$("#edadCliente").val();
    
        let data={
            id:idCliente,
            email:mailCliente,
            password:passCliente,
            name:nombre,
            age:edad
        };
    
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
    
        $.ajax({    
            url : 'http://144.22.53.225:8080/api/Client/save',
            type : 'POST',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                   $("#idCliente").val("");
                $("#mailCliente").val("");
                $("#passCliente").val("");
                $("#nombreCliente").val("");
                $("#edadCliente").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    
    }
    
    
    function editarCliente(){
        let idCliente=$("#idCliente").val();
        let mailCliente=$("#mailCliente").val();
        let passCliente=$("#passCliente").val();
        let nombre=$("#nombreCliente").val();
        let edad=$("#edadCliente").val();

        let data={
            id:idCliente,
            email:mailCliente,
            password:passCliente,
            name:nombre,
            age:edad
        };
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
        $.ajax({    
            url : 'http://144.22.53.225:8080/api/Client/update',
            type : 'PUT',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                $("#idCliente").val("");
                $("#mailCliente").val("");
                $("#passCliente").val("");
                $("#nombreCliente").val("");
                $("#edadCliente").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    }
    
    function borrarCliente(idCliente){
        let data={
            id:idCliente
        };
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
        $.ajax({    
            url : 'http://144.22.53.225:8080/api/Client/{1}',
            type : 'DELETE',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                $("#idCliente").val("");
                $("#mailCliente").val("");
                $("#passCliente").val("");
                $("#nombreCliente").val("");
                $("#edadCliente").val("");

            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    }
    
    function leerCabana(){
        //FUNCION GET
            $.ajax({    
                url : 'http://144.22.53.225:8080/api/Cabin/all',
                type : 'GET',
                dataType : 'json',
        
                success : function(cabana) {
                       let cs=cabana.items;
                       $("#listaCabana").empty();
                       for(i=0;i<cs.length;i++){
                           $("#listaCabana").append(cs[i].id+" <b>"+cs[i].brand+"</b> "+cs[i].rooms+" "+cs[i].category_id +" "+cs[i].name);
                           $("#listaCabana").append("<button onclick='borrarCabana("+cs[i].id+")'>Borrar</button><br>");
                       
                       }
                },
                error : function(xhr, status) {
                    alert('ha sucedido un problema');
                }
            });
        }
    
        function guardarCabana() {
            let idCabana=$("#idCabana").val();
            let sucursal=$("#sucursalCabana").val();
            let numero=$("#numeroCabana").val();
            let categoria=$("#categoriaCabana").val();
            let nombre=$("#nombreCabana").val();
        
            let data={
     
                id:idCabana,
                brand: sucursal,
                rooms:numero,
                category_id:categoria,
                name:nombre,
            };
        
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
        
        
            $.ajax({    
                url : 'http://144.22.53.225:8080/api/Cabin/save',
                type : 'POST',
             //   dataType : 'json',
                data:dataToSend,
                contentType:'application/json',
                success : function(pepito) {
                    $("#idCabana").val("");
                    $("#sucursalCabana").val("");
                    $("#numeroCabana").val("");
                    $("#categoriaCabana").val("");
                    $("#nombreCabana").val("");
                },
                error : function(xhr, status) {
               //     alert('ha sucedido un problema');
                },
                complete: function(){
                    leerCabana();
                }
            });
        
        
        }
        function editarCabana(){
            let idCabana=$("#idCabana").val();
            let sucursal=$("#sucursalCabana").val();
            let numero=$("#numeroCabana").val();
            let categoria=$("#categoriaCabana").val();
            let nombre=$("#nombreCabana").val();
        
            let data={
                id:idCabana,
                brand: sucursal,
                rooms:numero,
                category_id:categoria,
                name:nombre,
            };
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
            $.ajax({    
                url : 'http://144.22.53.225:8080/api/Cabin/update',
                type : 'PUT',
             //   dataType : 'json',
                data:dataToSend,
                contentType:'application/json',
                success : function(pepito) {
                    $("#idCabana").val("");
                    $("#sucursalCabana").val("");
                    $("#numeroCabana").val("");
                    $("#categoriaCabana").val("");
                    $("#nombreCabana").val("");
                },
                error : function(xhr, status) {
               //     alert('ha sucedido un problema');
                },
                complete: function(){
                    leerCabana();
                }
            });
        
        }
        
        function borrarCabana(idCabana){
            let data={
                id:idCabana
            };
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
            $.ajax({    
                url : 'http://144.22.53.225:8080/api/Cabin/{id}',
                type : 'DELETE',
             //   dataType : 'json',
                data:dataToSend,
                contentType:'application/json',
                success : function(pepito) {
                    $("#idCabana").val("");
                    $("#sucursalCabana").val("");
                    $("#numeroCabana").val("");
                    $("#categoriaCabana").val("");
                    $("#nombreCabana").val("");
                },
                error : function(xhr, status) {
               //     alert('ha sucedido un problema');
                },
                complete: function(){
                    leerCabana();
                }
            });
        
        }
function leerCategoria(){
    //FUNCION GET
    $.ajax({
        url : 'http://144.22.53.225:8080/api/Category/all',
        type : 'GET',
        dataType : 'json',

        success : function(categoria) {
            let cs=categoria.items;
            $("#categoria").empty();
            for(i=0;i<cs.length;i++){
                $("#listaCategoria").append(cs[i].id+" <b>"+cs[i].name+"</b>" +cs[i].description +"" +cs[i].cabins);
                $("#listaCategoria").append("<button onclick='borrarCategoria("+cs[i].id+")'>Borrar</button><br>");

            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function guardarCategoria() {
    let idcategoria=$("#idcategoria").val();
    let name=$("#nombreCategoria").val();
    let descripcion=$("#descCategoria").val();
    let cabinCate=$("#cabanaCategoria").val();
    let data={
        id:idcategoria,
        name:name,
        description:descripcion,
        cabins:cabinCate,

    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);


    $.ajax({
        url : 'http://144.22.53.225:8080/api/Category/save',
        type : 'POST',
        //   dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(pepito) {
            $("#idCategoria").val("");
            $("#nombreCategoria").val("");
            $("#descCategoria").val("");
            $("#cabanaCategoria").val("");
        },
        error : function(xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function(){
            leerCategoria();
        }
    });


}


function editarCategoria(){
    let idcategoria=$("#idcategoria").val();
    let name=$("#nombreCategoria").val();
    let descripcion=$("#descCategoria").val();
    let cabinCate=$("#cabanaCategoria").val();
    let data={
        id:idcategoria,
        name:name,
        descripcion:descripcion,
        cabins:cabinCate,

    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url : 'http://144.22.53.225:8080/api/Category/update',
        type : 'PUT',
        //   dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(pepito) {
            $("#idCategoria").val("");
            $("#nombreCategoria").val("");
            $("#descCategoria").val("");
            $("#cabanaCategoria").val("");
        },
        error : function(xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function(){
            leerCategoria();
        }
    });

}

function borrarCategoria(idcategoria){
    let data={
        id:idcategoria
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url : 'http://144.22.53.225:8080/api/Category/{id}',
        type : 'DELETE',
        //   dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(pepito) {
            $("#idCategoria").val("");
            $("#nombreCategoria").val("");
            $("#descCategoria").val("");
            $("#cabanaCategoria").val("");
        },
        error : function(xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function(){
            leerCategoria();
        }
    });

}


function leerReserva(){
    //FUNCION GET
    $.ajax({
        url : 'http://144.22.53.225:8080/api/Reservation/all',
        type : 'GET',
        dataType : 'json',

        success : function(reservas) {
            let cs=reservas.items;
            $("#reservas").empty();
            for(i=0;i<cs.length;i++){
                $("#listaReservas").append(cs[i].id+" <b>"+cs[i].start+"</b>" +cs[i].devolution +" "+cs[i].status +" " +cs[i].cabins+""+cs[i].clients);
                $("#listaReservas").append("<button onclick='borrarReserva("+cs[i].id+")'>Borrar</button><br>");

            }
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function guardarReserva() {
    let idReservation=$("#idReservacion").val();
    let startDate=$("#inicioReservacion").val();
    let devolutionDate=$("#finReservacion").val();
    let status=$("#statusReservacion").val();
    let cabinReserva=$("#cabanaReservacion").val();
    let clientReserva=$("#clienteReseravcion").val();
    let data={
        id:idReservation,
        start:startDate,
        devolution:devolutionDate,
        status:status,
        cabins:cabinReserva,
        clients:clientReserva,

    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);


    $.ajax({
        url : 'http://144.22.53.225:8080/api/Reservation/save',
        type : 'POST',
        //   dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(pepito) {
            $("#idReservacion").val("");
            $("#inicioReservacion").val("");
            $("#finReservacion").val("");
            $("#statusReservacion").val("");
            $("#cabanaReservacion").val("");
            $("#clienteReseravcion").val("");
        },
        error : function(xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function(){
            leerReserva();
        }
    });


}


function editarReserva(){
    let idReservation=$("#idReservacion").val();
    let startDate=$("#inicioReservacion").val();
    let devolutionDate=$("#finReservacion").val();
    let status=$("#statusReservacion").val();
    let cabinReserva=$("#cabanaReservacion").val();
    let clientReserva=$("#clienteReseravcion").val();
    let data={
        id:idReservation,
        start:startDate,
        devolution:devolutionDate,
        status:status,
        cabins:cabinReserva,
        clients:clientReserva,


    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url : 'http://144.22.53.225:8080/api/Reservation/update',
        type : 'PUT',
        //   dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(pepito) {
            $("#idReservacion").val("");
            $("#inicioReservacion").val("");
            $("#finReservacion").val("");
            $("#statusReservacion").val("");
            $("#cabanaReservacion").val("");
            $("#clienteReseravcion").val("");

        },
        error : function(xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function(){
            leerReserva();
        }
    });

}

function borrarReserva(idreserva){
    let data= {
        id:idreserva
    };
    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);
    $.ajax({
        url : 'http://144.22.53.225:8080/api/Reservation/{id}',
        type : 'DELETE',
        //   dataType : 'json',
        data:dataToSend,
        contentType:'application/json',
        success : function(pepito) {
            $("#idReservacion").val("");
            $("#inicioReservacion").val("");
            $("#finReservacion").val("");
            $("#statusReservacion").val("");
            $("#cabanaReservacion").val("");
            $("#clienteReseravcion").val("");
        },
        error : function(xhr, status) {
            //     alert('ha sucedido un problema');
        },
        complete: function(){
            leerReserva();
        }
    });

}

    
        function leerMensaje(){
            //FUNCION GET
                $.ajax({    
                    url : 'http://144.22.53.225:8080/api/Message/all',
                    type : 'GET',
                    dataType : 'json',
            
                    success : function(memsaje) {
                           let cs=memsaje.items;
                           $("#listaMensaje").empty();
                           for(i=0;i<cs.length;i++){
                               $("#listaMensaje").append(cs[i].id+" <b>"+cs[i].messagetext+"</b> "+cs[i].cabins+""+cs[i].clients);
                               $("#listaMensaje").append("<button onclick='borrarMensaje("+cs[i].id+")'>Borrar</button><br>");
                           
                           }
                    },
                    error : function(xhr, status) {
                        alert('ha sucedido un problema');
                    }
                });
            }
        
    
        function guardarMensaje() {
                let idmensaje=$("#idMensaje").val();
                let mensaje=$("#mensaje").val();
                let cabinmensaje=$("#cabanaMensaje").val();
                let clientmensaje=$("#clienteMensaje").val();
                let data={
                    id:idmensaje,
                    messagetext:mensaje,
                    cabins:cabinmensaje,
                    clients:clientmensaje
                    
                };
            
                let dataToSend=JSON.stringify(data);
                //console.log(dataToSend);
            
            
                $.ajax({    
                    url : 'http://144.22.53.225:8080/api/Message/save',
                    type : 'POST',
                 //   dataType : 'json',
                    data:dataToSend,
                    contentType:'application/json',
                    success : function(pepito) {
                        $("#idMensaje").val("");
                        $("#mensaje").val("");
                        $("#cabanaMensaje").val("");
                        $("#clienteMensaje").val("");
                        
                    },
                    error : function(xhr, status) {
                   //     alert('ha sucedido un problema');
                    },
                    complete: function(){
                        leerMensaje();
                    }
                });
            
            
            }
            
            
            function editarMensaje(){
                let idmensaje=$("#idMensaje").val();
                let mensaje=$("#mensaje").val();
                let cabinmensaje=$("#cabanaMensaje").val();
                let clientmensaje=$("#clienteMensaje").val();
                let data={
                    id:idmensaje,
                    messagetext:mensaje,
                    cabins:cabinmensaje,
                    clients:clientmensaje
                };
                let dataToSend=JSON.stringify(data);
                //console.log(dataToSend);
                $.ajax({    
                    url : 'http://144.22.53.225:8080/api/Message/update',
                    type : 'PUT',
                 //   dataType : 'json',
                    data:dataToSend,
                    contentType:'application/json',
                    success : function(pepito) {
                        $("#idMensaje").val("");
                        $("#mensaje").val("");
                        $("#cabanaMensaje").val("");
                        $("#clienteMensaje").val("");

                    },
                    error : function(xhr, status) {
                   //     alert('ha sucedido un problema');
                    },
                    complete: function(){
                        leerMensaje();
                    }
                });
            
            }
            
            function borrarMensaje(idmensaje){
                let data={
                    id:idmensaje
                };
                let dataToSend=JSON.stringify(data);
                //console.log(dataToSend);
                $.ajax({    
                    url : 'http://144.22.53.225:8080/api/Message/{id}',
                    type : 'DELETE',
                 //   dataType : 'json',
                    data:dataToSend,
                    contentType:'application/json',
                    success : function(pepito) {
                        $("#idMensaje").val("");
                        $("#mensaje").val("");
                        $("#cabanaMensaje").val("");
                        $("#clienteMensaje").val("");

                    },
                    error : function(xhr, status) {
                   //     alert('ha sucedido un problema');
                    },
                    complete: function(){
                        leerMensaje();
                    }
                });
            
            }



