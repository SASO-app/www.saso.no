import { useMemo, useState } from 'react'
import { NumberField } from '../components/calculator/NumberField'
import { Bar, Section, Stat } from '../components/calculator/Section'
import {
  BuildingIcon,
  TrendingUpIcon,
  CreditCardIcon,
  PiggyBankIcon,
  WalletIcon,
  SettingsIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
} from '../components/calculator/icons'
import { beregn, defaultInputs, nok, pst } from '../lib/flipCalc'

const CHART_COLORS = ['#1a1815', '#a97c50', '#8b6440', '#c39a6c', '#7a7568', '#e3ddce']

function Row({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-ink-500">{label}</dt>
      <dd className="font-medium tabular-nums text-ink-950">{value}</dd>
    </div>
  )
}

export default function Kalkulator() {
  const [i, setI] = useState(defaultInputs)
  const [boliger, setBoliger] = useState([
    { verdi: defaultInputs.egenBoligVerdi, lan: defaultInputs.boliglan, leieinntekt: 0 },
  ])

  const set = (k) => (v) => setI((p) => ({ ...p, [k]: v }))

  const syncBoliger = (liste) => {
    setBoliger(liste)
    setI((p) => ({
      ...p,
      egenBoligVerdi: liste.reduce((a, b) => a + b.verdi, 0),
      boliglan: liste.reduce((a, b) => a + b.lan, 0),
      utleieEgenBoligMnd: liste.reduce((a, b) => a + (b.leieinntekt || 0), 0),
    }))
  }

  const setAntall = (n) => {
    const liste = Array.from({ length: n }, (_, idx) => boliger[idx] ?? { verdi: 0, lan: 0, leieinntekt: 0 })
    syncBoliger(liste)
  }

  const oppdaterBolig = (idx, felt, v) =>
    syncBoliger(boliger.map((b, n) => (n === idx ? { ...b, [felt]: v } : b)))

  const r = useMemo(() => beregn(i), [i])

  const ekData = [
    { name: 'Bankinnskudd', value: i.bankinnskudd },
    { name: 'Fond', value: i.fond },
    { name: 'Aksjer', value: i.aksjer },
    { name: 'BSU', value: i.bsu },
    { name: 'Annen EK', value: i.annenEgenkapital },
    { name: 'Ledig EK i bolig', value: r.ledigEkBolig },
  ].filter((d) => d.value > 0)

  const totalEk = ekData.reduce((a, d) => a + d.value, 0) || 1
  let acc = 0
  const donut = ekData
    .map((d, idx) => {
      const from = (acc / totalEk) * 100
      acc += d.value
      const to = (acc / totalEk) * 100
      return `${CHART_COLORS[idx % CHART_COLORS.length]} ${from}% ${to}%`
    })
    .join(', ')

  return (
    <main className="bg-bone-50">
      <div className="bg-ink-950 pt-32 pb-14 text-bone-50">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-oak-400 uppercase">
            SASO · Flippkalkulator
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-medium sm:text-4xl">
            Hva tåler økonomien din når du skal flippe bolig?
          </h1>
          <p className="mt-4 max-w-xl text-bone-50/75">
            Legg inn objektet, hele gjeldsbildet og oppsparte midler. Du får gjeldsgrad, ledig
            egenkapital, låneevne og forventet gevinst – med stresstest på renten.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[1.15fr_1fr]">
        {/* Inputs */}
        <div className="space-y-6">
          <Section title="Objektet" subtitle="Prospektet du vurderer" icon={<BuildingIcon />}>
            <div className="space-y-4">
              <div>
                <label htmlFor="lenke" className="block text-xs font-medium text-ink-500">
                  Lenke til objekt (Finn.no e.l.)
                </label>
                <div className="mt-1.5 flex gap-2">
                  <input
                    id="lenke"
                    placeholder="https://www.finn.no/realestate/..."
                    value={i.objektLenke}
                    onChange={(e) => set('objektLenke')(e.target.value)}
                    className="w-full rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
                  />
                  {i.objektLenke ? (
                    <a
                      href={i.objektLenke}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Åpne objekt"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-ink-950/15 text-ink-700 hover:bg-bone-50"
                    >
                      <ExternalLinkIcon width={16} height={16} />
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <NumberField label="Kjøpesum (prisantydning)" value={i.kjopesum} onChange={set('kjopesum')} />
                <NumberField label="Oppussingskostnad" value={i.oppussing} onChange={set('oppussing')} />
                <NumberField
                  label="Potensiell salgssum"
                  value={i.potensiellSalgssum}
                  onChange={set('potensiellSalgssum')}
                />
                <NumberField
                  label="Eierperiode"
                  value={i.eierperiodeMnd}
                  onChange={set('eierperiodeMnd')}
                  suffix="mnd"
                  step={1}
                />
                <NumberField
                  label="Løpende kostnader"
                  value={i.lopendeKostnaderMnd}
                  onChange={set('lopendeKostnaderMnd')}
                  suffix="kr/mnd"
                  step={500}
                  hint="Felleskost., strøm, forsikring"
                />
                <NumberField
                  label="Meglerhonorar ved salg"
                  value={i.meglerhonorarPst}
                  onChange={set('meglerhonorarPst')}
                  suffix="%"
                  step={0.1}
                />
              </div>
            </div>
          </Section>

          <Section
            title="Inntekt"
            subtitle="Husstandens brutto inntekt og tilleggsinntekter"
            icon={<TrendingUpIcon />}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField
                label="Brutto årsinntekt (husstand)"
                value={i.bruttoArsinntektHusstand}
                onChange={set('bruttoArsinntektHusstand')}
                step={10000}
              />
              <NumberField
                label="Potensiell ekstrainntekt"
                value={i.ekstrainntektArlig}
                onChange={set('ekstrainntektArlig')}
                suffix="kr/år"
                step={10000}
                hint="Bonus, freelance, ny jobb"
              />
              <NumberField
                label="Leieinntekt på objektet"
                value={i.leieinntektObjektMnd}
                onChange={set('leieinntektObjektMnd')}
                suffix="kr/mnd"
                step={500}
                hint="Utleie i oppussings-/salgsperioden"
              />
            </div>
          </Section>

          <Section
            title="Egne boliger og gjeld"
            subtitle="Alle lån og kreditter teller i gjeldsgraden"
            icon={<CreditCardIcon />}
          >
            <div className="mb-4 grid gap-1.5 sm:max-w-xs">
              <label htmlFor="antall-boliger" className="text-sm font-medium text-ink-900">
                Antall egne boliger
              </label>
              <select
                id="antall-boliger"
                value={boliger.length}
                onChange={(e) => setAntall(Number(e.target.value))}
                className="rounded-sm border border-ink-950/15 bg-bone-50 px-4 py-2.5 text-ink-950 focus:border-oak-500 focus:ring-1 focus:ring-oak-500 focus:outline-none"
              >
                {Array.from({ length: 10 }, (_, n) => n + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'bolig' : 'boliger'}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {boliger.map((b, idx) => (
                <div key={idx} className="grid gap-4 rounded-sm border border-line p-4 sm:col-span-2 sm:grid-cols-3">
                  <p className="text-sm font-medium text-ink-950 sm:col-span-3">Bolig {idx + 1}</p>
                  <NumberField
                    label="Verdi"
                    value={b.verdi}
                    onChange={(v) => oppdaterBolig(idx, 'verdi', v)}
                    step={50000}
                  />
                  <NumberField
                    label="Boliglån"
                    value={b.lan}
                    onChange={(v) => oppdaterBolig(idx, 'lan', v)}
                    step={50000}
                  />
                  <NumberField
                    label="Leieinntekt"
                    value={b.leieinntekt || 0}
                    onChange={(v) => oppdaterBolig(idx, 'leieinntekt', v)}
                    suffix="kr/mnd"
                    step={500}
                    hint="Hybel/sokkel i egen bolig"
                  />
                </div>
              ))}
              <div className="grid gap-1 text-sm text-ink-500 sm:col-span-2">
                <span>
                  Sum verdi: {nok(i.egenBoligVerdi)} · Sum boliglån: {nok(i.boliglan)} · Sum
                  leieinntekt: {nok(i.utleieEgenBoligMnd)}/mnd
                </span>
              </div>
              <NumberField label="Billån" value={i.billan} onChange={set('billan')} step={10000} />
              <NumberField label="Studielån" value={i.studielan} onChange={set('studielan')} step={10000} />
              <NumberField label="Forbrukslån" value={i.forbrukslan} onChange={set('forbrukslan')} step={10000} />
              <NumberField
                label="Kredittkortgjeld / ramme"
                value={i.kredittkort}
                onChange={set('kredittkort')}
                step={5000}
              />
            </div>
          </Section>

          <Section
            title="Oppsparte midler"
            subtitle="Dette kan brukes som egenkapital"
            icon={<PiggyBankIcon />}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="Bankinnskudd" value={i.bankinnskudd} onChange={set('bankinnskudd')} step={10000} />
              <NumberField label="Fond" value={i.fond} onChange={set('fond')} step={10000} />
              <NumberField label="Aksjer" value={i.aksjer} onChange={set('aksjer')} step={10000} />
              <NumberField label="BSU" value={i.bsu} onChange={set('bsu')} step={10000} />
              <NumberField
                label="Annen egenkapital"
                value={i.annenEgenkapital}
                onChange={set('annenEgenkapital')}
                step={10000}
                hint="Gave, forskudd på arv, lån fra familie"
                className="sm:col-span-2"
              />
            </div>
          </Section>

          <Section
            title="Forutsetninger"
            subtitle="Bankens rammer – juster ved behov"
            icon={<SettingsIcon />}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField
                label="Egenkapitalkrav sekundærbolig"
                value={i.ekKravPst}
                onChange={set('ekKravPst')}
                suffix="%"
                step={1}
                hint="Ofte 15 % (høyere i Oslo)"
              />
              <NumberField
                label="Nominell rente"
                value={i.nominellRentePst}
                onChange={set('nominellRentePst')}
                suffix="%"
                step={0.1}
              />
              <NumberField
                label="Stresstest renteøkning"
                value={i.stresstestPst}
                onChange={set('stresstestPst')}
                suffix="%-poeng"
                step={0.5}
              />
              <NumberField
                label="Maks gjeldsgrad"
                value={i.gjeldsgradFaktor}
                onChange={set('gjeldsgradFaktor')}
                suffix="x inntekt"
                step={0.5}
              />
              <NumberField
                label="Dokumentavgift"
                value={i.dokumentavgiftPst}
                onChange={set('dokumentavgiftPst')}
                suffix="%"
                step={0.1}
                hint="2,5 % ved selveier"
                className="sm:col-span-2"
              />
            </div>
          </Section>
        </div>

        {/* Results */}
        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div
            className={`flex items-start gap-3 rounded-sm border p-4 ${
              r.kanGjennomfores ? 'border-green-700/30 bg-green-700/10' : 'border-red-600/30 bg-red-600/10'
            }`}
          >
            {r.kanGjennomfores ? (
              <CheckCircleIcon className="mt-0.5 shrink-0 text-green-700" />
            ) : (
              <AlertTriangleIcon className="mt-0.5 shrink-0 text-red-600" />
            )}
            <div>
              <p className="font-medium text-ink-950">
                {r.kanGjennomfores ? 'Prosjektet er innenfor rammene' : 'Prosjektet sprenger rammene'}
              </p>
              <p className="text-xs text-ink-500">
                {r.kanGjennomfores
                  ? `Du har ${nok(r.tilgjengeligEk)} i tilgjengelig egenkapital og trenger ${nok(r.nodvendigLan)} i lån.`
                  : `Nødvendig lån ${nok(r.nodvendigLan)} overstiger låneevnen på ${nok(r.maksLan)}.`}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Gjeldsgrad etter kjøp"
              value={`${r.gjeldsgradEtter.toFixed(2)}x`}
              sub={`Maks ${i.gjeldsgradFaktor}x · i dag ${r.gjeldsgradNa.toFixed(2)}x`}
              tone={r.gjeldsgradOk ? 'success' : 'destructive'}
            />
            <Stat label="Ledig EK i egen bolig" value={nok(r.ledigEkBolig)} sub="85 % av boligverdi minus lån" />
            <Stat label="Oppsparte midler" value={nok(r.oppsparteMidler)} sub="Bank, fond, aksjer, BSU" />
            <Stat label="Maks kjøpesum" value={nok(r.maksKjopesum)} sub="Gitt EK-krav og gjeldsgrad" tone="accent" />
          </div>

          <Section title="Kapitalbilde" subtitle="Hvor egenkapitalen kommer fra">
            <div className="grid items-center gap-4 sm:grid-cols-[150px_1fr]">
              <div className="relative mx-auto h-[140px] w-[140px]">
                <div className="h-full w-full rounded-full" style={{ background: `conic-gradient(${donut})` }} />
                <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full bg-bone-100 text-center">
                  <span className="text-[10px] tracking-wide text-ink-500 uppercase">Total EK</span>
                  <span className="text-xs font-semibold tabular-nums text-ink-950">{nok(r.tilgjengeligEk)}</span>
                </div>
              </div>
              <ul className="space-y-1.5 text-sm">
                {ekData.map((d, idx) => (
                  <li key={d.name} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-ink-500">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: CHART_COLORS[idx % CHART_COLORS.length] }}
                      />
                      {d.name}
                    </span>
                    <span className="tabular-nums text-ink-950">{nok(d.value)}</span>
                  </li>
                ))}
                <li className="flex items-center justify-between gap-3 border-t border-line pt-1.5 font-semibold text-ink-950">
                  <span>Tilgjengelig EK</span>
                  <span className="tabular-nums">{nok(r.tilgjengeligEk)}</span>
                </li>
              </ul>
            </div>
          </Section>

          <Section title="Låneevne og gjeld" subtitle="Mot bankens maksramme">
            <div className="space-y-4">
              <Bar
                label="Eksisterende gjeld"
                value={r.eksisterendeGjeld}
                max={r.maksSamletGjeld}
                caption={nok(r.eksisterendeGjeld)}
              />
              <Bar
                label="Samlet gjeld etter kjøp"
                value={r.eksisterendeGjeld + r.nodvendigLan}
                max={r.maksSamletGjeld}
                tone={r.gjeldsgradOk ? 'success' : 'destructive'}
                caption={nok(r.eksisterendeGjeld + r.nodvendigLan)}
              />
              <Bar
                label="Maks samlet gjeld"
                value={r.maksSamletGjeld}
                max={r.maksSamletGjeld}
                tone="accent"
                caption={nok(r.maksSamletGjeld)}
              />
              <dl className="grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
                <Row label="Samlet inntektsgrunnlag" value={nok(r.samletInntekt)} />
                <Row label="Ledig lånerom" value={nok(r.laneromGjeldsgrad)} />
                <Row label="Nytt lån (behov)" value={nok(r.nodvendigLan)} />
                <Row label="Egenkapital brukt" value={nok(r.egenkapitalBrukt)} />
                <Row label="Termin nytt lån" value={`${nok(r.nyTerminMnd)}/mnd`} />
                <Row label={`Termin ved +${i.stresstestPst} %`} value={`${nok(r.stressTerminMnd)}/mnd`} />
                <Row label="Total termin i dag" value={`${nok(r.nyTerminMnd + r.eksisterendeTerminMnd)}/mnd`} />
                <Row label="Total termin stresstest" value={`${nok(r.stressTotalMnd)}/mnd`} />
              </dl>
            </div>
          </Section>

          <Section title="Flip-økonomi" subtitle="Forventet resultat på prosjektet" icon={<WalletIcon />}>
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <Row label="Total prosjektkostnad" value={nok(r.totalProsjektkost)} />
              <Row label="Dokumentavgift" value={nok((i.kjopesum * i.dokumentavgiftPst) / 100)} />
              <Row label="Meglerhonorar" value={nok(r.meglerhonorar)} />
              <Row label="Rentekostnad i perioden" value={nok(r.rentekostPeriode)} />
              <Row label="Gevinst før skatt" value={nok(r.nettoGevinst)} />
              <Row label="Skatt (22 %)" value={nok(r.skatt)} />
            </dl>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Stat
                label="Gevinst etter skatt"
                value={nok(r.gevinstEtterSkatt)}
                tone={r.gevinstEtterSkatt >= 0 ? 'success' : 'destructive'}
              />
              <Stat
                label="Avkastning på EK"
                value={pst(r.roiEk)}
                sub={`${pst(r.arligAvkastning)} annualisert`}
                tone={r.roiEk >= 0 ? 'success' : 'destructive'}
              />
            </div>
          </Section>

          <p className="text-[11px] leading-relaxed text-ink-500">
            Kalkulatoren er veiledende og erstatter ikke finansieringsbevis fra bank.
            Utlånsforskriften, bankens egne krav og skattemessig behandling av flipping kan gi et
            annet resultat.
          </p>
        </div>
      </div>
    </main>
  )
}
