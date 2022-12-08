$(document).ready(function(){
    $("#salvar").click(function(){

        if($("#nome").val() == "")
        {
            alert("Todos os campos são obrigatórios !!");
            $("#nome").focus(); 
            $("#nome").css({"color" : "#FA5858" , "outline-color" : "#FA5858"})
        }
        else if($("#sobrenome").val() == "")
        {
            alert("Todos os campos são obrigatórios !!");
            $("#sobrenome").focus(); 
            $("#sobrenome").css({"color" : "#FA5858" , "outline-color" : "#FA5858"})
        }
        else if($("#email").val() == "")
        {
            alert("Todos os campos são obrigatórios !!");
            $("#email").focus(); 
            $("#email").css({"color" : "#FA5858" , "outline-color" : "#FA5858"})
        }
        else if($("#matricula").val() == "")
        {
            alert("Todos os campos são obrigatórios !!");
            $("#matricula").focus(); 
            $("#matricula").css({"color" : "#FA5858" , "outline-color" : "#FA5858"});
        }
        else if($("#usuario").val() == "")
        {
            alert("Todos os campos são obrigatórios !!");
            $("#usuario").focus(); 
            $("#usuario").css({"color" : "#FA5858" , "outline-color" : "#FA5858"});
        }
        else if($("#senha").val() == "")
        {
            alert("Todos os campos são obrigatórios !!");
            $("#senha").focus(); 
            $("#senha").css({"color" : "#FA5858" , "outline-color" : "#FA5858"});
        }
        else if($("#confirmasenha").val() == "")
        {
            alert("Todos os campos são obrigatórios !!");
            $("#confirmasenha").focus(); 
            $("#confirmasenha").css({"color" : "#FA5858" , "outline-color" : "#FA5858"});
        }
        else if($("#confirmasenha").val() != $("#senha").val())
        {
            alert("Os campos de senhas estão diferentes !");
            $("#confirmasenha").focus(); 
            $("#confirmasenha").css({"color" : "#FA5858" , "outline-color" : "#FA5858"});
        }
        else
        {
            alert("Formulario Salvo!!")
            $("#nome").val("")
            $("#email").val("")
            $("#sobrenome").val("")
            $("#matricula").val("")
            $("#usuario").val("")
            $("#senha").val("")
            $("#confirmasenha").val("")
            $("#nome").focus(); 
            $("input").css({"color" : "black" , "outline-color" : "#ccc"})
        }
    });      
});
