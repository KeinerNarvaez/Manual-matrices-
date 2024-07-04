const salario = function (dias,valordia) {
    let diask=dias;
    let vdias=valordia;
    let total_salario= diask*vdias;
    return total_salario;

}
const subtrans=function (dias,valordia) {
    let salarioMin= 1600000;
    let salariotrans=salario(dias,valordia);
    let subtransporte;
    if (salariotrans<=2*salarioMin) {
        subtransporte=114000;
    } else {
        subtransporte=0;
    }
    return subtransporte;
}
const  salud = function (dias,valordia) {
    let pago_salud=salario(dias,valordia)*0.12;
    return pago_salud;
}
const pension=function (dias,valordia) {
    let pago_pension=salario(dias,valordia)*0.16
    return pago_pension;   
}
const deducible = function (dias,valordia) {
    let pago_deducible = pension(dias,valordia)+ salud(dias,valordia);
    return pago_deducible;
}
const arl = function (dias,valordia) {
    let pago_arl = salario(dias,valordia)*0.052
    return pago_arl;
}
const pagototal = function (dias,valordia) {
    let pago_total = salario(dias,valordia)+subtrans(dias,valordia);
    return pago_total;
}
const retencion = function (dias,valordia) {
    let retencion_total
    if (salario(dias,valordia)>7800000) {
        retencion_total=0.02
    }if (salario(dias,valordia)>10400000) {
        retencion_total=0.04;
    }if (salario(dias,valordia)>15600000) {
    retencion_total=0.08;
    }else{
        retencion_total="No tiene retencion";
    }
    return retencion_total;
}












//papu
function salario2(dias,valordia) {
    let diask=dias;
    let vdias=valordia;
    let total_salario= diask*vdias;
    return total_salario;

}
function subtrans2(dias,valordia) {
    let salarioMin= 1600000;
    let salariotrans=salario2(dias,valordia);
    let subtransporte;
    if (salariotrans<=2*salarioMin) {
        subtransporte=114000;
    } else {
        subtransporte=0;
    }
    return subtransporte;
}
function  salud2(dias,valordia) {
    let pago_salud=salario2(dias,valordia)*0.12;
    return pago_salud;
}
function pension2(dias,valordia) {
    let pago_pension=salario2(dias,valordia)*0.16
    return pago_pension;   
}
function deducible2(dias,valordia) {
    let pago_deducible = pension(dias,valordia)+ salud(dias,valordia);
    return pago_deducible;
}
function arl2 (dias,valordia) {
    let pago_arl = salario2(dias,valordia)*0.052
    return pago_arl;
}
function pagototal2(dias,valordia) {
    let pago_total = salario2(dias,valordia)+subtrans2(dias,valordia)-deducible2(dias,valordia);
    return pago_total;
}
function retencion2(dias,valordia) {
    let retencion_total;
    if (salario2(dias,valordia)>7800000) {
        retencion_total=0.02;
    }if (salario2(dias,valordia)>10400000) {
        retencion_total=0.04;
    }if (salario2(dias,valordia)>15600000) {
    retencion_total=0.08;
    }else{
        retencion_total="No tiene retencion";
    }
    return retencion_total;
}