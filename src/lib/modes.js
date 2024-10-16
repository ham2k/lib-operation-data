import BandPlans from '../data/bandPlans.json'

export const SUPER_MODES = [
  'CW',
  'PHONE',
  'DATA'
]

export const MAIN_MODES = [
  'CW',
  'SSB',
  'AM',
  'FM',
  'FT8',
  'FT4',
  'RTTY'
]

export const POPULAR_MODES = [
  'CW',
  'SSB',
  'USB',
  'LSB',
  'FM',
  'AM',
  'FT8',
  'FT4',
  'RTTY',
  'DIGITALVOICE',
  'C4FM',
  'DMR',
  'DSTAR',
  'FREEDV',
  'M17',
  'DYNAMIC',
  'HELL',
  'JT9',
  'MFSK',
  'MSK144',
  'OLIVIA',
  'PKT',
  'PSK',
  'SSTV',
  'WSPR',
]

export const ADIF_MODES = [
  'AM',
  'ARDOP',
  'ATV',
  'CHIP',
  'CLO',
  'CONTESTI',
  'CW',
  'DIGITALVOICE',
  'DOMINO',
  'DYNAMIC',
  'FAX',
  'FM',
  'FSK441',
  'FT8',
  'HELL',
  'ISCAT',
  'JT4',
  'JT6M',
  'JT9',
  'JT44',
  'JT65',
  'MFSK',
  'MSK144',
  'MT63',
  'OLIVIA',
  'OPERA',
  'PAC',
  'PAX',
  'PKT',
  'PSK',
  'PSK2K',
  'Q15',
  'QRA64',
  'ROS',
  'RTTY',
  'RTTYM',
  'SSB',
  'SSTV',
  'T10',
  'THOR',
  'THRB',
  'TOR',
  'V4',
  'VOI',
  'WINMOR',
  'WSPR'
]

export const ADIF_SUBMODES = {
  'CHIP': ['CHIP64', 'CHIP128'],
  'DIGITALVOICE': ['C4FM', 'DMR', 'DSTAR', 'FREEDV', 'M17'],
  'DOMINO': ['DOM-M', 'DOM4', 'DOM5', 'DOM8', 'DOM11', 'DOM16', 'DOM22', 'DOM44', 'DOM88', 'DOMINOEX', 'DOMINOF'],
  'DYNAMIC': ['VARA HF', 'VARA SATELLITE', 'VARA FM 1200', 'VARA FM 9600'],
  'HELL': ['FMHELL', 'FSKHELL', 'HELL80', 'HELLX5', 'HELLX9', 'HFSK', 'PSKHELL', 'SLOWHELL'],
  'ISCAT': ['ISCAT-A', 'ISCAT-B'],
  'JT4': ['JT4A', 'JT4B', 'JT4C', 'JT4D', 'JT4E', 'JT4F', 'JT4G'],
  'JT9': ['JT9-1', 'JT9', 'JT9-2', 'JT9-5', 'JT9-10', 'JT9-30', 'JT9A', 'JT9B', 'JT9C', 'JT9D', 'JT9E', 'JT9E FAST', 'JT9F', 'JT9F FAST', 'JT9G', 'JT9G FAST', 'JT9H', 'JT9H FAST'],
  'JT65': ['JT65A', 'JT65B', 'JT65B2', 'JT65C', 'JT65C2'],
  'MFSK': ['FSQCALL', 'FST4', 'FST4W', 'FT4', 'JS8', 'JTMS', 'MFSK4', 'MFSK8', 'MFSK11', 'MFSK16', 'MFSK22', 'MFSK31', 'MFSK32', 'MFSK64', 'MFSK64L', 'MFSK128 MFSK128L', 'Q65'],
  'OLIVIA': ['OLIVIA 4/125', 'OLIVIA 4/250', 'OLIVIA 8/250', 'OLIVIA 8/500', 'OLIVIA 16/500', 'OLIVIA 16/1000', 'OLIVIA 32/1000'],
  'OPERA': ['OPERA-BEACON', 'OPERA-QSO'],
  'PAC': ['PAC2', 'PAC3', 'PAC4'],
  'PAX': ['PAX2'],
  'PSK': ['8PSK125', '8PSK125F', '8PSK125FL', '8PSK250', '8PSK250F', '8PSK250FL', '8PSK500', '8PSK500F', '8PSK1000', '8PSK1000F', '8PSK1200F', 'FSK31', 'PSK10', 'PSK31', 'PSK63', 'PSK63F', 'PSK63RC4', 'PSK63RC5', 'PSK63RC10', 'PSK63RC20', 'PSK63RC32', 'PSK125', 'PSK125C12', 'PSK125R', 'PSK125RC10', 'PSK125RC12', 'PSK125RC16', 'PSK125RC4', 'PSK125RC5', 'PSK250', 'PSK250C6', 'PSK250R', 'PSK250RC2', 'PSK250RC3', 'PSK250RC5', 'PSK250RC6', 'PSK250RC7', 'PSK500', 'PSK500C2', 'PSK500C4', 'PSK500R', 'PSK500RC2', 'PSK500RC3', 'PSK500RC4', 'PSK800C2', 'PSK800RC2', 'PSK1000', 'PSK1000C2', 'PSK1000R', 'PSK1000RC2', 'PSKAM10', 'PSKAM31', 'PSKAM50', 'PSKFEC31', 'QPSK31', 'QPSK63', 'QPSK125', 'QPSK250', 'QPSK500', 'SIM31'],
  'QRA64': ['QRA64A', 'QRA64B', 'QRA64C', 'QRA64D', 'QRA64E'],
  'ROS': ['ROS-EME', 'ROS-HF', 'ROS-MF'],
  'RTTY': ['ASCI'],
  'SSB': ['LSB', 'USB'],
  'THOR': ['THOR-M', 'THOR4', 'THOR5', 'THOR8', 'THOR11', 'THOR16', 'THOR22', 'THOR25X4', 'THOR50X1', 'THOR50X2', 'THOR100'],
  'THRB': ['THRBX', 'THRBX1', 'THRBX2', 'THRBX4', 'THROB1', 'THROB2', 'THROB4'],
  'TOR': ['AMTORFEC', 'GTOR', 'NAVTEX', 'SITORB']
}

