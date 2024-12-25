import dateConverter from 'nepali-datetime/dateConverter'

export const NEPALI_NUMBERS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']

export const LOCALE_EN = 'en'
export const LOCALE_NE = 'ne'
export const DEFAULT_LOCALE = LOCALE_EN

export const MIN_NEPALI_YEAR = dateConverter.npMinYear()
export const MAX_NEPALI_YEAR = dateConverter.npMaxYear()

// TODO: use export `NP_MONTHS_DATA` from nepali-datetime for single source of truth
// Nepali months data
export const NP_MONTHS_DATA: Array<[number[], number]> = [
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365], // 2000 BS - 1943/1944 AD
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365], // 2001 BS
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
  [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
  [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
  [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31], 366],
  [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
  [[31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30], 365],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30], 365], // 2080
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31], 366],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30], 366],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], 366],
  [[30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30], 365],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30], 366],
  [[30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30], 366],
  [[30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30], 364],
  [[31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30], 366],
  [[31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31], 365],
  [[31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30], 365], // 2099 BS - 2042/2043 AD
]

export const NEPALI_MONTHS_EN = [
  'Baisakh',
  'Jestha',
  'Asar',
  'Shrawan',
  'Bhadra',
  'Aswin',
  'Kartik',
  'Mangsir',
  'Poush',
  'Magh',
  'Falgun',
  'Chaitra',
]

export const NEPALI_MONTHS_NE = [
  'बैशाख',
  'जेठ',
  'असार',
  'श्रावण',
  'भाद्र',
  'आश्विन',
  'कार्तिक',
  'मंसिर',
  'पौष',
  'माघ',
  'फाल्गुण',
  'चैत्र',
]

export const WEEKDAYS_SHORT_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const WEEKDAYS_SHORT_NE = ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि']
