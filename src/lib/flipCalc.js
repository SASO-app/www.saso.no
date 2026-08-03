export const defaultInputs = {
  objektLenke: '',
  kjopesum: 4500000,
  oppussing: 600000,
  potensiellSalgssum: 5900000,
  eierperiodeMnd: 6,
  meglerhonorarPst: 1.5,
  dokumentavgiftPst: 2.5,
  lopendeKostnaderMnd: 4000,

  bruttoArsinntektHusstand: 1100000,
  ekstrainntektArlig: 0,
  utleieEgenBoligMnd: 0,
  leieinntektObjektMnd: 0,

  egenBoligVerdi: 6000000,
  boliglan: 3200000,

  billan: 0,
  studielan: 250000,
  forbrukslan: 0,
  kredittkort: 0,

  bankinnskudd: 400000,
  fond: 250000,
  aksjer: 100000,
  bsu: 0,
  annenEgenkapital: 0,

  ekKravPst: 15,
  nominellRentePst: 5.5,
  stresstestPst: 3,
  gjeldsgradFaktor: 5,
}

export function annuitet(lan, rentePst, ar = 25) {
  const r = rentePst / 100 / 12
  const n = ar * 12
  if (lan <= 0) return 0
  if (r === 0) return lan / n
  return (lan * r) / (1 - Math.pow(1 + r, -n))
}

export function beregn(i) {
  const samletInntekt =
    i.bruttoArsinntektHusstand +
    i.ekstrainntektArlig +
    (i.utleieEgenBoligMnd + i.leieinntektObjektMnd) * 12

  const eksisterendeGjeld = i.boliglan + i.billan + i.studielan + i.forbrukslan + i.kredittkort
  const oppsparteMidler = i.bankinnskudd + i.fond + i.aksjer + i.bsu + i.annenEgenkapital

  const ledigEkBolig = Math.max(0, i.egenBoligVerdi * 0.85 - i.boliglan)
  const tilgjengeligEk = oppsparteMidler + ledigEkBolig

  const maksSamletGjeld = samletInntekt * i.gjeldsgradFaktor
  const laneromGjeldsgrad = Math.max(0, maksSamletGjeld - eksisterendeGjeld)

  const totalProsjektkost =
    i.kjopesum +
    i.oppussing +
    (i.kjopesum * i.dokumentavgiftPst) / 100 +
    i.lopendeKostnaderMnd * i.eierperiodeMnd

  // Egenkapitalkrav gjelder kjøpesum for sekundærbolig
  const ekKrav = (i.kjopesum * i.ekKravPst) / 100
  const maksLanEkKrav = i.kjopesum - ekKrav

  const nodvendigLan = Math.max(0, totalProsjektkost - tilgjengeligEk)
  const maksLan = Math.min(laneromGjeldsgrad, maksLanEkKrav + i.oppussing)

  const maksKjopesum = Math.max(
    0,
    Math.min(
      (tilgjengeligEk - i.oppussing) / (i.ekKravPst / 100 + i.dokumentavgiftPst / 100),
      tilgjengeligEk + laneromGjeldsgrad - i.oppussing,
    ),
  )

  const gjeldsgradEtter = samletInntekt > 0 ? (eksisterendeGjeld + nodvendigLan) / samletInntekt : 0
  const gjeldsgradNa = samletInntekt > 0 ? eksisterendeGjeld / samletInntekt : 0

  const nyTerminMnd = annuitet(nodvendigLan, i.nominellRentePst)
  const stressTerminMnd = annuitet(nodvendigLan, i.nominellRentePst + i.stresstestPst)
  const eksisterendeTerminMnd = annuitet(eksisterendeGjeld, i.nominellRentePst)
  const stressTotalMnd =
    stressTerminMnd + annuitet(eksisterendeGjeld, i.nominellRentePst + i.stresstestPst)

  const rentekostPeriode = (nodvendigLan * (i.nominellRentePst / 100) * i.eierperiodeMnd) / 12
  const meglerhonorar = (i.potensiellSalgssum * i.meglerhonorarPst) / 100
  const leieInnPeriode = i.leieinntektObjektMnd * i.eierperiodeMnd

  const nettoGevinst =
    i.potensiellSalgssum - totalProsjektkost - meglerhonorar - rentekostPeriode + leieInnPeriode

  const skatt = nettoGevinst > 0 ? nettoGevinst * 0.22 : 0
  const gevinstEtterSkatt = nettoGevinst - skatt

  const egenkapitalBrukt = Math.max(0, totalProsjektkost - nodvendigLan)
  const roiEk = egenkapitalBrukt > 0 ? gevinstEtterSkatt / egenkapitalBrukt : 0
  const arligAvkastning = i.eierperiodeMnd > 0 ? roiEk * (12 / i.eierperiodeMnd) : 0

  const gjeldsgradOk = gjeldsgradEtter <= i.gjeldsgradFaktor
  const ekOk = tilgjengeligEk >= ekKrav + i.oppussing * 0
  const finansieringOk = nodvendigLan <= maksLan

  return {
    samletInntekt,
    eksisterendeGjeld,
    oppsparteMidler,
    ledigEkBolig,
    tilgjengeligEk,
    maksSamletGjeld,
    laneromGjeldsgrad,
    totalProsjektkost,
    ekKrav,
    nodvendigLan,
    maksLan,
    maksKjopesum,
    gjeldsgradNa,
    gjeldsgradEtter,
    nyTerminMnd,
    stressTerminMnd,
    eksisterendeTerminMnd,
    stressTotalMnd,
    rentekostPeriode,
    meglerhonorar,
    nettoGevinst,
    skatt,
    gevinstEtterSkatt,
    egenkapitalBrukt,
    roiEk,
    arligAvkastning,
    gjeldsgradOk,
    ekOk,
    finansieringOk,
    kanGjennomfores: gjeldsgradOk && finansieringOk && ekOk,
  }
}

export const nok = (v) =>
  new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 }).format(
    Number.isFinite(v) ? v : 0,
  )

export const pst = (v, d = 1) =>
  `${new Intl.NumberFormat('nb-NO', { maximumFractionDigits: d }).format(Number.isFinite(v) ? v * 100 : 0)} %`
