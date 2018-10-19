import Route from '@ember/routing/route';

var data = [
  {
    Coefficients: 'GESLACHT Mannen',
    Category: 'Geslacht',
    Name: 'Man',
    Weight: '-0,12611'
  },
  {
    Coefficients: 'Herkomst ouders: Beide ouders niet Nederlands',
    Category: 'Herkomst',
    Name: 'Beide ouders niet Nederlands',
    Weight: '0,16972'
  },
  {
    Coefficients:
      'Herkomst ouders: Een van de ouders Nederlands en de andere niet Nederlands',
    Category: 'Herkomst',
    Name: 'Een van de ouders Nederlands en de andere niet Nederlands',
    Weight: '-0,08943'
  },
  {
    Coefficients: 'Type huishouden: Eenouderhuishouden',
    Category: 'Type huishouden',
    Name: 'Eenouderhuishouden',
    Weight: '0,49608'
  },
  {
    Coefficients: 'Type huishouden: Eenpersoonshuishouden',
    Category: 'Type huishouden',
    Name: 'Eenpersoonshuishouden',
    Weight: '1,71859'
  },
  {
    Coefficients: 'Type huishouden: Gehuwd paar zonder kinderen',
    Category: 'Type huishouden',
    Name: 'Gehuwd paar zonder kinderen',
    Weight: '1,06108'
  },
  {
    Coefficients: 'Type huishouden: Institutioneel huishouden',
    Category: 'Type huishouden',
    Name: 'Institutioneel huishouden',
    Weight: '1,92321'
  },
  {
    Coefficients: 'Type huishouden: Niet-gehuwd paar met kinderen',
    Category: 'Type huishouden',
    Name: 'Niet-gehuwd paar met kinderen',
    Weight: '0,32694'
  },
  {
    Coefficients: 'Type huishouden:Niet-gehuwd paar zonder kinderen',
    Category: 'Type huishouden',
    Name: 'Niet-gehuwd paar zonder kinderen',
    Weight: '-14,15530'
  },
  {
    Coefficients: 'Type huishouden: Onbekend',
    Category: 'Type huishouden',
    Name: 'Onbekend huishouden',
    Weight: '-13,81002'
  },
  {
    Coefficients: 'Type huishouden: Overig huishouden',
    Category: 'Type huishouden',
    Name: 'Overig huishouden',
    Weight: '0,91365'
  },
  {
    Coefficients: 'Scheiding',
    Category: 'Gescheiden ouders',
    Name: 'Ja',
    Weight: '0,27683'
  },
  {
    Coefficients: 'VSV Niet van toepassing',
    Category: 'Voortijdig schoolverlaten',
    Name: 'Niet van toepassing',
    Weight: '0,38736'
  },
  {
    Coefficients: 'VSV Geen data over VSV bekend',
    Category: 'Voortijdig schoolverlaten',
    Name: 'Onbekend',
    Weight: '0,80564'
  },
  {
    Coefficients: 'VSV Geen vsv: uit onderwijs met startkwalificatie',
    Category: 'Voortijdig schoolverlaten',
    Name: 'Uit onderwijs met startkwalificatie',
    Weight: '-13,64193'
  },
  {
    Coefficients: 'VSV Voortijdig schoolverlater (vsv)',
    Category: 'Voortijdig schoolverlaten',
    Name: 'Voortijdig schoolverlaten',
    Weight: '0,34684'
  },
  {
    Coefficients: 'SPECIAAL_Onderwijs Niet-regulier onderwijs',
    Category: 'Soort onderwijs',
    Name: 'Niet-regulier onderwijs',
    Weight: '-0,33031'
  },
  {
    Coefficients: 'SPECIAAL_Onderwijs Geen onderwijsdata bekend',
    Category: 'Soort onderwijs',
    Name: 'Onderwijs onbekend',
    Weight: '-0,76957'
  },
  {
    Coefficients: 'Soort woning Huurwoning, met huurtoeslag',
    Category: 'Soort woning',
    Name: 'Huurwoning met huurtoeslag',
    Weight: '0,38401'
  },
  {
    Coefficients: 'Soort woning Huurwoning, zonder huurtoeslag',
    Category: 'Soort woning',
    Name: 'Huurwoning zonder huurtoeslag',
    Weight: '0,40420'
  },
  {
    Coefficients: 'Soort woning onbekend',
    Category: 'Soort woning',
    Name: 'Onbekend',
    Weight: '2,40126'
  },
  {
    Coefficients: 'Werk vader Geen werk',
    Category: 'Werk vader',
    Name: 'Geen werk en niet actief',
    Weight: '0,33772'
  },
  {
    Coefficients: 'Werk vader onbekend',
    Category: 'Werk vader',
    Name: 'Onbekend',
    Weight: '0,23486'
  },
  {
    Coefficients: 'Werk moeder Geen werk',
    Category: 'Werk moeder',
    Name: 'Geen werk en niet actief',
    Weight: '0,36958'
  },
  {
    Coefficients: 'Werk moeder onbekend',
    Category: 'Werk moeder',
    Name: 'Onbekend',
    Weight: '-0,95012'
  },
  {
    Coefficients: 'Slachtoffer Ja',
    Category: 'Slachtoffer',
    Name: 'Ja',
    Weight: '0,23639'
  },
  {
    Coefficients: 'Jeuggdhulp zonder verblijf vooraf',
    Category: 'Traject vooraf',
    Name: 'Jeugdhulp zonder verblijf gehad',
    Weight: '1,52774'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 20 tot 25 jaar',
    Category: 'Leeftijd moeder',
    Name: '20 tot 25 jaar',
    Weight: '0,10852'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 25 tot 30 jaar',
    Category: 'Leeftijd moeder',
    Name: '25 tot 30 jaar',
    Weight: '-0,08841'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 35 tot 40 jaar',
    Category: 'Leeftijd moeder',
    Name: '35 tot 40 jaar',
    Weight: '0,23988'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat ouder dan 40 jaar',
    Category: 'Leeftijd moeder',
    Name: '40 jaar en ouder',
    Weight: '-0,11153'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 0 tot 20 jaar',
    Category: 'Leeftijd moeder',
    Name: 'Jonger dan 20 jaar',
    Weight: '0,45150'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar',
    Category: 'Leeftijd vader',
    Name: '25 tot 30 jaar',
    Weight: '0,03107'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat 35 tot 40 jaar',
    Category: 'Leeftijd vader',
    Name: '35 tot 40 jaar',
    Weight: '-0,21624'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat ouder dan 40 jaar',
    Category: 'Leeftijd vader',
    Name: '40 jaar en ouder',
    Weight: '-0,32645'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat 0 tot 25 jaar',
    Category: 'Leeftijd vader',
    Name: 'Jonger dan 25 jaar',
    Weight: '-0,00587'
  },
  {
    Coefficients: 'Verdenking misdrijf Vader of moeder Ja',
    Category: 'Vader of moeder verdacht',
    Name: 'Ja',
    Weight: '0,50027'
  },
  {
    Coefficients: 'Verdenking misdrijf KIND Ja',
    Category: 'Kind verdacht',
    Name: 'Ja',
    Weight: '0,94738'
  },
  {
    Coefficients: 'HALTDELICT Ja',
    Category: 'Halt delict',
    Name: 'Ja',
    Weight: '0,36448'
  },
  {
    Coefficients: 'Onderwijsverandering afschalen',
    Category: 'Verandering onderwijs niveau',
    Name: 'Afschalen',
    Weight: '0,58732'
  },
  {
    Coefficients: 'Onderwijsverandering onbekend',
    Category: 'Verandering onderwijs niveau',
    Name: 'Onbekend',
    Weight: '-1,11682'
  },
  {
    Coefficients: 'Leeftijdsverschil ouders meer dan 5 jaar',
    Category: 'Leeftijdsverschil ouders',
    Name: 'Meer dan 5 jaar',
    Weight: '0,28581'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Basisonderwijs',
    Category: 'Actueel onderwijs niveau',
    Name: 'Basisonderwijs',
    Weight: '0,25232'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Geen onderwijsdata bekend',
    Category: 'Actueel onderwijs niveau',
    Name: 'Onderwijs onbekend',
    Weight: '0,00000'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Vmbo-b/k, mbo 1 en mbo 2',
    Category: 'Actueel onderwijs niveau',
    Name: 'Vmbo b/k, mbo 1 en mbo 2',
    Weight: '0,87842'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Vmbo-g/t, mbo 3 en mbo 4',
    Category: 'Actueel onderwijs niveau',
    Name: 'Vmbo g/t, mbo 3 en mbo 4',
    Weight: '0,56882'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Vwo en Wo-bachelor',
    Category: 'Actueel onderwijs niveau',
    Name: 'Vwo en Wo bachelor',
    Weight: '-0,83566'
  },
  {
    Coefficients: 'Hoogst behaalde diploma vader Geen onderwijsdata bekend',
    Category: 'Hoogst behaalde diploma vader',
    Name: 'Onderwijs onbekend',
    Weight: '0,88464'
  },
  {
    Coefficients: 'Hoogst behaalde diploma vader Vmbo-b/k, mbo 1 en mbo 2',
    Category: 'Hoogst behaalde diploma vader',
    Name: 'Vmbo b/k, mbo 1 en mbo 2',
    Weight: '-0,21630'
  },
  {
    Coefficients: 'Hoogst behaalde diploma vader Vmbo-g/t, mbo 3 en mbo 4',
    Category: 'Hoogst behaalde diploma vader',
    Name: 'Vmbo g/t, mbo 2 en mbo 3',
    Weight: '0,67119'
  },
  {
    Coefficients:
      'Hoogst behaalde diploma vader Vwo en Wo-bachelor en Wo-master',
    Category: 'Hoogst behaalde diploma vader',
    Name: 'Vwo, Wo bachelor en Wo master',
    Weight: '-12,08995'
  },
  {
    Coefficients: 'Hoogst behaalde diploma moeder Geen onderwijsdata bekend',
    Category: 'Hoogst behaalde diploma moeder',
    Name: 'Onderwijs onbekend',
    Weight: '0,03655'
  },
  {
    Coefficients: 'Hoogst behaalde diploma moeder Vmbo-b/k, mbo 1 en mbo 2',
    Category: 'Hoogst behaalde diploma moeder',
    Name: 'Vmbo b/k, mbo 1 en mbo 2',
    Weight: '0,15936'
  },
  {
    Coefficients: 'Hoogst behaalde diploma moeder Vmbo-g/t, mbo 3 en mbo 4',
    Category: 'Hoogst behaalde diploma moeder',
    Name: 'Vmbo g/t, mbo 2 en mbo 3',
    Weight: '0,03334'
  },
  {
    Coefficients:
      'Hoogst behaalde diploma moeder Vwo en Wo-bachelor en Wo-master',
    Category: 'Hoogst behaalde diploma moeder',
    Name: 'Vwo, Wo bachelor en Wo master',
    Weight: '-13,03162'
  }
];

