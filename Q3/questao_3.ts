
function q3TratarDatas(data: string) {
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(data)) {
        const date = data.split('/');
        return `${date[2]}-${date[1]}-${date[0]}`;
    }
    if (/^\d{2} (jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez) \d{4}$/.test(data)) {
        const date = data.split(' ');
        const meses = {
            jan: '01',
            fev: '02',
            mar: '03',
            abr: '04',
            mai: '05',
            jun: '06',
            jul: '07',
            ago: '08',
            set: '09',
            out: '10',
            nov: '11',
            dez: '12'
        };
        return `${date[2]}-${meses[date[1]]}-${date[0]}`;
    }
    if (/^\d{2} de (janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro) de \d{4}$/.test(data)) {
        const date = data.split(' de ');
        const meses = {
            janeiro: '01',
            fevereiro: '02',
            março: '03',
            abril: '04',
            maio: '05',
            junho: '06',
            julho: '07',
            agosto: '08',
            setembro: '09',
            outubro: '10',
            novembro: '11',
            dezembro: '12'
        };
        return `${date[2]}-${meses[date[1]]}-${date[0]}`;
    }
    console.log(`Formato de data não reconhecido: ${data}`);

  return data;
}

const datasParaTratar = [
  '30/11/2022',
  '01 dez 2022', 
  '25/12/2022', 
  '31 de dezembro de 2022'
];

datasParaTratar.forEach(data => {
  console.log(q3TratarDatas(data));
});
