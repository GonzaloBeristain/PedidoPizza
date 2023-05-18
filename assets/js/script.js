$(document).ready(function () {
    let check = $(".form-check-input");
    let ingredientesSelect = $("#ingreSelect");
    let extraIngredientes = $("#extraIngredients");
    let array = [];
    let extra = $("#extraPrice");
    let propina = $("#tip");
    let propinaInput = $("#thankGod");
    let propinaAcumulada = 0;
    let boton = $("#button-addon3");

    check.on({
        click: function () {
            if($(this).is(":checked")){
                array.push($(this).val());
                ingredientesSelect.text(array);
                agregarExtras()
            } else {
                let valor = $(this).val();
                let index = array.indexOf(valor);
                array.splice(index, 1);
                ingredientesSelect.text(array);
                agregarExtras()
            }
        }
    });

    boton.on({
        click: function () {
            propina.text(formatoMoneda(propinaInput.val()));
            if (parseInt(propinaInput.val()) > 0) {
                alert(`Su propina de $${formatoMoneda(propinaInput.val())} ha sido enviada`);
            } else { 
                propina.text(0);
                alert("Aún no ha definido una propina");
            }
        } 
    });

    propinaInput.on({
        click: function () {
            propinaAcumulada = 1000;
            propina.text(formatoMoneda(propinaAcumulada))
        }
    });

    let agregarExtras = () => {
        extra.text(0)
        if (array.length > 3){
            let total = (array.length * 800) - 2400;
            extra.text(formatoMoneda(total));
            extraIngredientes.text(array.slice(3));
        } else {
            extraIngredientes.text("");
        }
    };

    const formatoMoneda = (valor) => {
        return Number(valor).toLocaleString("es-CL", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }); 
    };
});