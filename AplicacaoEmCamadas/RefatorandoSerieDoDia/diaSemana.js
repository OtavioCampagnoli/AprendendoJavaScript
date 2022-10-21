function RetornaDiaSemana ()
{
        let data = new Date();
        let dia =  data.getDay();
        return dia;
}

export default RetornaDiaSemana;