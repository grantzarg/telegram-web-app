export const RESTRICTION_TYPES = {
  0: 'text',
  1: 'number',
  2: 'text',
};

export const RU_BANKS = {
  Sber: 'Сбербанк',
  Tinkoff: 'Тинькофф',
  RaiffeisenBank: 'Райффайзенбанк',
};

export const SBP_BANKS = [
  {
    id: 'Сбербанк',
    label: 'Сбербанк',
  },
  {
    id: 'Тинькофф Банк',
    label: 'Тинькофф Банк',
  },
  {
    id: 'Райффайзен Банк',
    label: 'Райффайзен Банк',
  },
  {
    id: 'Альфа-Банк',
    label: 'Альфа-Банк',
  },
  {
    id: 'Совкомбанк',
    label: 'Совкомбанк',
  },
  {
    id: 'Банк Точка',
    label: 'Банк Точка',
  },
  {
    id: 'Центр-инвест',
    label: 'Центр-инвест',
  },
  {
    id: 'МТС-банк',
    label: 'МТС-банк',
  },
  {
    id: 'Ренессанс Банк',
    label: 'Ренессанс Банк',
  },
  {
    id: 'Газпромбанк',
    label: 'Газпромбанк',
  },
  {
    id: 'ФК Открытие',
    label: 'ФК Открытие',
  },
  {
    id: 'Россельхозбанк',
    label: 'Россельхозбанк',
  },
  {
    id: 'Хоум Банк',
    label: 'Хоум Банк',
  },
  {
    id: 'Росбанк',
    label: 'Росбанк',
  },
  {
    id: 'ВТБ',
    label: 'ВТБ',
  },
  {
    id: 'ОТП Банк',
    label: 'ОТП Банк',
  },
  {
    id: 'Русский стандарт',
    label: 'Русский стандарт',
  },
  {
    id: 'Почта Банк',
    label: 'Почта Банк',
  },
  {
    id: 'other',
    label: 'Другой банк',
  },
];

