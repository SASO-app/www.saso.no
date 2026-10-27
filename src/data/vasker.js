// Produktdata for /vasker. Samme prinsipp som resten av siden: en sentral
// fil som er rask å oppdatere uten å røre komponentkoden.
//
// Standardserien "Per" er navngitt etter breddemål (Per 10 = ca. 100 cm,
// osv.) — eksakte mål, IKEA-seriematch og priser er under avklaring.
// Oppdater feltene under når dere har landet på de endelige standardene.
export const standardVasker = [
  {
    navn: 'Per 10',
    bredde: 'Ca. 100 cm (bekreftes)',
    passerTil: 'IKEA-baderomsmøbel, 100 cm-serien',
    pris: 'Pris på forespørsel',
    image: null,
  },
  {
    navn: 'Per 12',
    bredde: 'Ca. 120 cm (bekreftes)',
    passerTil: 'IKEA-baderomsmøbel, 120 cm-serien',
    pris: 'Pris på forespørsel',
    image: null,
  },
  {
    navn: 'Per 20',
    bredde: 'Ca. 200 cm (bekreftes)',
    passerTil: 'IKEA-baderomsmøbel, dobbel 200 cm-serie',
    pris: 'Pris på forespørsel',
    image: null,
  },
]

// Voksende galleri av spesialbygde vasker. Legg til bilder etter hvert som
// dere tar dem — tom liste viser nøytrale plassholdere i mellomtiden.
export const vaskGalleri = [
  // { tittel: 'Flislagt vask, Sandviken', image: '/vasker/sandviken.jpg' },
]
