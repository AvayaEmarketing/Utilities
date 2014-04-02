//Asignar el valor a un select
//Por valor
function setSelectByValue(eID, val) {
    var ele = document.getElementById(eID);
    for (var ii = 0; ii < ele.length; ii++)
        if (ele.options[ii].value == val) { 
            ele.options[ii].selected = true;
            return true;
        }
    return false;
}
//Por texto
function setSelectByText(eID, text) { 
    var ele = document.getElementById(eID);
    for (var ii = 0; ii < ele.length; ii++)
        if (ele.options[ii].text == text) { 
            ele.options[ii].selected = true;
            return true;
        }
    return false;
}


//Validaciones de campos
function validate(valor) {
    if (valor == null || valor.length < 1 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true;
    }
}

//Validar campo email
function validateEmail(valor) {
    var correo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!correo.exec(valor)) {
        return false;
    } else {
        return true;
    }
}

//Validar si es un numero
function validateNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Obtener los valores de input tipo checkbox y almacenarlos en una variable separados por coma
$('#checksM :checkbox:checked').each(function () {
    valores2 = valores2 + $(this).val() + ',';
});
if ((valores2.substring(valores2.length - 1, valores2.length)) === ',') {
    valores2 = valores2.substring(0, valores2.length - 1);
}


//Validar extension maliciosa en un archivo  recibe el nombre del archivo como parametro
function validarExtension(nombre) {
    var ext = (nombre.substring(nombre.lastIndexOf(".") + 1)).toUpperCase();
    var respuesta = 0;
    var extension = new Object();
    extension.EXE = "EXE";
    extension.COM = "COM";
    extension.VB = "VB";
    extension.VBS = "VBS";
    extension.VBEE = "VBE";
    extension.CMDD = "CMD";
    extension.BATT = "BAT";
    extension.WSS = "WS";
    extension.WSFF = "WSF";
    extension.SCRR = "SCR";
    extension.SHS = "SHS";
    extension.PIF = "PIF";
    extension.HTA = "HTA";
    extension.JAR = "JAR";
    extension.JS = "JS";
    extension.JSE = "JSE";
    extension.LNK = "LNK";

    for (var i in extension) {
        if (extension[i] === ext) {
            respuesta = respuesta + 1;
            return false;
        }
        else {
            respuesta = respuesta + 0;
        }
    }
    if (respuesta === 0) {
        return true;
    } else {
        return false;
    }
}

//Detecta si el navegador es IE  *******  No funciona para IE 11   ********
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

//Trae la version de internet Explorer  ***  SI funciona con IE 11  ***
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    else if (navigator.appName == 'Netscape') {
        var ua = navigator.userAgent;
        var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

//Obtener los parametros de la URL
var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = pair[1];
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], pair[1]];
            query_string[pair[0]] = arr;
        } else {
            query_string[pair[0]].push(pair[1]);
        }
    }
    return query_string;
}();

//Subir archivo
function ajaxFileUpload(id) {
    $("#loading")
.ajaxStart(function () {
    $(this).show();
})
.ajaxComplete(function () {
    $(this).hide();
});

    $.ajaxFileUpload
    (
        {
            url: 'AjaxFileUploader.ashx?div_id=' + id,
            secureuri: false,
            fileElementId: 'fileToUpload',
            dataType: 'json',
            data: { name: 'logan', id: id },
            success: function (data, status) {
                if (typeof (data.error) != 'undefined') {
                    if (data.error != '') {
                        alert(data.error);
                    } else {
                        document.location.href = "solicitante.aspx";
                    }
                }
            },
            error: function (data, status, e) {
                alert("Please Select File");
            }
        }
    )
    return false;
}


