export const ADIF_MODE_FOR_SUBMODE = {}
Object.keys(ADIF_SUBMODES).forEach(mode => {
  ADIF_SUBMODES[mode].forEach(submode => {
    ADIF_MODE_FOR_SUBMODE[submode] = mode
  })
})

export const ADIF_MODES_AND_SUBMODES = [... new Set(ADIF_MODES.concat(Object.values(ADIF_SUBMODES)).flat())].sort()

export function adifModeAndSubmodeForMode(mode) {
  if (ADIF_MODE_FOR_SUBMODE[mode]) {
    return [ADIF_MODE_FOR_SUBMODE[mode], mode]
  } else {
    return [mode]
  }
}

export function superModeForMode(mode) {
  if (ADIF_MODE_FOR_SUBMODE[mode]) mode = ADIF_MODE_FOR_SUBMODE[mode]

  if (mode === 'CW') {
    return 'CW'
  } else if (mode === 'SSB' || mode === 'FM' || mode === 'AM' || mode === 'DIGITALVOICE' || mode === 'PHONE') {
    return 'PHONE'
  } else {
    return 'DATA'
  }
}

const AllSegments = Object.keys(BandPlans.bands).reduce((segments, band) => {
  return segments.concat(
    BandPlans.bands[band].segments.map(segment => (
      {
        ...segment,
        band,
        width: segment.mhz[1] - segment.mhz[0],
        regions: (segment.regions || []).reduce((regions, region) => { regions[region] = true; return regions }, {}),
        entities: (segment.entities || []).reduce((entities, entity) => { entities[entity] = true; return entities }, {}),
        countries: (segment.countries || []).reduce((countries, country) => { countries[country] = true; return countries }, {}),
      }
    ))
  )
}, [])

export function modeForFrequency(frequency, { ituRegion, countryCode, entityPrefix } = {}) {
  const segments = AllSegments.filter(segment => segment.mhz[0] <= frequency && segment.mhz[1] >= frequency)
  const sortedSegments = segments.sort((a, b) => {
    if (entityPrefix && !a.entities[entityPrefix] && b.entities[entityPrefix]) return 1
    if (entityPrefix && a.entities[entityPrefix] && !b.entities[entityPrefix]) return -1

    if (countryCode && !a.countries[countryCode] && b.countries[countryCode]) return 1
    if (countryCode && a.countries[countryCode] && !b.countries[countryCode]) return -1

    if (ituRegion && !a.regions[ituRegion] && b.regions[ituRegion]) return 1
    if (ituRegion && a.regions[ituRegion] && !b.regions[ituRegion]) return -1

    return a.width - b.width
  })
  return sortedSegments[0]?.mode
}