export const CURRENCIES = [
  {
    fullName: 'Доллар США',
    shortName: 'USD',
    tradeMethods: [
      {
        identifier: 'Wise',
        tradeMethodName: 'Wise',
      },
      {
        identifier: 'Zelle',
        tradeMethodName: 'Zelle',
      },
      {
        identifier: 'AirTM',
        tradeMethodName: 'AirTM',
      },
      {
        identifier: 'PerfectMoney',
        tradeMethodName: 'Perfect Money',
      },
      {
        identifier: 'SkrillMoneybookers',
        tradeMethodName: 'Skrill (Moneybookers)',
      },
      {
        identifier: 'Payeer',
        tradeMethodName: 'Payeer',
      },
      {
        identifier: 'Advcash',
        tradeMethodName: 'AdvCash',
      },
      {
        identifier: 'Revolut',
        tradeMethodName: 'Revolut',
      },
      {
        identifier: 'Pyypl',
        tradeMethodName: 'Pyypl',
      },
      {
        identifier: 'NETELLER',
        tradeMethodName: 'Neteller',
      },
      {
        identifier: 'TBCbank',
        tradeMethodName: 'TBC Bank',
      },
      {
        identifier: 'BankofGeorgia',
        tradeMethodName: 'Bank of Georgia',
      },
      {
        identifier: 'Prex',
        tradeMethodName: 'Prex',
      },
      {
        identifier: 'ZEN',
        tradeMethodName: 'ZEN',
      },
    ],
  },
  {
    fullName: 'Евро',
    shortName: 'EUR',
    tradeMethods: [
      {
        identifier: 'Wise',
        tradeMethodName: 'Wise',
      },
      {
        identifier: 'Revolut',
        tradeMethodName: 'Revolut',
      },
      {
        identifier: 'N26',
        tradeMethodName: 'N26',
      },
      {
        identifier: 'ZEN',
        tradeMethodName: 'ZEN',
      },
    ],
  },
  {
    fullName: 'Грузинский лари',
    shortName: 'GEL',
    tradeMethods: [
      {
        identifier: 'TBCbank',
        tradeMethodName: 'TBC Bank',
      },
      {
        identifier: 'BankofGeorgia',
        tradeMethodName: 'Bank of Georgia',
      },
    ],
  },
  {
    fullName: 'Российский рубль',
    shortName: 'RUB',
    tradeMethods: [
      {
        identifier: 'Sber',
        tradeMethodName: 'Сбер',
      },
      {
        identifier: 'Tinkoff',
        tradeMethodName: 'Тинькофф',
      },
      {
        identifier: 'RaiffeisenBank',
        tradeMethodName: 'Райффайзенбанк',
      },
      {
        identifier: 'SBP',
        tradeMethodName: 'СБП (система быстрых платежей)',
      },
    ],
  },
  {
    fullName: 'Армяский драм',
    shortName: 'AMD',
    tradeMethods: [
      {
        identifier: 'IDBank',
        tradeMethodName: 'IDBank',
      },
      {
        identifier: 'Inecobank',
        tradeMethodName: 'Inecobank',
      },
      {
        identifier: 'Ameriabank',
        tradeMethodName: 'Ameriabank',
      },
      {
        identifier: 'Idram',
        tradeMethodName: 'Idram',
      },
      {
        identifier: 'Ardshinbank',
        tradeMethodName: 'Ardshinbank',
      },
      {
        identifier: 'ACBAbank',
        tradeMethodName: 'ACBA Bank',
      },
      {
        identifier: 'UNIBANK',
        tradeMethodName: 'Unibank',
      },
      {
        identifier: 'BANK',
        tradeMethodName: 'Банковский перевод',
      },
    ],
  },
  {
    fullName: 'Белорусский рубль',
    shortName: 'BYN',
    tradeMethods: [
      {
        identifier: 'BANK',
        tradeMethodName: 'Банковский перевод',
      },
      {
        identifier: 'ABank',
        tradeMethodName: 'A-Bank',
      },
      {
        identifier: 'MTBank',
        tradeMethodName: 'МТБанк',
      },
      {
        identifier: 'PriorBank',
        tradeMethodName: 'Приорбанк',
      },
      {
        identifier: 'ParitetBank',
        tradeMethodName: 'Паритетбанк',
      },
    ],
  },
  {
    fullName: 'Дирхам ОАЭ',
    shortName: 'AED',
    tradeMethods: [
      {
        identifier: 'BANK',
        tradeMethodName: 'Банковский перевод',
      },
      {
        identifier: 'EmiratesNBD',
        tradeMethodName: 'Emirates NBD',
      },
      {
        identifier: 'ADCB',
        tradeMethodName: 'Abu Dhabi Commercial Bank ADCB',
      },
      {
        identifier: 'ADIB',
        tradeMethodName: 'ADIB: Abu Dhabi Islamic Bank',
      },
      {
        identifier: 'ALMASHREQBank',
        tradeMethodName: 'AL MASHREQ Bank',
      },
      {
        identifier: 'mBank',
        tradeMethodName: 'mBank',
      },
      {
        identifier: 'NationalBankAbuDhabi',
        tradeMethodName: 'National Bank of Abu Dhabi FAB',
      },
      {
        identifier: 'AlHilalBank',
        tradeMethodName: 'Al Hilal Bank',
      },
      {
        identifier: 'Pyypl',
        tradeMethodName: 'Pyypl',
      },
    ],
  },
  {
    fullName: 'Чешская крона',
    shortName: 'CZK',
    tradeMethods: [
      {
        identifier: 'Wise',
        tradeMethodName: 'Wise',
      },
      {
        identifier: 'Revolut',
        tradeMethodName: 'Revolut',
      },
      {
        identifier: 'ZEN',
        tradeMethodName: 'ZEN',
      },
    ],
  },
  {
    fullName: 'Фунт стерлингов',
    shortName: 'GBP',
    tradeMethods: [
      {
        identifier: 'Wise',
        tradeMethodName: 'Wise',
      },
      {
        identifier: 'Revolut',
        tradeMethodName: 'Revolut',
      },
    ],
  },
  {
    fullName: 'Киргизский сом',
    shortName: 'KGS',
    tradeMethods: [
      {
        identifier: 'mBank',
        tradeMethodName: 'mBank',
      },
      {
        identifier: 'OPTIMABANK',
        tradeMethodName: 'Оптима Банк',
      },
      {
        identifier: 'ELCART',
        tradeMethodName: 'Элкарт',
      },
      {
        identifier: 'DEMIRBANK',
        tradeMethodName: 'DemirBank',
      },
      {
        identifier: 'BAKAIBANK',
        tradeMethodName: 'Бакай Банк',
      },
    ],
  },
  {
    fullName: 'Казахстанский тенге',
    shortName: 'KZT',
    tradeMethods: [
      {
        identifier: 'KaspiBank',
        tradeMethodName: 'Kaspi Bank',
      },
      {
        identifier: 'HalykBank',
        tradeMethodName: 'Halyk Bank',
      },
      {
        identifier: 'CenterCreditBank',
        tradeMethodName: 'ЦентрКредит Банк',
      },
      {
        identifier: 'JysanBank',
        tradeMethodName: 'Jysan Bank',
      },
      {
        identifier: 'ForteBank',
        tradeMethodName: 'ForteBank',
      },
      {
        identifier: 'FreedomBank',
        tradeMethodName: 'Freedom Bank',
      },
      {
        identifier: 'AltynBank',
        tradeMethodName: 'Altyn Bank',
      },
      {
        identifier: 'EurasianBank',
        tradeMethodName: 'Евразийский Банк',
      },
      {
        identifier: 'HomeCreditKazakhstan',
        tradeMethodName: 'Хоум Кредит Казахстан',
      },
      {
        identifier: 'BankRBK',
        tradeMethodName: 'Bank RBK',
      },
      {
        identifier: 'Simply',
        tradeMethodName: 'Simply',
      },
      {
        identifier: 'QIWI',
        tradeMethodName: 'QIWI',
      },
    ],
  },
  {
    fullName: 'Молдавский лей',
    shortName: 'MDL',
    tradeMethods: [
      {
        identifier: 'MAIB',
        tradeMethodName: 'MAIB',
      },
      {
        identifier: 'MICB',
        tradeMethodName: 'MICB (Moldova)',
      },
      {
        identifier: 'Victoriabank',
        tradeMethodName: 'Victoriabank',
      },
      {
        identifier: 'Paynet',
        tradeMethodName: 'Paynet',
      },
    ],
  },
  {
    fullName: 'Польский злотый',
    shortName: 'PLN',
    tradeMethods: [
      {
        identifier: 'Revolut',
        tradeMethodName: 'Revolut',
      },
      {
        identifier: 'Wise',
        tradeMethodName: 'Wise',
      },
    ],
  },
  {
    fullName: 'Шведская крона',
    shortName: 'SEK',
    tradeMethods: [
      {
        identifier: 'Wise',
        tradeMethodName: 'Wise',
      },
    ],
  },
  {
    fullName: 'Турецкая лира',
    shortName: 'TRY',
    tradeMethods: [
      {
        identifier: 'Ziraat',
        tradeMethodName: 'Ziraat',
      },
      {
        identifier: 'BANK',
        tradeMethodName: 'Банковский перевод',
      },
      {
        identifier: 'Garanti',
        tradeMethodName: 'Garanti',
      },
      {
        identifier: 'DenizBank',
        tradeMethodName: 'Denizbank',
      },
      {
        identifier: 'VakifBank',
        tradeMethodName: 'VakifBank',
      },
      {
        identifier: 'KuveytTurk',
        tradeMethodName: 'Kuveyt Turk',
      },
      {
        identifier: 'Papara',
        tradeMethodName: 'Papara',
      },
      {
        identifier: 'QNB',
        tradeMethodName: 'QNB',
      },
      {
        identifier: 'ISBANK',
        tradeMethodName: 'İŞBANK',
      },
      {
        identifier: 'Akbank',
        tradeMethodName: 'Akbank',
      },
      {
        identifier: 'Ozan',
        tradeMethodName: 'Ozan',
      },
      {
        identifier: 'alBaraka',
        tradeMethodName: 'alBaraka',
      },
    ],
  },
  {
    fullName: 'Украинская гривна',
    shortName: 'UAH',
    tradeMethods: [
      {
        identifier: 'Monobank',
        tradeMethodName: 'Monobank',
      },
      {
        identifier: 'PrivatBank',
        tradeMethodName: 'ПриватБанк (Универсальная)',
      },
      {
        identifier: 'ABank',
        tradeMethodName: 'A-Bank',
      },
      {
        identifier: 'PUMBBank',
        tradeMethodName: 'PUMB',
      },
      {
        identifier: 'izibank',
        tradeMethodName: 'Izibank',
      },
      {
        identifier: 'Sportbank',
        tradeMethodName: 'Sportbank',
      },
      {
        identifier: 'SenseSuperApp',
        tradeMethodName: 'Sense SuperApp',
      },
      {
        identifier: 'Oschadbank',
        tradeMethodName: 'Ощадбанк',
      },
      {
        identifier: 'RaiffeisenBankAval',
        tradeMethodName: 'Raiffeisen Bank Aval',
      },
      {
        identifier: 'BankVlasnyiRakhunok',
        tradeMethodName: 'Bank Vlasnyi Rakhunok',
      },
      {
        identifier: 'Ukrsibbank',
        tradeMethodName: 'Ukrsibbank',
      },
      {
        identifier: 'OTPBankNew',
        tradeMethodName: 'OTP BANK',
      },
      {
        identifier: 'CreditAgricole',
        tradeMethodName: 'Credit Agricole',
      },
      {
        identifier: 'RaiffeisenBank',
        tradeMethodName: 'Райффайзенбанк',
      },
      {
        identifier: 'Ukrgasbank',
        tradeMethodName: 'Ukrgasbank',
      },
      {
        identifier: 'KredoBank',
        tradeMethodName: 'KredoBank',
      },
      {
        identifier: 'IdeaBank',
        tradeMethodName: 'Idea Bank',
      },
      {
        identifier: 'Wise',
        tradeMethodName: 'Wise',
      },
    ],
  },
];