var parsedData = [
  // {
  //   Category: '',
  //   answers: [
  //     {
  //       answer: '',
  //       weight: ''
  //     }
  //   ]
  // }
];

// Code van Martijn Reeuwijk, herschreven in mijn stijl
for (var i = 0; i < data.length; i++) {
  var check = true;
  for (var x = 0; x < parsedData.length; x++) {
    if (parsedData[x].Category === data[i].Category) {
      check = false;
    }
  }

  if (check) {
    parsedData.push({
      Category: data[i].Category,
      Answers: []
    });
  }

  for (var j = 0; j < parsedData.length; j++) {
    if (parsedData[j].Category === data[i].Category) {
      parsedData[j].Answers.push({
        // 'Coefficients': data[i].Coefficients,
        Name: data[i].Name,
        Weight: data[i].Weight
      });
    }
  }
}

var doubleParsedData = {
  algemeen: new Array(),
  huishouding: new Array(),
  onderwijs: new Array(),
  sociaal: new Array(),
  strafrecht: new Array()
};

for (var p = 0; p < parsedData.length; p++) {
  switch (parsedData[p].Category) {
    case 'Geslacht':
    case 'Herkomst':
    case 'Slachtoffer':
    case 'Traject vooraf':
      doubleParsedData.algemeen.push(parsedData[p]);
      break;
    case 'Type huishouden':
    case 'Soort woning':
      doubleParsedData.huishouding.push(parsedData[p]);
      break;
    case 'Voortijdig schoolverlaat':
    case 'Soort onderwijs':
    case 'Actueel onderwijs':
    case 'Hoogst behaalde diploma vader':
    case 'Hoogst behaalde diploma moeder':
    case 'Verandering onderwijs nivau':
      doubleParsedData.onderwijs.push(parsedData[p]);
      break;
    case 'Gescheiden ouders':
    case 'Werk vader':
    case 'werk moeder':
    case 'Leeftijd vader':
    case 'Leeftijd moeder':
    case 'Leeftijdsverschil ouders':
      doubleParsedData.sociaal.push(parsedData[p]);
      break;
    case 'Vader of moeder verdacht':
    case 'Kind verdacht':
    case 'Halt delict':
      doubleParsedData.strafrecht.push(parsedData[p]);
      break;
  }
}

// My own code that doesn't work :(
// var check = true
//
// for (var i = 0; i < data.length; i++) {
//
//   for (var x = 0; x < parsedData.length; x++) {
//     if (data[i].Category == parsedData[x].Category) {
//       parsedData[x].answers.push({
//         answer: data[i].Name,
//         weight: data[i].Weight
//       })
//
//       check = false
//     }
//   }
//
//   if (check == true) {
//     parsedData[i] = {
//       Category: data[i].Category,
//       answers: [
//         {
//           answer: data[i].Name,
//           weight: data[i].Weight
//         }
//       ]
//     }
//   }
// }

export default Route.extend({
  model() {
    return doubleParsedData;
  }
});
