import { modeForFrequency } from './modes'

describe('modeForFrequency', () => {
  it('should find the most common mode for a frequency', () => {
    expect(modeForFrequency(14255)).toEqual('USB')
    expect(modeForFrequency(14107)).toEqual('CW')
    expect(modeForFrequency(14074)).toEqual('FT8')

    expect(modeForFrequency(14140)).toEqual('CW')
    expect(modeForFrequency(14140, { region: 2 })).toEqual('USB')
    expect(modeForFrequency(14140, { entity: 'K' })).toEqual('CW')

  })
})