export const MIN_AMOUNTS = {
  AED: {
    AED: 100,
    AMD: 100,
    BYN: 145,
    CZK: 158,
    EUR: 193,
    GBP: 446,
    GEL: 137,
    KGS: 100,
    KZT: 100,
    MDL: 101,
    PLN: 168,
    RUB: 186,
    SEK: 167,
    TRY: 134,
    UAH: 100,
    USD: 367,
  },
  AMD: {
    AMD: 10000,
    AED: 10780,
    BYN: 15618,
    CZK: 17031,
    EUR: 20851,
    GBP: 48100,
    GEL: 14747,
    KGS: 10000,
    KZT: 10000,
    MDL: 10851,
    PLN: 18096,
    RUB: 20016,
    SEK: 18001,
    TRY: 14414,
    UAH: 10772,
    USD: 39588,
  },
  BYN: {
    BYN: 100,
    AED: 100,
    AMD: 100,
    CZK: 109,
    EUR: 134,
    GBP: 308,
    GEL: 100,
    KGS: 100,
    KZT: 100,
    MDL: 100,
    PLN: 116,
    RUB: 128,
    SEK: 115,
    TRY: 100,
    UAH: 100,
    USD: 253,
  },
  CZK: {
    CZK: 1000,
    AED: 1000,
    AMD: 1000,
    BYN: 1000,
    EUR: 1224,
    GBP: 2824,
    GEL: 1000,
    KGS: 1000,
    KZT: 1000,
    MDL: 1000,
    PLN: 1063,
    RUB: 1175,
    SEK: 1057,
    TRY: 1000,
    UAH: 1000,
    USD: 2325,
  },
  EUR: {
    EUR: 50,
    AED: 50,
    AMD: 50,
    BYN: 50,
    CZK: 50,
    GBP: 115,
    GEL: 50,
    KGS: 50,
    KZT: 50,
    MDL: 50,
    PLN: 50,
    RUB: 50,
    SEK: 50,
    TRY: 50,
    UAH: 50,
    USD: 95,
  },
  GBP: {
    GBP: 100,
    AED: 100,
    AMD: 100,
    BYN: 100,
    CZK: 100,
    EUR: 100,
    GEL: 100,
    KGS: 100,
    KZT: 100,
    MDL: 100,
    PLN: 100,
    RUB: 100,
    SEK: 100,
    TRY: 100,
    UAH: 100,
    USD: 100,
  },
  GEL: {
    GEL: 100,
    AED: 100,
    AMD: 100,
    BYN: 106,
    CZK: 115,
    EUR: 141,
    GBP: 326,
    KGS: 100,
    KZT: 100,
    MDL: 100,
    PLN: 123,
    RUB: 136,
    SEK: 122,
    TRY: 100,
    UAH: 100,
    USD: 268,
  },
  KGS: {
    KGS: 2000,
    AED: 2415,
    AMD: 2240,
    BYN: 3499,
    CZK: 3816,
    EUR: 4671,
    GBP: 10776,
    GEL: 3304,
    KZT: 2000,
    MDL: 2431,
    PLN: 4054,
    RUB: 4484,
    SEK: 4033,
    TRY: 3229,
    UAH: 2413,
    USD: 8869,
  },
  KZT: {
    KZT: 10000,
    AED: 13066,
    AMD: 12121,
    BYN: 18930,
    CZK: 20643,
    EUR: 25274,
    GBP: 58301,
    GEL: 17874,
    KGS: 10821,
    MDL: 13153,
    PLN: 21934,
    RUB: 24261,
    SEK: 21819,
    TRY: 17471,
    UAH: 13057,
    USD: 47985,
  },
  MDL: {
    MDL: 500,
    AMD: 500,
    BYN: 720,
    CZK: 785,
    EUR: 961,
    GBP: 2216,
    GEL: 679,
    KGS: 500,
    KZT: 500,
    PLN: 834,
    RUB: 922,
    SEK: 829,
    TRY: 664,
    UAH: 500,
    USD: 1824,
  },
  PLN: {
    PLN: 200,
    AED: 200,
    AMD: 200,
    BYN: 200,
    CZK: 200,
    EUR: 230,
    GBP: 532,
    GEL: 200,
    KGS: 200,
    KZT: 200,
    MDL: 200,
    RUB: 221,
    SEK: 200,
    TRY: 200,
    UAH: 200,
    USD: 438,
  },
  RUB: {
    RUB: 5000,
    AED: 5000,
    AMD: 5000,
    BYN: 5000,
    CZK: 5000,
    EUR: 5209,
    GBP: 12015,
    GEL: 2000,
    KGS: 5000,
    KZT: 5000,
    MDL: 5000,
    PLN: 5000,
    SEK: 5000,
    TRY: 5000,
    UAH: 5000,
    USD: 9889,
  },
  SEK: {
    SEK: 500,
    AED: 500,
    AMD: 500,
    BYN: 500,
    CZK: 500,
    EUR: 579,
    GBP: 1336,
    GEL: 500,
    KGS: 500,
    KZT: 500,
    MDL: 500,
    PLN: 503,
    RUB: 556,
    TRY: 500,
    UAH: 500,
    USD: 1100,
  },
  TRY: {
    TRY: 1000,
    AED: 1000,
    AMD: 1000,
    BYN: 1083,
    CZK: 1182,
    EUR: 1447,
    GBP: 3337,
    GEL: 1023,
    KGS: 1000,
    KZT: 1000,
    MDL: 1000,
    PLN: 1255,
    RUB: 1389,
    SEK: 1249,
    UAH: 1000,
    USD: 2746,
  },
  UAH: {
    UAH: 1000,
    AED: 1001,
    AMD: 1000,
    BYN: 1450,
    CZK: 1581,
    EUR: 1936,
    GBP: 4465,
    GEL: 1369,
    KGS: 1000,
    KZT: 1000,
    MDL: 1007,
    PLN: 1680,
    RUB: 1858,
    SEK: 1671,
    TRY: 1338,
    USD: 3675,
  },
  USD: {
    USD: 100,
    AED: 100,
    AMD: 100,
    BYN: 100,
    CZK: 100,
    EUR: 100,
    GBP: 122,
    GEL: 100,
    KGS: 100,
    KZT: 100,
    MDL: 100,
    PLN: 100,
    RUB: 100,
    SEK: 100,
    TRY: 100,
    UAH: 100,
  },
};
