
const radiologia = [
    {
        hora : "11:00",
        especialista : "IGNACIO SCHULZ",
        paciente : "FRANCISCA ROJAS", 
        rut : "9878782-1",
        prevision : "FONASA" , 
    },
    {
        hora : "11:30",
        especialista : "FEDERICO SUBERCASEAUX",
        paciente : "PAMELA ESTRADA", 
        rut : "15345241-3",
        prevision : "ISAPRE" , 
    },
    {
        hora : "15:00",
        especialista : "FERNANDO WURTHZ",
        paciente : "ARMANDO LUNA", 
        rut : "16445345-9",
        prevision : "ISAPRE" , 
    },
    {
        hora : "15:30",
        especialista : "ANA MARIA GODOY",
        paciente : "MANUEL GODOY", 
        rut : "17666419-0",
        prevision : "FONASA" , 
    },
    {
        hora : "16:00",
        especialista : "PATRICIA SUAZO",
        paciente : "RAMON ULLOA", 
        rut : "14989389-K",
        prevision : "FONASA" , 
    },
]

const traumautologia = [
    {
        hora : "8:00",
        especialista : "MARIA PAZ ALTUZARRA",
        paciente : "PAULA SANCHEZ", 
        rut : "15554774-5",
        prevision : "FONASA" ,    
    },
    {
        hora : "10:00",
        especialista : "RAUL ARAYA",
        paciente : "ANGÉLICA NAVAS", 
        rut : "15444147-9",
        prevision : "ISAPRE" ,    
    },
    {
        hora : "10:30",
        especialista : "MARIA ARRIAGADA",
        paciente : "ANA KLAPP", 
        rut : "17879423-9",
        prevision : "ISAPRE" ,    
    },
    {
        hora : "11:00",
        especialista : "ALEJANDRO BADILLA",
        paciente : "FELIPE MARDONES", 
        rut : "1547423-6",
        prevision : "ISAPRE" ,
    },
    {
        hora : "11:30",
        especialista : "CECILIA BUDNIK",
        paciente : "DIEGO MARRE", 
        rut : "16554741-K",
        prevision : "FONASA" ,
    },
    {
        hora : "12:00",
        especialista : "ARTURO CAVAGNARO",
        paciente : "CECILIA MENDEZ", 
        rut : "9747535-8",
        prevision : "ISAPRE" ,
    },
    {
        hora : "12:30",
        especialista : "ANDRES KANACRI",
        paciente : "MARCIAL SUAZO", 
        rut : "11254785-5",
        prevision : "ISAPRE" ,
    },
] 

const dental = [
    {
        hora : "8:30",
        especialista : "ANDREA ZUÑIGA",
        paciente : "MARCELA RETAMAL", 
        rut : "11123425-6",
        prevision : "ISAPRE" ,
    },
    {
        hora : "11:00",
        especialista : "MARIA PIA ZAÑARTU",
        paciente : "ANGEL MUÑOZ", 
        rut : "9878789-2",
        prevision : "ISAPRE" ,
    },
    {
        hora : "11:30",
        especialista : "SCARLETT WITTING",
        paciente : "MARIO KAST", 
        rut : "7998789-5",
        prevision : "FONASA",
    },
    {
        hora : "13:00",
        especialista : "FRANCISCO VON TEUBER",
        paciente : "KARIN FERNANDEZ", 
        rut : "18887662-K",
        prevision : "FONASA",
    },
    {
        hora : "13:30",
        especialista : "EDUARDO VIÑUELA",
        paciente : "HUGO SANCHEZ", 
        rut : "17665461-4",
        prevision : "FONASA",
    },
    {
        hora : "14:00",
        especialista : "RAQUEL VILLASECA",
        paciente : "ANA SEPULVEDA", 
        rut : "14441281-0",
        prevision : "ISAPRE" ,
    },
]

//ciclo radiologia
let tablaUno = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>"

for ( let i = 0 ; i < radiologia.length ; i++){
    tablaUno += `  <tr>
                    <td>${radiologia[i].hora}</td>
                    <td>${radiologia[i].especialista}</td>
                    <td>${radiologia[i].paciente}</td>
                    <td>${radiologia[i].rut}</td>
                    <td>${radiologia[i].prevision}</td>
                </tr>`
}
document.querySelector("#cuerpo-tablaUno").innerHTML = tablaUno

//ciclo traumatologia
let tablaDos = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>"

for ( let i = 0 ; i < traumautologia.length ; i++){
    tablaDos += `  <tr>
                    <td>${traumautologia[i].hora}</td>
                    <td>${traumautologia[i].especialista}</td>
                    <td>${traumautologia[i].paciente}</td>
                    <td>${traumautologia[i].rut}</td>
                    <td>${traumautologia[i].prevision}</td>
                </tr>`
}
document.querySelector("#cuerpo-tablaDos").innerHTML = tablaDos

//ciclo dental
let tablaTres = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>"

for ( let i = 0 ; i < dental.length ; i++){
    tablaTres += `  <tr>
                    <td>${dental[i].hora}</td>
                    <td>${dental[i].especialista}</td>
                    <td>${dental[i].paciente}</td>
                    <td>${dental[i].rut}</td>
                    <td>${dental[i].prevision}</td>
                </tr>`
}
document.querySelector("#cuerpo-tablaTres").innerHTML = tablaTres


//atenciones radiografia

document.querySelector("#radiografia").innerHTML = ` Primera atención : ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atencion : ${radiologia[4].paciente} - ${radiologia[4].prevision} ` 

//atenciones traumatologia
document.querySelector("#traumatologia").innerHTML = ` Primera atención : ${traumautologia[0].paciente} - ${traumautologia[0].prevision} | Última atencion : ${traumautologia[6].paciente} - ${traumautologia[6].prevision} ` 

//atenciones dentales
document.querySelector("#dental").innerHTML = `Primera atención : ${dental[0].paciente} - ${dental[0].prevision} | Última atencion : ${dental[5].paciente} - ${dental[5].prevision}`










