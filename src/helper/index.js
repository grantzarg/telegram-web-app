import {useMemo} from "react";

export const CURRENCIES = [
    {
        "fullName": "Russian Ruble",
        "shortName": "RUB",
        "tradeMethods": [
            {
                "identifier": "Sber",
                "tradeMethodName": "Cбер"
            },
            {
                "identifier": "Tinkoff",
                "tradeMethodName": "Тинькофф"
            },
            {
            "identifier": "RaiffeisenBank",
            "tradeMethodName": "Райффайзенбанк"
        }, {
            "identifier": "RussianStandardBank",
            "tradeMethodName": "Русский Стандарт"
        }, {
            "identifier": "PostBankNew",
            "tradeMethodName": "Почта Банк"
        }, {
            "identifier": "QIWI",
            "tradeMethodName": "QIWI"
        }, {
            "identifier": "HomeCreditBank",
            "tradeMethodName": "Хоум Кредит Банк (Россия)"
        }, {
            "identifier": "CitibankRussia",
            "tradeMethodName": "Ситибанк"
        }, {
            "identifier": "AkBarsBank",
            "tradeMethodName": "Ак Барс Банк"
        }, {
            "identifier": "RenaissanceCredit",
            "tradeMethodName": "Ренессанс Кредит Банк"
        }, {
            "identifier": "BCSBank",
            "tradeMethodName": "БКС Банк"
        }, {
            "identifier": "Mobiletopup",
            "tradeMethodName": "Пополнение баланса мобильного телефона"
        }, {
            "identifier": "CreditEuropeBank",
            "tradeMethodName": "Кредит Европа Банк (Россия)"
        }, {
            "identifier": "Advcash",
            "tradeMethodName": "AdvCash"
        }, {
            "identifier": "Payeer",
            "tradeMethodName": "Payeer"
        }, {
            "identifier": "UniCreditRussia",
            "tradeMethodName": "ЮниКредит"
        }, {
            "identifier": "RaiffeisenBankAval",
            "tradeMethodName": "Raiffeisen Bank Aval"
        }]
    },
    {
        "fullName": "US Dollar",
        "shortName": "USD",
        "tradeMethods": [{
            "identifier": "Wise",
            "tradeMethodName": "Wise"
        }, {
            "identifier": "Zelle",
            "tradeMethodName": "Zelle"
        }, {
            "identifier": "AirTM",
            "tradeMethodName": "AirTM"
        }, {
            "identifier": "PerfectMoney",
            "tradeMethodName": "Perfect Money"
        }, {
            "identifier": "SkrillMoneybookers",
            "tradeMethodName": "Skrill (Moneybookers)"
        }, {
            "identifier": "Zinli",
            "tradeMethodName": "Zinli"
        }, {
            "identifier": "BancoPichincha",
            "tradeMethodName": "Banco Pichincha"
        }, {
            "identifier": "Payeer",
            "tradeMethodName": "Payeer"
        }, {
            "identifier": "Advcash",
            "tradeMethodName": "AdvCash"
        }, {
            "identifier": "Revolut",
            "tradeMethodName": "Revolut"
        }, {
            "identifier": "BANK",
            "tradeMethodName": "Банковский перевод"
        }, {
            "identifier": "BancoGuayaquil",
            "tradeMethodName": "Banco Guayaquil"
        }, {
            "identifier": "BanescoPanama",
            "tradeMethodName": "Banesco Panama"
        }, {
            "identifier": "Pyypl",
            "tradeMethodName": "Pyypl"
        }, {
            "identifier": "NETELLER",
            "tradeMethodName": "Neteller"
        }, {
            "identifier": "BankofAmerica",
            "tradeMethodName": "Bank of America"
        }, {
            "identifier": "ABA",
            "tradeMethodName": "ABA"
        }, {
            "identifier": "PrivatBank",
            "tradeMethodName": "ПриватБанк (Универсальная)"
        }, {
            "identifier": "MAIB",
            "tradeMethodName": "MAIB"
        }, {
            "identifier": "Produbanco",
            "tradeMethodName": "Produbanco"
        }, {
            "identifier": "Monobank",
            "tradeMethodName": "Monobank"
        }, {
            "identifier": "MICB",
            "tradeMethodName": "MICB (Moldova)"
        }, {
            "identifier": "CreditBankofPeru",
            "tradeMethodName": "Credit Bank of Peru"
        }, {
            "identifier": "TBCbank",
            "tradeMethodName": "TBC Bank"
        }, {
            "identifier": "Interbank",
            "tradeMethodName": "Interbank"
        }, {
            "identifier": "BankofGeorgia",
            "tradeMethodName": "Bank of Georgia"
        }, {
            "identifier": "Victoriabank",
            "tradeMethodName": "Victoriabank"
        }, {
            "identifier": "WesternUnion",
            "tradeMethodName": "Western Union"
        }, {
            "identifier": "Facebank",
            "tradeMethodName": "Facebank International"
        }, {
            "identifier": "BancoDeCredito",
            "tradeMethodName": "Banco de Credito"
        }, {
            "identifier": "MercantilBankPanama",
            "tradeMethodName": "Mercantil Bank Panama"
        }, {
            "identifier": "SWIFT",
            "tradeMethodName": "Международный перевод (SWIFT)"
        }, {
            "identifier": "Cashapp",
            "tradeMethodName": "Cash app"
        }, {
            "identifier": "BancoGeneralPanama",
            "tradeMethodName": "Banco General Panama"
        }, {
            "identifier": "BBVABank",
            "tradeMethodName": "BBVA"
        }, {
            "identifier": "RaiffeisenBank",
            "tradeMethodName": "Райффайзенбанк"
        }, {
            "identifier": "Prex",
            "tradeMethodName": "Prex"
        }, {
            "identifier": "ZEN",
            "tradeMethodName": "ZEN"
        }, {
            "identifier": "Kapitalbank",
            "tradeMethodName": "Капиталбанк"
        }, {
            "identifier": "Mony",
            "tradeMethodName": "Mony"
        }, {
            "identifier": "ACLEDA",
            "tradeMethodName": "ACLEDA"
        }, {
            "identifier": "KHQR",
            "tradeMethodName": "KHQR"
        }, {
            "identifier": "KaspiBank",
            "tradeMethodName": "Kaspi Bank"
        }, {
            "identifier": "Utoppia",
            "tradeMethodName": "Utoppia"
        }, {
            "identifier": "SpecificBank",
            "tradeMethodName": "Переводы в конкретном банке"
        }, {
            "identifier": "WingMoney",
            "tradeMethodName": "Wing Money"
        }, {
            "identifier": "BanistmoPanama",
            "tradeMethodName": "Banistmo Panama"
        }, {
            "identifier": "ScotiabankPeru",
            "tradeMethodName": "Scotiabank Peru"
        }, {
            "identifier": "BancoDelPacifico",
            "tradeMethodName": "Banco del pacifico"
        }, {
            "identifier": "CenterCreditBank",
            "tradeMethodName": "ЦентрКредит Банк"
        }, {
            "identifier": "ABank",
            "tradeMethodName": "A-Bank"
        }, {
            "identifier": "JysanBank",
            "tradeMethodName": "Jysan Bank"
        }, {
            "identifier": "Ziraat",
            "tradeMethodName": "Ziraat"
        }, {
            "identifier": "MoneyGram",
            "tradeMethodName": "Moneygram"
        }, {
            "identifier": "ForteBank",
            "tradeMethodName": "ForteBank"
        }, {
            "identifier": "PriorBank",
            "tradeMethodName": "Приорбанк"
        }, {
            "identifier": "BankArgentina",
            "tradeMethodName": "Bank Transfer (Argentina)"
        }, {
            "identifier": "HalykBank",
            "tradeMethodName": "Halyk Bank"
        }, {
            "identifier": "IpakYuliBank",
            "tradeMethodName": "Ipak Yuli Bank"
        }, {
            "identifier": "VakifBank",
            "tradeMethodName": "VakifBank"
        }, {
            "identifier": "DenizBank",
            "tradeMethodName": "Denizbank"
        }, {
            "identifier": "DukascopyBank",
            "tradeMethodName": "Dukascopy Bank"
        }, {
            "identifier": "BankTransferCambodia",
            "tradeMethodName": "Bank Transfer (Cambodia)"
        }, {
            "identifier": "FreedomBank",
            "tradeMethodName": "Freedom Bank"
        }, {
            "identifier": "UNIBANK",
            "tradeMethodName": "Unibank"
        }, {
            "identifier": "PipolPay",
            "tradeMethodName": "Pipol Pay"
        }, {
            "identifier": "RaiffeisenBankAval",
            "tradeMethodName": "Raiffeisen Bank Aval"
        }, {
            "identifier": "ISBANK",
            "tradeMethodName": "İŞBANK"
        }, {
            "identifier": "BancoBolivariano",
            "tradeMethodName": "Banco Bolivariano"
        }, {
            "identifier": "MTNMobileMoney",
            "tradeMethodName": "MTN Mobile Money"
        }, {
            "identifier": "AltynBank",
            "tradeMethodName": "Altyn Bank"
        }, {
            "identifier": "BAKAIBANK",
            "tradeMethodName": "Бакай Банк"
        }, {
            "identifier": "PUMBBank",
            "tradeMethodName": "PUMB"
        }, {
            "identifier": "WallyTech",
            "tradeMethodName": "Wally Tech"
        }, {
            "identifier": "ALIPAY",
            "tradeMethodName": "Alipay"
        }, {
            "identifier": "IDBank",
            "tradeMethodName": "IDBank"
        }, {
            "identifier": "Papara",
            "tradeMethodName": "Papara"
        }, {
            "identifier": "BACcostarica",
            "tradeMethodName": "BAC Costa Rica"
        }, {
            "identifier": "BancoBrubankNew",
            "tradeMethodName": "Banco Brubank"
        }, {
            "identifier": "RussianStandardBank",
            "tradeMethodName": "Русский Стандарт"
        }, {
            "identifier": "QNB",
            "tradeMethodName": "QNB"
        }, {
            "identifier": "CREDOBANK",
            "tradeMethodName": "Credo Bank"
        }, {
            "identifier": "ItauUruguay",
            "tradeMethodName": "Itaú Uruguay"
        }, {
            "identifier": "Oldubil",
            "tradeMethodName": "OLDUBIL"
        }, {
            "identifier": "TransferenciaACH",
            "tradeMethodName": "Transferencia ACH (Panamá)"
        }, {
            "identifier": "BankRepublicUruguay",
            "tradeMethodName": "Bank of the Republic of Uruguay"
        }, {
            "identifier": "BankTransferVietnam",
            "tradeMethodName": "Bank Transfer (Vietnam)"
        }, {
            "identifier": "Garanti",
            "tradeMethodName": "Garanti"
        }, {
            "identifier": "Gcash",
            "tradeMethodName": "Gcash"
        }, {
            "identifier": "FirstBankOfNigeria",
            "tradeMethodName": "First Bank Of Nigeria"
        }, {
            "identifier": "GTBank",
            "tradeMethodName": "GTBank"
        }, {
            "identifier": "Inecobank",
            "tradeMethodName": "Inecobank"
        }, {
            "identifier": "UPI",
            "tradeMethodName": "UPI"
        }, {
            "identifier": "DEMIRBANK",
            "tradeMethodName": "DemirBank"
        }, {
            "identifier": "Ozan",
            "tradeMethodName": "Ozan"
        }, {
            "identifier": "SantanderUrug",
            "tradeMethodName": "Banco Santander Uruguay"
        }, {
            "identifier": "AccessBank",
            "tradeMethodName": "Access Bank"
        }, {
            "identifier": "BancoDeCostaRica",
            "tradeMethodName": "Banco de Costa Rica"
        }, {
            "identifier": "BankTransferCosta",
            "tradeMethodName": "Bank Transfer (Costa Rica)"
        }, {
            "identifier": "NaranjaX",
            "tradeMethodName": "Naranja X"
        }, {
            "identifier": "OPTIMABANK",
            "tradeMethodName": "Оптима Банк"
        }, {
            "identifier": "Paytm",
            "tradeMethodName": "Paytm"
        }, {
            "identifier": "TDbank",
            "tradeMethodName": "TD Bank"
        }, {
            "identifier": "Ameriabank",
            "tradeMethodName": "Ameriabank"
        }, {
            "identifier": "Anorbank",
            "tradeMethodName": "Anorbank"
        }, {
            "identifier": "BankIndia",
            "tradeMethodName": "Банковский перевод (Индия)"
        }, {
            "identifier": "EasypaisaPK",
            "tradeMethodName": "Easypaisa-PK Only"
        }, {
            "identifier": "LloydsBank",
            "tradeMethodName": "Lloyds Bank"
        }, {
            "identifier": "TBCR",
            "tradeMethodName": "Transferencia Bancaria Costa Rica"
        }, {
            "identifier": "Towerbank",
            "tradeMethodName": "Towerbank"
        }, {
            "identifier": "WhishMONEY",
            "tradeMethodName": "whish MONEY"
        }, {
            "identifier": "IMPS",
            "tradeMethodName": "IMPS"
        }, {
            "identifier": "Paymaya",
            "tradeMethodName": "Paymaya"
        }, {
            "identifier": "Akbank",
            "tradeMethodName": "Akbank"
        }, {
            "identifier": "BPI",
            "tradeMethodName": "Bank of the Philippine Islands (BPI)"
        }, {
            "identifier": "Bakong",
            "tradeMethodName": "Bakong"
        }, {
            "identifier": "BancoDaviviendaSV",
            "tradeMethodName": "Banco Davivienda SV"
        }, {
            "identifier": "FinComBank",
            "tradeMethodName": "FinComBank"
        }, {
            "identifier": "Humo",
            "tradeMethodName": "Humo"
        }, {
            "identifier": "Nequi",
            "tradeMethodName": "Nequi"
        }, {
            "identifier": "Ardshinbank",
            "tradeMethodName": "Ardshinbank"
        }, {
            "identifier": "CashDeposit",
            "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
        }, {
            "identifier": "CitibankRussia",
            "tradeMethodName": "Ситибанк"
        }, {
            "identifier": "HomeCreditBank",
            "tradeMethodName": "Хоум Кредит Банк (Россия)"
        }, {
            "identifier": "mBank",
            "tradeMethodName": "mBank"
        }, {
            "identifier": "AloqaBank",
            "tradeMethodName": "Алокабанк"
        }, {
            "identifier": "BancoAgricolaSV",
            "tradeMethodName": "Banco Agricola SV"
        }, {
            "identifier": "FPS",
            "tradeMethodName": "Instant Transfer"
        }, {
            "identifier": "InteracETransfer",
            "tradeMethodName": "Interac e-Transfer"
        }, {
            "identifier": "MPesaKenya",
            "tradeMethodName": "M-PESA Kenya (Safaricom)"
        }, {
            "identifier": "Maybank",
            "tradeMethodName": "Maybank"
        }, {
            "identifier": "MoMoNew",
            "tradeMethodName": "MoMo"
        }, {
            "identifier": "PagoMovil",
            "tradeMethodName": "Pago Movil"
        }, {
            "identifier": "PostBankNew",
            "tradeMethodName": "Почта Банк"
        }, {
            "identifier": "SantanderArgentina",
            "tradeMethodName": "Banco Santander Argentina"
        }, {
            "identifier": "Evocabank",
            "tradeMethodName": "Evocabank"
        }, {
            "identifier": "KudaBankNG",
            "tradeMethodName": "Kuda Bank NG"
        }, {
            "identifier": "KuveytTurk",
            "tradeMethodName": "Kuveyt Turk"
        }, {
            "identifier": "NayaPay",
            "tradeMethodName": "NayaPay"
        }, {
            "identifier": "SEPAinstant",
            "tradeMethodName": "SEPA Instant"
        }, {
            "identifier": "SadaPay",
            "tradeMethodName": "SadaPay"
        }, {
            "identifier": "UBoP",
            "tradeMethodName": "UnionBank of the Philippines"
        }, {
            "identifier": "Uphold",
            "tradeMethodName": "Uphold"
        }, {
            "identifier": "alBaraka",
            "tradeMethodName": "alBaraka"
        }, {
            "identifier": "ACBAbank",
            "tradeMethodName": "ACBA Bank"
        }, {
            "identifier": "ADIB",
            "tradeMethodName": "ADIB: Abu Dhabi Islamic Bank"
        }, {
            "identifier": "BACCredomatic",
            "tradeMethodName": "BAC Credomatic"
        }, {
            "identifier": "BDO",
            "tradeMethodName": "Banco De Oro (BDO)"
        }, {
            "identifier": "BankTaiwan",
            "tradeMethodName": "Bank Transfer (Taiwan)"
        }, {
            "identifier": "BanktransferTurkey",
            "tradeMethodName": "Bank Transfer (Turkey)"
        }, {
            "identifier": "MeezanBank",
            "tradeMethodName": "Meezan Bank"
        }, {
            "identifier": "Paysend",
            "tradeMethodName": "Paysend.com"
        }, {
            "identifier": "Paysera",
            "tradeMethodName": "Paysera"
        }, {
            "identifier": "PhonePe",
            "tradeMethodName": "PhonePe"
        }, {
            "identifier": "SEPA",
            "tradeMethodName": "Банковский перевод SEPA (EU)"
        }, {
            "identifier": "ScotiabankUruguay",
            "tradeMethodName": "Scotiabank Uruguay"
        }, {
            "identifier": "StarlingBank",
            "tradeMethodName": "Starling Bank"
        }, {
            "identifier": "UniCreditRussia",
            "tradeMethodName": "ЮниКредит"
        }, {
            "identifier": "BankTransferMena",
            "tradeMethodName": "Bank Transfer (Middle East)"
        }, {
            "identifier": "EmiratesNBD",
            "tradeMethodName": "Emirates NBD"
        }, {
            "identifier": "GPay",
            "tradeMethodName": "Google Pay (GPay)"
        }, {
            "identifier": "HALKBANK",
            "tradeMethodName": "Халкбанк"
        }, {
            "identifier": "Monzo",
            "tradeMethodName": "Monzo"
        }, {
            "identifier": "OcaBlue",
            "tradeMethodName": "OCA Blue"
        }, {
            "identifier": "UnionBankofNigeria",
            "tradeMethodName": "Union Bank of Nigeria"
        }, {
            "identifier": "UzbekNationalBank",
            "tradeMethodName": "Узнацбанк"
        }, {
            "identifier": "Uzcard",
            "tradeMethodName": "Uzcard"
        }, {
            "identifier": "WECHAT",
            "tradeMethodName": "WeChat"
        }, {
            "identifier": "BancoPopular",
            "tradeMethodName": "Banco Popular"
        }, {
            "identifier": "FCMB",
            "tradeMethodName": "FCMB"
        }, {
            "identifier": "N26",
            "tradeMethodName": "N26"
        }, {
            "identifier": "PhilippinesNationalB",
            "tradeMethodName": "Philippines National Bank (PNB)"
        }, {
            "identifier": "Reba",
            "tradeMethodName": "Reba"
        }, {
            "identifier": "SEAbank",
            "tradeMethodName": "SEA Bank"
        }, {
            "identifier": "ZenithBank",
            "tradeMethodName": "Zenith Bank"
        }, {
            "identifier": "BancoPromericaSV",
            "tradeMethodName": "Banco Promerica SV"
        }, {
            "identifier": "Ecobank",
            "tradeMethodName": "Ecobank"
        }, {
            "identifier": "OPay",
            "tradeMethodName": "Opay"
        }, {
            "identifier": "Oschadbank",
            "tradeMethodName": "Ощадбанк"
        }, {
            "identifier": "Payme",
            "tradeMethodName": "Payme.io"
        }, {
            "identifier": "RCBC",
            "tradeMethodName": "Rizal Commercial Banking Corporation"
        }, {
            "identifier": "Raast",
            "tradeMethodName": "Raast"
        }, {
            "identifier": "ScotiabankCostaRica",
            "tradeMethodName": "Scotiabank Costa Rica"
        }, {
            "identifier": "airtelmoney",
            "tradeMethodName": "Airtel Money"
        }, {
            "identifier": "Banreservas",
            "tradeMethodName": "Banreservas"
        }, {
            "identifier": "DaviviendaSA",
            "tradeMethodName": "Davivienda S.A"
        }, {
            "identifier": "MBoP",
            "tradeMethodName": "Metropolitan Bank of the Philippines"
        }, {
            "identifier": "PKObank",
            "tradeMethodName": "PKO Bank"
        }, {
            "identifier": "RedPagos",
            "tradeMethodName": "Red Pagos"
        }, {
            "identifier": "SterlingBank",
            "tradeMethodName": "Sterling Bank"
        }, {
            "identifier": "UnitedBankLimited",
            "tradeMethodName": "United Bank Limited"
        }, {
            "identifier": "Venmo",
            "tradeMethodName": "Venmo"
        }, {
            "identifier": "BancoDelSol",
            "tradeMethodName": "Banco del Sol"
        }, {
            "identifier": "InfinBank",
            "tradeMethodName": "InfinBank"
        }, {
            "identifier": "MKBBank",
            "tradeMethodName": "MKB Bank"
        }, {
            "identifier": "Millennium",
            "tradeMethodName": "Millennium"
        }, {
            "identifier": "PalmPay",
            "tradeMethodName": "Palmpay"
        }, {
            "identifier": "ParitetBank",
            "tradeMethodName": "Паритетбанк"
        }, {
            "identifier": "Postepay",
            "tradeMethodName": "Postepay"
        }, {
            "identifier": "QIWI",
            "tradeMethodName": "QIWI"
        }, {
            "identifier": "SantanderPoland",
            "tradeMethodName": "Santander Poland"
        }, {
            "identifier": "ViettelMoney",
            "tradeMethodName": "Viettel Money"
        }, {
            "identifier": "AliorBank",
            "tradeMethodName": "Alior Bank"
        }, {
            "identifier": "Apelsin",
            "tradeMethodName": "Apelsin"
        }, {
            "identifier": "AsakaBank",
            "tradeMethodName": "Асака Банк"
        }, {
            "identifier": "BACcredoNicaragua",
            "tradeMethodName": "BAC Credomatic Nicaragua"
        }, {
            "identifier": "BBVAUruguay",
            "tradeMethodName": "BBVA Uruguay"
        }, {
            "identifier": "BancolombiaSA",
            "tradeMethodName": "Bancolombia S.A"
        }, {
            "identifier": "Bunq",
            "tradeMethodName": "Bunq"
        }, {
            "identifier": "CIMBPHP",
            "tradeMethodName": "CIMB Philippines"
        }, {
            "identifier": "Cash",
            "tradeMethodName": "Cash"
        }, {
            "identifier": "Daviplata",
            "tradeMethodName": "Daviplata"
        }, {
            "identifier": "EurasianBank",
            "tradeMethodName": "Евразийский Банк"
        }, {
            "identifier": "Fiobanka",
            "tradeMethodName": "Fio banka"
        }, {
            "identifier": "LoP",
            "tradeMethodName": "Landbank of the Philippines"
        }, {
            "identifier": "StanbicBank",
            "tradeMethodName": "Stanbic Bank"
        }, {
            "identifier": "TrueMoney",
            "tradeMethodName": "True Money"
        }, {
            "identifier": "Upaisa",
            "tradeMethodName": "Upaisa"
        }, {
            "identifier": "Vodafonecash",
            "tradeMethodName": "Vodafone cash"
        }, {
            "identifier": "Yape",
            "tradeMethodName": "Yape"
        }, {
            "identifier": "BCAMobile",
            "tradeMethodName": "BCA"
        }, {
            "identifier": "BancoBACCredomaticSV",
            "tradeMethodName": "Banco BAC Credomatic SV"
        }, {
            "identifier": "BancoBHD",
            "tradeMethodName": "Banco BHD"
        }, {
            "identifier": "Ceskasporitelna",
            "tradeMethodName": "Česká spořitelna"
        }, {
            "identifier": "Chippercash",
            "tradeMethodName": "Chipper Cash"
        }, {
            "identifier": "DSKBank",
            "tradeMethodName": "DSK Bank"
        }, {
            "identifier": "Idram",
            "tradeMethodName": "Idram"
        }, {
            "identifier": "KoronaPay",
            "tradeMethodName": "KoronaPay"
        }, {
            "identifier": "MTBank",
            "tradeMethodName": "МТБанк"
        }, {
            "identifier": "PermataMe",
            "tradeMethodName": "Permata Me"
        }, {
            "identifier": "TrueMoneyCambodia",
            "tradeMethodName": "True Money (Cambodia)"
        }, {
            "identifier": "AgroBank",
            "tradeMethodName": "Агробанк"
        }, {
            "identifier": "AraratBank",
            "tradeMethodName": "AraratBank"
        }, {
            "identifier": "BanBif",
            "tradeMethodName": "BanBif"
        }, {
            "identifier": "BancoHipotecario",
            "tradeMethodName": "Banco Hipotecario SV"
        }, {
            "identifier": "BancoLafiseNicaragua",
            "tradeMethodName": "Banco Lafise Nicaragua"
        }, {
            "identifier": "Banesco",
            "tradeMethodName": "Banesco"
        }, {
            "identifier": "Coinsph",
            "tradeMethodName": "Coins.ph"
        }, {
            "identifier": "CreditEuropeBank",
            "tradeMethodName": "Кредит Европа Банк (Россия)"
        }, {
            "identifier": "FidelityBank",
            "tradeMethodName": "Fidelity Bank"
        }, {
            "identifier": "HomeCreditKazakhstan",
            "tradeMethodName": "Хоум Кредит Казахстан"
        }, {
            "identifier": "OrangeMoney",
            "tradeMethodName": "Orange Money - OM"
        }, {
            "identifier": "PayPro",
            "tradeMethodName": "PayPro"
        }, {
            "identifier": "Wilobank",
            "tradeMethodName": "Wilobank"
        }, {
            "identifier": "ZaloPayNew",
            "tradeMethodName": "ZaloPay"
        }, {
            "identifier": "izibank",
            "tradeMethodName": "Izibank"
        }, {
            "identifier": "ABBBANK",
            "tradeMethodName": "ABB Bank"
        }, {
            "identifier": "AlRajhiBank",
            "tradeMethodName": "Al Rajhi Bank"
        }, {
            "identifier": "ArmBusinessBank",
            "tradeMethodName": "ArmBusinessBank"
        }, {
            "identifier": "AsiaUnitedBank",
            "tradeMethodName": "Asia United Bank"
        }, {
            "identifier": "BANKBRI",
            "tradeMethodName": "Bank BRI"
        }, {
            "identifier": "BancoFalabella",
            "tradeMethodName": "Banco Falabella"
        }, {
            "identifier": "Banktransferperu",
            "tradeMethodName": "Bank Transfer Peru"
        }, {
            "identifier": "CIMBNiaga",
            "tradeMethodName": "CIMB Niaga"
        }, {
            "identifier": "COMMERCIALBANKKZT",
            "tradeMethodName": "Коммерческий банк КЫРГЫЗСТАН"
        }, {
            "identifier": "ConverseBank",
            "tradeMethodName": "ConverseBank"
        }, {
            "identifier": "DANA",
            "tradeMethodName": "DANA(Indonesia)"
        }, {
            "identifier": "ErsteBank",
            "tradeMethodName": "Erste Bank"
        }, {
            "identifier": "KeystoneBank",
            "tradeMethodName": "Keystone Bank"
        }, {
            "identifier": "LINEPay",
            "tradeMethodName": "LINE Pay"
        }, {
            "identifier": "MandiriPay",
            "tradeMethodName": "Mandiri Pay"
        }, {
            "identifier": "Plin",
            "tradeMethodName": "Plin"
        }, {
            "identifier": "ScotiabankPanama",
            "tradeMethodName": "Scotiabank Panama"
        }, {
            "identifier": "TBN",
            "tradeMethodName": "Transferencia Bancaria Nicaragua"
        }, {
            "identifier": "VNpay",
            "tradeMethodName": "VNPAY"
        }, {
            "identifier": "WorldRemit",
            "tradeMethodName": "WorldRemit"
        }, {
            "identifier": "jkopay",
            "tradeMethodName": "JKO Transfer"
        }, {
            "identifier": "m10",
            "tradeMethodName": "m10"
        }, {
            "identifier": "stcpay",
            "tradeMethodName": "stc pay"
        }, {
            "identifier": "ALMASHREQBank",
            "tradeMethodName": "AL MASHREQ Bank"
        }, {
            "identifier": "AdvancedCash",
            "tradeMethodName": "Advcash - Instant"
        }, {
            "identifier": "ArmEconomBank",
            "tradeMethodName": "ArmEconomBank"
        }, {
            "identifier": "AzerTurkBank",
            "tradeMethodName": "Azer Turk Bank"
        }, {
            "identifier": "BCEL",
            "tradeMethodName": "BCEL"
        }, {
            "identifier": "BancoSantaCruz",
            "tradeMethodName": "Banco Mercantil Santa Cruz"
        }, {
            "identifier": "BankEskhata",
            "tradeMethodName": "Банк Эсхата"
        }, {
            "identifier": "BankOfBaku",
            "tradeMethodName": "Bank of Baku"
        }, {
            "identifier": "BankRBK",
            "tradeMethodName": "Bank RBK"
        }, {
            "identifier": "BankofTajikistan",
            "tradeMethodName": "Международный Банк Таджикистана"
        }, {
            "identifier": "BilleteraMovilBanpro",
            "tradeMethodName": "Billetera Movil Banpro"
        }, {
            "identifier": "ByblosBank",
            "tradeMethodName": "Byblos Bank"
        }, {
            "identifier": "CLICK",
            "tradeMethodName": "CliQ"
        }, {
            "identifier": "DCbank",
            "tradeMethodName": "Душанбе Сити Банк"
        }, {
            "identifier": "Efecty",
            "tradeMethodName": "Efecty"
        }, {
            "identifier": "GoPay",
            "tradeMethodName": "GoPay"
        }, {
            "identifier": "KICB",
            "tradeMethodName": "KICB"
        }, {
            "identifier": "LeoBank",
            "tradeMethodName": "Leobank"
        }, {
            "identifier": "MercadoPagoNew",
            "tradeMethodName": "Mercadopago"
        }, {
            "identifier": "MoovMoney",
            "tradeMethodName": "Moov Money"
        }, {
            "identifier": "MpesaVodaphone",
            "tradeMethodName": "M-pesa (Vodafone)"
        }, {
            "identifier": "MultibankPanama",
            "tradeMethodName": "Multibank Panama"
        }, {
            "identifier": "OTPBankNew",
            "tradeMethodName": "OTP BANK"
        }, {
            "identifier": "OVO",
            "tradeMethodName": "OVO"
        }, {
            "identifier": "Paynet",
            "tradeMethodName": "Paynet"
        }, {
            "identifier": "QIB",
            "tradeMethodName": "Qatar Islamic Bank QIB"
        }, {
            "identifier": "SaudiNationalBank",
            "tradeMethodName": "Saudi National Bank (AlAhli Bank)"
        }, {
            "identifier": "ShopeePay",
            "tradeMethodName": "ShopeePay-SEA"
        }, {
            "identifier": "StandardChartered",
            "tradeMethodName": "Standard Chartered Bank"
        }, {
            "identifier": "UnitedBankAfrica",
            "tradeMethodName": "United Bank for Africa Plc"
        }, {
            "identifier": "WaveMobile",
            "tradeMethodName": "Wave Mobile Money"
        }, {
            "identifier": "WiseInstant",
            "tradeMethodName": "Wise Instant"
        }, {
            "identifier": "ADCB",
            "tradeMethodName": "Abu Dhabi Commercial Bank ADCB"
        }, {
            "identifier": "Ahlibank",
            "tradeMethodName": "Ahlibank"
        }, {
            "identifier": "AladinBank",
            "tradeMethodName": "Aladin Bank"
        }, {
            "identifier": "AlinmaBank",
            "tradeMethodName": "Alinma Bank"
        }, {
            "identifier": "AlliedBankLimited",
            "tradeMethodName": "Allied Bank Limited, Wholesale Branch"
        }, {
            "identifier": "AlloBank",
            "tradeMethodName": "Allo Bank"
        }, {
            "identifier": "AmenBank",
            "tradeMethodName": "Amen Bank"
        }, {
            "identifier": "ArabBank",
            "tradeMethodName": "Arab Bank"
        }, {
            "identifier": "Artsakhbank",
            "tradeMethodName": "Artsakhbank"
        }, {
            "identifier": "AsiaAllianceBank",
            "tradeMethodName": "Asia Alliance Bank"
        }, {
            "identifier": "BANKTRANSFERRON",
            "tradeMethodName": "Bank Transfer (Romania)"
        }, {
            "identifier": "BENEFITPAY",
            "tradeMethodName": "BenefitPay"
        }, {
            "identifier": "BNPParibas",
            "tradeMethodName": "BNP Paribas"
        }, {
            "identifier": "BancoDeBolivia",
            "tradeMethodName": "Banco Nacional de Bolivia"
        }, {
            "identifier": "BancoGanadero",
            "tradeMethodName": "Banco Ganadero"
        }, {
            "identifier": "BankInternational",
            "tradeMethodName": "Banco Internacional"
        }, {
            "identifier": "BankJago",
            "tradeMethodName": "Bank Jago"
        }, {
            "identifier": "BankMuscat",
            "tradeMethodName": "Bank Muscat"
        }, {
            "identifier": "BankTransferLaos",
            "tradeMethodName": "Bank Transfer (Laos)"
        }, {
            "identifier": "Blu",
            "tradeMethodName": "Blu"
        }, {
            "identifier": "CBE",
            "tradeMethodName": "CBE"
        }, {
            "identifier": "Canadia",
            "tradeMethodName": "Canadia"
        }, {
            "identifier": "CoOperativeBankKenya",
            "tradeMethodName": "Co-Operative Bank Of Kenya"
        }, {
            "identifier": "DubaiIslamicBank",
            "tradeMethodName": "DIB: Dubai Islamic Bank"
        }, {
            "identifier": "EmiratesIslamicBank",
            "tradeMethodName": "EIB: Emirates Islamic Bank"
        }, {
            "identifier": "FasterPayments",
            "tradeMethodName": "Faster Payments"
        }, {
            "identifier": "Global66",
            "tradeMethodName": "Global66"
        }, {
            "identifier": "GoTymeBank",
            "tradeMethodName": "GoTyme Bank"
        }, {
            "identifier": "Hamkorbank",
            "tradeMethodName": "Hamkorbank"
        }, {
            "identifier": "ING",
            "tradeMethodName": "ING"
        }, {
            "identifier": "Kazpost",
            "tradeMethodName": "Казпочта"
        }, {
            "identifier": "KomoBank",
            "tradeMethodName": "Komo Bank"
        }, {
            "identifier": "LemonCash",
            "tradeMethodName": "Lemon Cash"
        }, {
            "identifier": "Ligo",
            "tradeMethodName": "Ligo"
        }, {
            "identifier": "LinkAja",
            "tradeMethodName": "LinkAja"
        }, {
            "identifier": "Maza",
            "tradeMethodName": "Maza"
        }, {
            "identifier": "Mercantil",
            "tradeMethodName": "Mercantil"
        }, {
            "identifier": "Mobiletopup",
            "tradeMethodName": "Пополнение баланса мобильного телефона"
        }, {
            "identifier": "Modo",
            "tradeMethodName": "Modo"
        }, {
            "identifier": "MpesaPaybill",
            "tradeMethodName": "M-pesa Paybill"
        }, {
            "identifier": "NEO",
            "tradeMethodName": "NEO"
        }, {
            "identifier": "Nagad",
            "tradeMethodName": "Nagad"
        }, {
            "identifier": "NationalBankYemen",
            "tradeMethodName": "National Bank of Yemen"
        }, {
            "identifier": "Nurbank",
            "tradeMethodName": "Нурбанк"
        }, {
            "identifier": "ProvidusBankLimited",
            "tradeMethodName": "Providus Bank Limited"
        }, {
            "identifier": "Provincial",
            "tradeMethodName": "Provincial"
        }, {
            "identifier": "QishloqQurilishBank",
            "tradeMethodName": "Кишлок курилиш Банк"
        }, {
            "identifier": "RBCRoyalbank",
            "tradeMethodName": "RBC Royal Bank"
        }, {
            "identifier": "RSKBANK",
            "tradeMethodName": "РСК Банк"
        }, {
            "identifier": "RiyadBank",
            "tradeMethodName": "Riyad Bank"
        }, {
            "identifier": "SABB",
            "tradeMethodName": "The Saudi British Bank (SABB)"
        }, {
            "identifier": "SilvergateBank",
            "tradeMethodName": "Silvergate Bank"
        }, {
            "identifier": "Simply",
            "tradeMethodName": "Simply"
        }, {
            "identifier": "TMRW",
            "tradeMethodName": "TMRW by UOB"
        }, {
            "identifier": "TransBank",
            "tradeMethodName": "Trans Bank"
        }, {
            "identifier": "UalaNew",
            "tradeMethodName": "Uala"
        }, {
            "identifier": "UnionPay",
            "tradeMethodName": "UnionPay"
        }, {
            "identifier": "XalqBank",
            "tradeMethodName": "Народный Банк (Узбекистан)"
        }, {
            "identifier": "YemenCommercialBank",
            "tradeMethodName": "Yemen Commercial Bank"
        }, {
            "identifier": "ZAINCASH",
            "tradeMethodName": "ZainCash"
        }, {
            "identifier": "ZainCashBusiness",
            "tradeMethodName": "ZainCash - Business"
        }, {
            "identifier": "bKash",
            "tradeMethodName": "bKash"
        }, {
            "identifier": "ezipay",
            "tradeMethodName": "EziPay"
        }, {
            "identifier": "urpay",
            "tradeMethodName": "urpay"
        }]
    },
    {
        "fullName": "Euro",
        "shortName": "EUR",
        "tradeMethods": [{
            "identifier": "Wise",
            "tradeMethodName": "Wise"
        }, {
            "identifier": "Revolut",
            "tradeMethodName": "Revolut"
        }, {
            "identifier": "SEPAinstant",
            "tradeMethodName": "SEPA Instant"
        }, {
            "identifier": "SEPA",
            "tradeMethodName": "Банковский перевод SEPA (EU)"
        }, {
            "identifier": "Paysera",
            "tradeMethodName": "Paysera"
        }, {
            "identifier": "BBVABank",
            "tradeMethodName": "BBVA"
        }, {
            "identifier": "N26",
            "tradeMethodName": "N26"
        }, {
            "identifier": "Bizum",
            "tradeMethodName": "Bizum"
        }, {
            "identifier": "ZEN",
            "tradeMethodName": "ZEN"
        }, {
            "identifier": "BANK",
            "tradeMethodName": "Банковский перевод"
        }, {
            "identifier": "Bunq",
            "tradeMethodName": "Bunq"
        }, {
            "identifier": "CaixaBank",
            "tradeMethodName": "CaixaBank (Spain)"
        }, {
            "identifier": "BancoSantanderSpain",
            "tradeMethodName": "Banco Santander (Spain)"
        }, {
            "identifier": "ING",
            "tradeMethodName": "ING"
        }, {
            "identifier": "Advcash",
            "tradeMethodName": "AdvCash"
        }, {
            "identifier": "SkrillMoneybookers",
            "tradeMethodName": "Skrill (Moneybookers)"
        }, {
            "identifier": "BancoSabadellSpain",
            "tradeMethodName": "Banco Sabadell (Spain)"
        }, {
            "identifier": "Monobank",
            "tradeMethodName": "Monobank"
        }, {
            "identifier": "Payeer",
            "tradeMethodName": "Payeer"
        }, {
            "identifier": "ABNAMRO",
            "tradeMethodName": "ABN AMRO"
        }, {
            "identifier": "MAIB",
            "tradeMethodName": "MAIB"
        }, {
            "identifier": "RaiffeisenBank",
            "tradeMethodName": "Райффайзенбанк"
        }, {
            "identifier": "MICB",
            "tradeMethodName": "MICB (Moldova)"
        }, {
            "identifier": "PerfectMoney",
            "tradeMethodName": "Perfect Money"
        }, {
            "identifier": "Victoriabank",
            "tradeMethodName": "Victoriabank"
        }, {
            "identifier": "PrivatBank",
            "tradeMethodName": "ПриватБанк (Универсальная)"
        }, {
            "identifier": "NETELLER",
            "tradeMethodName": "Neteller"
        }, {
            "identifier": "BNPParibas",
            "tradeMethodName": "BNP Paribas"
        }, {
            "identifier": "BankofGeorgia",
            "tradeMethodName": "Bank of Georgia"
        }, {
            "identifier": "Postepay",
            "tradeMethodName": "Postepay"
        }, {
            "identifier": "ABank",
            "tradeMethodName": "A-Bank"
        }, {
            "identifier": "DukascopyBank",
            "tradeMethodName": "Dukascopy Bank"
        }, {
            "identifier": "RaiffeisenBankAval",
            "tradeMethodName": "Raiffeisen Bank Aval"
        }, {
            "identifier": "RussianStandardBank",
            "tradeMethodName": "Русский Стандарт"
        }, {
            "identifier": "TBCbank",
            "tradeMethodName": "TBC Bank"
        }, {
            "identifier": "CashDeposit",
            "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
        }, {
            "identifier": "ErsteBank",
            "tradeMethodName": "Erste Bank"
        }, {
            "identifier": "Paysend",
            "tradeMethodName": "Paysend.com"
        }, {
            "identifier": "SpecificBank",
            "tradeMethodName": "Переводы в конкретном банке"
        }, {
            "identifier": "CreditAgricole",
            "tradeMethodName": "Credit Agricole"
        }, {
            "identifier": "HomeCreditBank",
            "tradeMethodName": "Хоум Кредит Банк (Россия)"
        }, {
            "identifier": "SWIFT",
            "tradeMethodName": "Международный перевод (SWIFT)"
        }, {
            "identifier": "PriorBank",
            "tradeMethodName": "Приорбанк"
        }, {
            "identifier": "CenterCreditBank",
            "tradeMethodName": "ЦентрКредит Банк"
        }, {
            "identifier": "SocieteGenerale",
            "tradeMethodName": "Societe Generale"
        }, {
            "identifier": "WesternUnion",
            "tradeMethodName": "Western Union"
        }, {
            "identifier": "Ziraat",
            "tradeMethodName": "Ziraat"
        }, {
            "identifier": "CREDOBANK",
            "tradeMethodName": "Credo Bank"
        }, {
            "identifier": "PUMBBank",
            "tradeMethodName": "PUMB"
        }, {
            "identifier": "Kapitalbank",
            "tradeMethodName": "Капиталбанк"
        }, {
            "identifier": "VividMoney",
            "tradeMethodName": "Vivid Money"
        }, {
            "identifier": "LaBanquepostale",
            "tradeMethodName": "La Banque postale"
        }, {
            "identifier": "VakifBank",
            "tradeMethodName": "VakifBank"
        }, {
            "identifier": "AirTM",
            "tradeMethodName": "AirTM"
        }, {
            "identifier": "KaspiBank",
            "tradeMethodName": "Kaspi Bank"
        }, {
            "identifier": "MoneyGram",
            "tradeMethodName": "Moneygram"
        }, {
            "identifier": "UniCreditRussia",
            "tradeMethodName": "ЮниКредит"
        }, {
            "identifier": "CitibankRussia",
            "tradeMethodName": "Ситибанк"
        }, {
            "identifier": "JysanBank",
            "tradeMethodName": "Jysan Bank"
        }, {
            "identifier": "ForteBank",
            "tradeMethodName": "ForteBank"
        }, {
            "identifier": "HalykBank",
            "tradeMethodName": "Halyk Bank"
        }, {
            "identifier": "UNIBANK",
            "tradeMethodName": "Unibank"
        }, {
            "identifier": "Garanti",
            "tradeMethodName": "Garanti"
        }, {
            "identifier": "Papara",
            "tradeMethodName": "Papara"
        }, {
            "identifier": "DEMIRBANK",
            "tradeMethodName": "DemirBank"
        }, {
            "identifier": "DenizBank",
            "tradeMethodName": "Denizbank"
        }, {
            "identifier": "OPTIMABANK",
            "tradeMethodName": "Оптима Банк"
        }, {
            "identifier": "BanktransferTurkey",
            "tradeMethodName": "Bank Transfer (Turkey)"
        }, {
            "identifier": "Ceskasporitelna",
            "tradeMethodName": "Česká spořitelna"
        }, {
            "identifier": "FreedomBank",
            "tradeMethodName": "Freedom Bank"
        }, {
            "identifier": "IDBank",
            "tradeMethodName": "IDBank"
        }, {
            "identifier": "Inecobank",
            "tradeMethodName": "Inecobank"
        }, {
            "identifier": "Millennium",
            "tradeMethodName": "Millennium"
        }, {
            "identifier": "PostBankNew",
            "tradeMethodName": "Почта Банк"
        }, {
            "identifier": "SantanderPoland",
            "tradeMethodName": "Santander Poland"
        }, {
            "identifier": "UniCreditEU",
            "tradeMethodName": "UniCredit"
        }, {
            "identifier": "BAKAIBANK",
            "tradeMethodName": "Бакай Банк"
        }, {
            "identifier": "FinComBank",
            "tradeMethodName": "FinComBank"
        }, {
            "identifier": "SantanderArgentina",
            "tradeMethodName": "Banco Santander Argentina"
        }, {
            "identifier": "ISBANK",
            "tradeMethodName": "İŞBANK"
        }, {
            "identifier": "KICB",
            "tradeMethodName": "KICB"
        }, {
            "identifier": "PKObank",
            "tradeMethodName": "PKO Bank"
        }, {
            "identifier": "AltynBank",
            "tradeMethodName": "Altyn Bank"
        }, {
            "identifier": "LloydsBank",
            "tradeMethodName": "Lloyds Bank"
        }, {
            "identifier": "Monzo",
            "tradeMethodName": "Monzo"
        }, {
            "identifier": "Oldubil",
            "tradeMethodName": "OLDUBIL"
        }, {
            "identifier": "Ozan",
            "tradeMethodName": "Ozan"
        }, {
            "identifier": "QNB",
            "tradeMethodName": "QNB"
        }, {
            "identifier": "ACBAbank",
            "tradeMethodName": "ACBA Bank"
        }, {
            "identifier": "Ardshinbank",
            "tradeMethodName": "Ardshinbank"
        }, {
            "identifier": "CreditEuropeBank",
            "tradeMethodName": "Кредит Европа Банк (Россия)"
        }, {
            "identifier": "Evocabank",
            "tradeMethodName": "Evocabank"
        }, {
            "identifier": "KuveytTurk",
            "tradeMethodName": "Kuveyt Turk"
        }, {
            "identifier": "mBank",
            "tradeMethodName": "mBank"
        }, {
            "identifier": "Ameriabank",
            "tradeMethodName": "Ameriabank"
        }, {
            "identifier": "DSKBank",
            "tradeMethodName": "DSK Bank"
        }, {
            "identifier": "FPS",
            "tradeMethodName": "Instant Transfer"
        }, {
            "identifier": "MTBank",
            "tradeMethodName": "МТБанк"
        }, {
            "identifier": "Oschadbank",
            "tradeMethodName": "Ощадбанк"
        }, {
            "identifier": "ABA",
            "tradeMethodName": "ABA"
        }, {
            "identifier": "StarlingBank",
            "tradeMethodName": "Starling Bank"
        }, {
            "identifier": "ALIPAY",
            "tradeMethodName": "Alipay"
        }, {
            "identifier": "Akbank",
            "tradeMethodName": "Akbank"
        }, {
            "identifier": "Anorbank",
            "tradeMethodName": "Anorbank"
        }, {
            "identifier": "Fiobanka",
            "tradeMethodName": "Fio banka"
        }, {
            "identifier": "IpakYuliBank",
            "tradeMethodName": "Ipak Yuli Bank"
        }, {
            "identifier": "KHBank",
            "tradeMethodName": "K&H Bank"
        }, {
            "identifier": "Caissedepargne",
            "tradeMethodName": "Caisse d′Epargne"
        }, {
            "identifier": "OTPBankNew",
            "tradeMethodName": "OTP BANK"
        }, {
            "identifier": "Pyypl",
            "tradeMethodName": "Pyypl"
        }, {
            "identifier": "QIWI",
            "tradeMethodName": "QIWI"
        }, {
            "identifier": "TurkiyeFinansBank",
            "tradeMethodName": "Turkiye Finans Participation Bank"
        }, {
            "identifier": "WECHAT",
            "tradeMethodName": "WeChat"
        }, {
            "identifier": "WhishMONEY",
            "tradeMethodName": "whish MONEY"
        }, {
            "identifier": "alBaraka",
            "tradeMethodName": "alBaraka"
        }, {
            "identifier": "ACLEDA",
            "tradeMethodName": "ACLEDA"
        }, {
            "identifier": "BankofAmerica",
            "tradeMethodName": "Bank of America"
        }, {
            "identifier": "CreditBankofPeru",
            "tradeMethodName": "Credit Bank of Peru"
        }, {
            "identifier": "EurasianBank",
            "tradeMethodName": "Евразийский Банк"
        }, {
            "identifier": "Interbank",
            "tradeMethodName": "Interbank"
        }, {
            "identifier": "KoronaPay",
            "tradeMethodName": "KoronaPay"
        }, {
            "identifier": "OrangeMoney",
            "tradeMethodName": "Orange Money - OM"
        }, {
            "identifier": "ProcreditBank",
            "tradeMethodName": "ProCredit Bank"
        }, {
            "identifier": "AdvancedCash",
            "tradeMethodName": "Advcash - Instant"
        }, {
            "identifier": "AraratBank",
            "tradeMethodName": "AraratBank"
        }, {
            "identifier": "Humo",
            "tradeMethodName": "Humo"
        }, {
            "identifier": "Idram",
            "tradeMethodName": "Idram"
        }, {
            "identifier": "KHQR",
            "tradeMethodName": "KHQR"
        }, {
            "identifier": "MoovMoney",
            "tradeMethodName": "Moov Money"
        }, {
            "identifier": "Payme",
            "tradeMethodName": "Payme.io"
        }, {
            "identifier": "TransBank",
            "tradeMethodName": "Trans Bank"
        }, {
            "identifier": "Uzcard",
            "tradeMethodName": "Uzcard"
        }, {
            "identifier": "WaveMobile",
            "tradeMethodName": "Wave Mobile Money"
        }, {
            "identifier": "izibank",
            "tradeMethodName": "Izibank"
        }, {
            "identifier": "AgroBank",
            "tradeMethodName": "Агробанк"
        }, {
            "identifier": "AloqaBank",
            "tradeMethodName": "Алокабанк"
        }, {
            "identifier": "BankTransferCambodia",
            "tradeMethodName": "Bank Transfer (Cambodia)"
        }, {
            "identifier": "Bankera",
            "tradeMethodName": "Bankera"
        }, {
            "identifier": "COMMERCIALBANKKZT",
            "tradeMethodName": "Коммерческий банк КЫРГЫЗСТАН"
        }, {
            "identifier": "EasypaisaPK",
            "tradeMethodName": "Easypaisa-PK Only"
        }, {
            "identifier": "MeezanBank",
            "tradeMethodName": "Meezan Bank"
        }, {
            "identifier": "NayaPay",
            "tradeMethodName": "NayaPay"
        }, {
            "identifier": "Paynet",
            "tradeMethodName": "Paynet"
        }, {
            "identifier": "ShopeePay",
            "tradeMethodName": "ShopeePay-SEA"
        }, {
            "identifier": "TrueMoney",
            "tradeMethodName": "True Money"
        }, {
            "identifier": "UzbekNationalBank",
            "tradeMethodName": "Узнацбанк"
        }, {
            "identifier": "WingMoney",
            "tradeMethodName": "Wing Money"
        }, {
            "identifier": "WiseInstant",
            "tradeMethodName": "Wise Instant"
        }, {
            "identifier": "ZepterBank",
            "tradeMethodName": "Цептер Банк"
        }, {
            "identifier": "ABBBANK",
            "tradeMethodName": "ABB Bank"
        }, {
            "identifier": "AlifBank",
            "tradeMethodName": "Алиф Банк"
        }, {
            "identifier": "AlinmaBank",
            "tradeMethodName": "Alinma Bank"
        }, {
            "identifier": "ArmBusinessBank",
            "tradeMethodName": "ArmBusinessBank"
        }, {
            "identifier": "BCEL",
            "tradeMethodName": "BCEL"
        }, {
            "identifier": "BCSBank",
            "tradeMethodName": "БКС Банк"
        }, {
            "identifier": "BGZBNPparibas",
            "tradeMethodName": "BGZ BNP Paribas"
        }, {
            "identifier": "Bakong",
            "tradeMethodName": "Bakong"
        }, {
            "identifier": "BancoActivo",
            "tradeMethodName": "Banco Activo"
        }, {
            "identifier": "BancoDeCredito",
            "tradeMethodName": "Banco de Credito"
        }, {
            "identifier": "BancoPopular",
            "tradeMethodName": "Banco Popular"
        }, {
            "identifier": "Bancontact",
            "tradeMethodName": "Bancontact"
        }, {
            "identifier": "BankRBK",
            "tradeMethodName": "Bank RBK"
        }, {
            "identifier": "BankTransilvania",
            "tradeMethodName": "Bank Transilvania"
        }, {
            "identifier": "Blik",
            "tradeMethodName": "Blik"
        }, {
            "identifier": "CIBBank",
            "tradeMethodName": "CIB Bank"
        }, {
            "identifier": "CSOB",
            "tradeMethodName": "ČSOB"
        }, {
            "identifier": "CashPack",
            "tradeMethodName": "Cashpack"
        }, {
            "identifier": "ConverseBank",
            "tradeMethodName": "ConverseBank"
        }, {
            "identifier": "DCbank",
            "tradeMethodName": "Душанбе Сити Банк"
        }, {
            "identifier": "HALKBANK",
            "tradeMethodName": "Халкбанк"
        }, {
            "identifier": "HomeCreditKazakhstan",
            "tradeMethodName": "Хоум Кредит Казахстан"
        }, {
            "identifier": "Hype",
            "tradeMethodName": "Hype"
        }, {
            "identifier": "Kazpost",
            "tradeMethodName": "Казпочта"
        }, {
            "identifier": "KredoBank",
            "tradeMethodName": "KredoBank"
        }, {
            "identifier": "MTNMobileMoney",
            "tradeMethodName": "MTN Mobile Money"
        }, {
            "identifier": "Maybank",
            "tradeMethodName": "Maybank"
        }, {
            "identifier": "MoMoNew",
            "tradeMethodName": "MoMo"
        }, {
            "identifier": "Nurbank",
            "tradeMethodName": "Нурбанк"
        }, {
            "identifier": "Raast",
            "tradeMethodName": "Raast"
        }, {
            "identifier": "Simply",
            "tradeMethodName": "Simply"
        }, {
            "identifier": "StandardChartered",
            "tradeMethodName": "Standard Chartered Bank"
        }, {
            "identifier": "TDbank",
            "tradeMethodName": "TD Bank"
        }, {
            "identifier": "Ukrsibbank",
            "tradeMethodName": "Ukrsibbank"
        }, {
            "identifier": "UnitedBankLimited",
            "tradeMethodName": "United Bank Limited"
        }, {
            "identifier": "XalqBank",
            "tradeMethodName": "Народный Банк (Узбекистан)"
        }, {
            "identifier": "Zelle",
            "tradeMethodName": "Zelle"
        }]
    },
    {
    "fullName": "UAE Dirham",
    "shortName": "AED",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "EmiratesNBD",
        "tradeMethodName": "Emirates NBD"
    }, {
        "identifier": "ADCB",
        "tradeMethodName": "Abu Dhabi Commercial Bank ADCB"
    }, {
        "identifier": "ADIB",
        "tradeMethodName": "ADIB: Abu Dhabi Islamic Bank"
    }, {
        "identifier": "ALMASHREQBank",
        "tradeMethodName": "AL MASHREQ Bank"
    }, {
        "identifier": "mBank",
        "tradeMethodName": "mBank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "NationalBankAbuDhabi",
        "tradeMethodName": "National Bank of Abu Dhabi FAB"
    }, {
        "identifier": "AlHilalBank",
        "tradeMethodName": "Al Hilal Bank"
    }, {
        "identifier": "EmiratesIslamicBank",
        "tradeMethodName": "EIB: Emirates Islamic Bank"
    }, {
        "identifier": "DubaiIslamicBank",
        "tradeMethodName": "DIB: Dubai Islamic Bank"
    }, {
        "identifier": "SharjahIslamicBank",
        "tradeMethodName": "SIB: Sharjah Islamic Bank"
    }, {
        "identifier": "HSBCUAE",
        "tradeMethodName": "HSBC Bank Middle East- UAE"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "CashPack",
        "tradeMethodName": "Cashpack"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "CashU",
        "tradeMethodName": "CashU"
    }, {
        "identifier": "LivKSA",
        "tradeMethodName": "Liv. KSA"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "HSBCMiddleEast",
        "tradeMethodName": "HSBC Bank Middle East Limited - Bahrain"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "BankMuscat",
        "tradeMethodName": "Bank Muscat"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "GPay",
        "tradeMethodName": "Google Pay (GPay)"
    }, {
        "identifier": "Khalti",
        "tradeMethodName": "Khalti"
    }, {
        "identifier": "Paytm",
        "tradeMethodName": "Paytm"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "TrueMoney",
        "tradeMethodName": "True Money"
    }, {
        "identifier": "AccordBank",
        "tradeMethodName": "Accordbank"
    }, {
        "identifier": "HSBCOman",
        "tradeMethodName": "HSBC Oman"
    }, {
        "identifier": "HSBCuruguay",
        "tradeMethodName": "HSBC Uruguay"
    }, {
        "identifier": "HomeCreditBank",
        "tradeMethodName": "Хоум Кредит Банк (Россия)"
    }, {
        "identifier": "LloydsBank",
        "tradeMethodName": "Lloyds Bank"
    }, {
        "identifier": "MPay",
        "tradeMethodName": "M Pay"
    }, {
        "identifier": "MPesaKenya",
        "tradeMethodName": "M-PESA Kenya (Safaricom)"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "Monobank",
        "tradeMethodName": "Monobank"
    }, {
        "identifier": "Monzo",
        "tradeMethodName": "Monzo"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "PhonePe",
        "tradeMethodName": "PhonePe"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "RussianStandardBank",
        "tradeMethodName": "Русский Стандарт"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "TheArabInvest",
        "tradeMethodName": "The Arab Investment Company S.A.A."
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "Uzcard",
        "tradeMethodName": "Uzcard"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Afghan Afghani",
    "shortName": "AFN",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "EasypaisaPK",
        "tradeMethodName": "Easypaisa-PK Only"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "SadaPay",
        "tradeMethodName": "SadaPay"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "NayaPay",
        "tradeMethodName": "NayaPay"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Albanian Lek",
    "shortName": "ALL",
    "tradeMethods": []
},
    {
    "fullName": "Armenian Dram",
    "shortName": "AMD",
    "tradeMethods": [{
        "identifier": "IDBank",
        "tradeMethodName": "IDBank"
    }, {
        "identifier": "Inecobank",
        "tradeMethodName": "Inecobank"
    }, {
        "identifier": "Ameriabank",
        "tradeMethodName": "Ameriabank"
    }, {
        "identifier": "Idram",
        "tradeMethodName": "Idram"
    }, {
        "identifier": "Ardshinbank",
        "tradeMethodName": "Ardshinbank"
    }, {
        "identifier": "ACBAbank",
        "tradeMethodName": "ACBA Bank"
    }, {
        "identifier": "UNIBANK",
        "tradeMethodName": "Unibank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "AraratBank",
        "tradeMethodName": "AraratBank"
    }, {
        "identifier": "Evocabank",
        "tradeMethodName": "Evocabank"
    }, {
        "identifier": "ArCA",
        "tradeMethodName": "ArCA"
    }, {
        "identifier": "ConverseBank",
        "tradeMethodName": "ConverseBank"
    }, {
        "identifier": "ArmBusinessBank",
        "tradeMethodName": "ArmBusinessBank"
    }, {
        "identifier": "ArmEconomBank",
        "tradeMethodName": "ArmEconomBank"
    }, {
        "identifier": "ByblosBank",
        "tradeMethodName": "Byblos Bank"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "Artsakhbank",
        "tradeMethodName": "Artsakhbank"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "Humo",
        "tradeMethodName": "Humo"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }]
},
    {
    "fullName": "Angolan Kwanza",
    "shortName": "AOA",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BancoAgricolaSV",
        "tradeMethodName": "Banco Agricola SV"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Argentine Peso",
    "shortName": "ARS",
    "tradeMethods": [{
        "identifier": "MercadoPagoNew",
        "tradeMethodName": "Mercadopago"
    }, {
        "identifier": "BancoBrubankNew",
        "tradeMethodName": "Banco Brubank"
    }, {
        "identifier": "LemonCash",
        "tradeMethodName": "Lemon Cash"
    }, {
        "identifier": "BankArgentina",
        "tradeMethodName": "Bank Transfer (Argentina)"
    }, {
        "identifier": "UalaNew",
        "tradeMethodName": "Uala"
    }, {
        "identifier": "NaranjaX",
        "tradeMethodName": "Naranja X"
    }, {
        "identifier": "Reba",
        "tradeMethodName": "Reba"
    }, {
        "identifier": "BancoDelSol",
        "tradeMethodName": "Banco del Sol"
    }, {
        "identifier": "Beloapp",
        "tradeMethodName": "Belo app"
    }, {
        "identifier": "SantanderArgentina",
        "tradeMethodName": "Banco Santander Argentina"
    }, {
        "identifier": "Prex",
        "tradeMethodName": "Prex"
    }, {
        "identifier": "Fiwind",
        "tradeMethodName": "Fiwind"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Wilobank",
        "tradeMethodName": "Wilobank"
    }, {
        "identifier": "UalaNewest",
        "tradeMethodName": "Uala"
    }, {
        "identifier": "BilleteraPersonal",
        "tradeMethodName": "Billetera Personal"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "SatoshiTango",
        "tradeMethodName": "Satoshi Tango"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }, {
        "identifier": "Pix",
        "tradeMethodName": "Pix"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "AYAPay",
        "tradeMethodName": "AYA Pay"
    }, {
        "identifier": "BancoRio",
        "tradeMethodName": "Banco Rio"
    }, {
        "identifier": "Global66",
        "tradeMethodName": "Global66"
    }, {
        "identifier": "LendMN",
        "tradeMethodName": "LendMN"
    }, {
        "identifier": "Maybank",
        "tradeMethodName": "Maybank"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "SantanderPoland",
        "tradeMethodName": "Santander Poland"
    }]
},
    {
    "fullName": "Australian Dollar",
    "shortName": "AUD",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "OKSO",
        "tradeMethodName": "OSKO"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "PayID",
        "tradeMethodName": "PayID"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "BankTransferVietnam",
        "tradeMethodName": "Bank Transfer (Vietnam)"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "ZaloPayNew",
        "tradeMethodName": "ZaloPay"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "BankTaiwan",
        "tradeMethodName": "Bank Transfer (Taiwan)"
    }, {
        "identifier": "Paytm",
        "tradeMethodName": "Paytm"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "BCEL",
        "tradeMethodName": "BCEL"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "InteracETransfer",
        "tradeMethodName": "Interac e-Transfer"
    }, {
        "identifier": "PhonePe",
        "tradeMethodName": "PhonePe"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }]
},
    {
    "fullName": "Azerbaijan Manat",
    "shortName": "AZN",
    "tradeMethods": [{
        "identifier": "m10",
        "tradeMethodName": "m10"
    }, {
        "identifier": "Kapitalbank",
        "tradeMethodName": "Капиталбанк"
    }, {
        "identifier": "LeoBank",
        "tradeMethodName": "Leobank"
    }, {
        "identifier": "ABBBANK",
        "tradeMethodName": "ABB Bank"
    }, {
        "identifier": "Rabitabank",
        "tradeMethodName": "Rabitabank"
    }, {
        "identifier": "AzerTurkBank",
        "tradeMethodName": "Azer Turk Bank"
    }, {
        "identifier": "UNIBANK",
        "tradeMethodName": "Unibank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BankRespublika",
        "tradeMethodName": "Bank Respublika"
    }, {
        "identifier": "YeloBank",
        "tradeMethodName": "Yelo Bank"
    }, {
        "identifier": "AccessBank",
        "tradeMethodName": "Access Bank"
    }, {
        "identifier": "PASHABANK",
        "tradeMethodName": "Pasha Bank"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "BankOfBaku",
        "tradeMethodName": "Bank of Baku"
    }, {
        "identifier": "MuganBank",
        "tradeMethodName": "Muganbank"
    }, {
        "identifier": "Expressbank",
        "tradeMethodName": "Expressbank"
    }, {
        "identifier": "HALKBANK",
        "tradeMethodName": "Халкбанк"
    }, {
        "identifier": "PREMIUMBANK",
        "tradeMethodName": "Premium Bank"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "RussianStandardBank",
        "tradeMethodName": "Русский Стандарт"
    }]
},
    {
    "fullName": "Convertible Mark",
    "shortName": "BAM",
    "tradeMethods": [{
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }]
},
    {
    "fullName": "Bangladeshi Taka",
    "shortName": "BDT",
    "tradeMethods": [{
        "identifier": "bKash",
        "tradeMethodName": "bKash"
    }, {
        "identifier": "Nagad",
        "tradeMethodName": "Nagad"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Rocket",
        "tradeMethodName": "Rocket"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "DCbank",
        "tradeMethodName": "Душанбе Сити Банк"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "BurganBank",
        "tradeMethodName": "Burgan Bank (K.S.C) (Burgan)"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "DenizBank",
        "tradeMethodName": "Denizbank"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Bulgarian Lev",
    "shortName": "BGN",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "DSKBank",
        "tradeMethodName": "DSK Bank"
    }, {
        "identifier": "BNPParibas",
        "tradeMethodName": "BNP Paribas"
    }, {
        "identifier": "EasyPay",
        "tradeMethodName": "EasyPay"
    }, {
        "identifier": "FiBank",
        "tradeMethodName": "Fibank"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "UniCreditBulbank",
        "tradeMethodName": "UniCredit Bulbank"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Bahraini Dinar",
    "shortName": "BHD",
    "tradeMethods": [{
        "identifier": "BENEFITPAY",
        "tradeMethodName": "BenefitPay"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BankofBahrainKuwait",
        "tradeMethodName": "Bank of Bahrain and Kuwait B.S.C."
    }, {
        "identifier": "KFH",
        "tradeMethodName": "Kuwait Finance House (KFH)"
    }, {
        "identifier": "stcpay",
        "tradeMethodName": "stc pay"
    }, {
        "identifier": "Ahlibank",
        "tradeMethodName": "Ahlibank"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "HSBCMiddleEast",
        "tradeMethodName": "HSBC Bank Middle East Limited - Bahrain"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "alBaraka",
        "tradeMethodName": "alBaraka"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }]
},
    {
    "fullName": "Burundi Franc",
    "shortName": "BIF",
    "tradeMethods": [{
        "identifier": "ViettelMoney",
        "tradeMethodName": "Viettel Money"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Interbank",
        "tradeMethodName": "Interbank"
    }, {
        "identifier": "CartesBancaires",
        "tradeMethodName": "Cartes Bancaires"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }]
},
    {
    "fullName": "Brunei Dollar",
    "shortName": "BND",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "GPay",
        "tradeMethodName": "Google Pay (GPay)"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "TMRW",
        "tradeMethodName": "TMRW by UOB"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Boliviano",
    "shortName": "BOB",
    "tradeMethods": [{
        "identifier": "BancoUnion",
        "tradeMethodName": "Banco Union"
    }, {
        "identifier": "BancoGanadero",
        "tradeMethodName": "Banco Ganadero"
    }, {
        "identifier": "BancoDeCredito",
        "tradeMethodName": "Banco de Credito"
    }, {
        "identifier": "BancoSantaCruz",
        "tradeMethodName": "Banco Mercantil Santa Cruz"
    }, {
        "identifier": "BancoDeBolivia",
        "tradeMethodName": "Banco Nacional de Bolivia"
    }, {
        "identifier": "BancoEconomico",
        "tradeMethodName": "Banco Economico"
    }, {
        "identifier": "SoliPagos",
        "tradeMethodName": "SoliPagos"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BancoSolidario",
        "tradeMethodName": "Banco Solidario"
    }, {
        "identifier": "TigoMoney",
        "tradeMethodName": "Tigo Money"
    }, {
        "identifier": "Yape",
        "tradeMethodName": "Yape"
    }, {
        "identifier": "BancoBisa",
        "tradeMethodName": "Banco Bisa"
    }, {
        "identifier": "BancoFassil",
        "tradeMethodName": "Banco Fassil"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "BancoDelSol",
        "tradeMethodName": "Banco del Sol"
    }, {
        "identifier": "BNCBancoNacional",
        "tradeMethodName": "BNC Banco Nacional de Crédito"
    }, {
        "identifier": "Interbank",
        "tradeMethodName": "Interbank"
    }, {
        "identifier": "PagoMovil",
        "tradeMethodName": "Pago Movil"
    }, {
        "identifier": "BancoBrubankNew",
        "tradeMethodName": "Banco Brubank"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Brazilian Real",
    "shortName": "BRL",
    "tradeMethods": [{
        "identifier": "Pix",
        "tradeMethodName": "Pix"
    }, {
        "identifier": "BankBrazil",
        "tradeMethodName": "Банковский перевод (Бразилия)"
    }, {
        "identifier": "PicPay",
        "tradeMethodName": "PicPay"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "MercadoPagoNew",
        "tradeMethodName": "Mercadopago"
    }, {
        "identifier": "ItauBrazil",
        "tradeMethodName": "Itaú Brazil"
    }, {
        "identifier": "PagSeguro",
        "tradeMethodName": "PagSeguro"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Interbank",
        "tradeMethodName": "Interbank"
    }, {
        "identifier": "Nurbank",
        "tradeMethodName": "Нурбанк"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Bahamian Dollar",
    "shortName": "BSD",
    "tradeMethods": []
},
    {
    "fullName": "Pula",
    "shortName": "BWP",
    "tradeMethods": [{
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "StanbicBank",
        "tradeMethodName": "Stanbic Bank"
    }]
},
    {
    "fullName": "Belarusian ruble",
    "shortName": "BYN",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "MTBank",
        "tradeMethodName": "МТБанк"
    }, {
        "identifier": "PriorBank",
        "tradeMethodName": "Приорбанк"
    }, {
        "identifier": "ParitetBank",
        "tradeMethodName": "Паритетбанк"
    }, {
        "identifier": "BSBbank",
        "tradeMethodName": "БСБ Банк"
    }, {
        "identifier": "Technobank",
        "tradeMethodName": "Технобанк"
    }, {
        "identifier": "Statusbank",
        "tradeMethodName": "Статусбанк"
    }, {
        "identifier": "BankReshenie",
        "tradeMethodName": "Банк Решение"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "ZepterBank",
        "tradeMethodName": "Цептер Банк"
    }, {
        "identifier": "BTAbank",
        "tradeMethodName": "БТА Банк"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "AgroBank",
        "tradeMethodName": "Агробанк"
    }, {
        "identifier": "AlefBank",
        "tradeMethodName": "Алеф-Банк"
    }, {
        "identifier": "CreditEuropeBank",
        "tradeMethodName": "Кредит Европа Банк (Россия)"
    }, {
        "identifier": "HomeCreditBank",
        "tradeMethodName": "Хоум Кредит Банк (Россия)"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "RussianStandardBank",
        "tradeMethodName": "Русский Стандарт"
    }]
},
    {
    "fullName": "Belize Dollar",
    "shortName": "BZD",
    "tradeMethods": []
},
    {
    "fullName": "Canadian Dollar",
    "shortName": "CAD",
    "tradeMethods": [{
        "identifier": "InteracETransfer",
        "tradeMethodName": "Interac e-Transfer"
    }, {
        "identifier": "RBCRoyalbank",
        "tradeMethodName": "RBC Royal Bank"
    }, {
        "identifier": "TDbank",
        "tradeMethodName": "TD Bank"
    }, {
        "identifier": "CIBCbank",
        "tradeMethodName": "CIBC"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "BMObank",
        "tradeMethodName": "BMO"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Tangerinebank",
        "tradeMethodName": "Tangerine bank"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "EQbank",
        "tradeMethodName": "EQ Bank"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "CashPack",
        "tradeMethodName": "Cashpack"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "MoovMoney",
        "tradeMethodName": "Moov Money"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "Paytm",
        "tradeMethodName": "Paytm"
    }, {
        "identifier": "PhonePe",
        "tradeMethodName": "PhonePe"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }]
},
    {
    "fullName": "Franc Congolais",
    "shortName": "CDF",
    "tradeMethods": [{
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "MpesaVodaphone",
        "tradeMethodName": "M-pesa (Vodafone)"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "EquityBank",
        "tradeMethodName": "Equity Bank"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }]
},
    {
    "fullName": "Swiss Franc",
    "shortName": "CHF",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "FastPay",
        "tradeMethodName": "FastPay"
    }, {
        "identifier": "UniCreditEU",
        "tradeMethodName": "UniCredit"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }]
},
    {
    "fullName": "Chilean Peso",
    "shortName": "CLP",
    "tradeMethods": [{
        "identifier": "BancoSantanderChile",
        "tradeMethodName": "Banco Santander Chile"
    }, {
        "identifier": "BancoFalabella",
        "tradeMethodName": "Banco Falabella"
    }, {
        "identifier": "BancoEstado",
        "tradeMethodName": "Banco Estado"
    }, {
        "identifier": "BancodeChile",
        "tradeMethodName": "Banco de Chile"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "MACH",
        "tradeMethodName": "MACH"
    }, {
        "identifier": "BancoItauChile",
        "tradeMethodName": "Banco Itau Chile"
    }, {
        "identifier": "Tenpo",
        "tradeMethodName": "Tenpo"
    }, {
        "identifier": "BancoDeCredito",
        "tradeMethodName": "Banco de Credito"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "MercadoPagoNew",
        "tradeMethodName": "Mercadopago"
    }, {
        "identifier": "Global66",
        "tradeMethodName": "Global66"
    }, {
        "identifier": "ScotiabankColpatria",
        "tradeMethodName": "Scotiabank Colpatria"
    }, {
        "identifier": "BCIChile",
        "tradeMethodName": "BCI Chile"
    }, {
        "identifier": "Banesco",
        "tradeMethodName": "Banesco"
    }, {
        "identifier": "PagoMovil",
        "tradeMethodName": "Pago Movil"
    }, {
        "identifier": "ScotiabankChile",
        "tradeMethodName": "Scotiabank Chile"
    }, {
        "identifier": "ScotiabankUruguay",
        "tradeMethodName": "Scotiabank Uruguay"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }]
},
    {
    "fullName": "Yuan",
    "shortName": "CNY",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Colombian Peso",
    "shortName": "COP",
    "tradeMethods": [{
        "identifier": "BancolombiaSA",
        "tradeMethodName": "Bancolombia S.A"
    }, {
        "identifier": "Nequi",
        "tradeMethodName": "Nequi"
    }, {
        "identifier": "DaviviendaSA",
        "tradeMethodName": "Davivienda S.A"
    }, {
        "identifier": "Daviplata",
        "tradeMethodName": "Daviplata"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "BancodeBogota",
        "tradeMethodName": "Banco de Bogota"
    }, {
        "identifier": "ScotiabankColpatria",
        "tradeMethodName": "Scotiabank Colpatria"
    }, {
        "identifier": "Movii",
        "tradeMethodName": "Movii"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "BancoFalabella",
        "tradeMethodName": "Banco Falabella"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "UalaNewest",
        "tradeMethodName": "Uala"
    }, {
        "identifier": "UalaNew",
        "tradeMethodName": "Uala"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Efecty",
        "tradeMethodName": "Efecty"
    }, {
        "identifier": "UalaColombia",
        "tradeMethodName": "Ualá Colombia"
    }, {
        "identifier": "BancoPopular",
        "tradeMethodName": "Banco Popular"
    }, {
        "identifier": "BancoDaviviendaSV",
        "tradeMethodName": "Banco Davivienda SV"
    }, {
        "identifier": "Global66",
        "tradeMethodName": "Global66"
    }, {
        "identifier": "Zelle",
        "tradeMethodName": "Zelle"
    }]
},
    {
    "fullName": "Costa Rican Colon",
    "shortName": "CRC",
    "tradeMethods": [{
        "identifier": "PagoMovil",
        "tradeMethodName": "Pago Movil"
    }, {
        "identifier": "BACcostarica",
        "tradeMethodName": "BAC Costa Rica"
    }, {
        "identifier": "BankTransferCosta",
        "tradeMethodName": "Bank Transfer (Costa Rica)"
    }, {
        "identifier": "BancoDeCostaRica",
        "tradeMethodName": "Banco de Costa Rica"
    }, {
        "identifier": "TBCR",
        "tradeMethodName": "Transferencia Bancaria Costa Rica"
    }, {
        "identifier": "BACCredomatic",
        "tradeMethodName": "BAC Credomatic"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "ScotiabankCostaRica",
        "tradeMethodName": "Scotiabank Costa Rica"
    }, {
        "identifier": "BCRBank",
        "tradeMethodName": "BCR Bank"
    }, {
        "identifier": "DaviviendaSA",
        "tradeMethodName": "Davivienda S.A"
    }, {
        "identifier": "BancoPopular",
        "tradeMethodName": "Banco Popular"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }]
},
    {
    "fullName": "Cape Verde Escudo",
    "shortName": "CVE",
    "tradeMethods": [{
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Czech Koruna",
    "shortName": "CZK",
    "tradeMethods": [{
        "identifier": "Ceskasporitelna",
        "tradeMethodName": "Česká spořitelna"
    }, {
        "identifier": "CSOB",
        "tradeMethodName": "ČSOB"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "MONETAMoneyBank",
        "tradeMethodName": "MONETA Money Bank"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "Fiobanka",
        "tradeMethodName": "Fio banka"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "RaiffeisenBankAval",
        "tradeMethodName": "Raiffeisen Bank Aval"
    }, {
        "identifier": "mBank",
        "tradeMethodName": "mBank"
    }, {
        "identifier": "UniCreditEU",
        "tradeMethodName": "UniCredit"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "UniCreditRussia",
        "tradeMethodName": "ЮниКредит"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "CashU",
        "tradeMethodName": "CashU"
    }, {
        "identifier": "LeoBank",
        "tradeMethodName": "Leobank"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "Paysera",
        "tradeMethodName": "Paysera"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "TBCbank",
        "tradeMethodName": "TBC Bank"
    }, {
        "identifier": "m10",
        "tradeMethodName": "m10"
    }]
},
    {
    "fullName": "Djibouti Franc",
    "shortName": "DJF",
    "tradeMethods": []
},
    {
    "fullName": "Danish Krone",
    "shortName": "DKK",
    "tradeMethods": [{
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "PrivatBank",
        "tradeMethodName": "ПриватБанк (Универсальная)"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }]
},
    {
    "fullName": "Dominican Peso",
    "shortName": "DOP",
    "tradeMethods": [{
        "identifier": "BancoPopular",
        "tradeMethodName": "Banco Popular"
    }, {
        "identifier": "Banreservas",
        "tradeMethodName": "Banreservas"
    }, {
        "identifier": "BancoBHD",
        "tradeMethodName": "Banco BHD"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "BancoSantaCruz",
        "tradeMethodName": "Banco Mercantil Santa Cruz"
    }, {
        "identifier": "QikBancoDigital",
        "tradeMethodName": "Qik Banco Digital"
    }, {
        "identifier": "BancoPromericaSV",
        "tradeMethodName": "Banco Promerica SV"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "Efecty",
        "tradeMethodName": "Efecty"
    }, {
        "identifier": "ScotiabankColpatria",
        "tradeMethodName": "Scotiabank Colpatria"
    }]
},
    {
    "fullName": "Algerian Dinar",
    "shortName": "DZD",
    "tradeMethods": [{
        "identifier": "LaBanquepostale",
        "tradeMethodName": "La Banque postale"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "Postepay",
        "tradeMethodName": "Postepay"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "banxyLaBanqueMobile",
        "tradeMethodName": "banxy- La Banque Mobile"
    }, {
        "identifier": "SocieteGenerale",
        "tradeMethodName": "Societe Generale"
    }, {
        "identifier": "BNA",
        "tradeMethodName": "Banque nationale d’Algérie (BNA)"
    }, {
        "identifier": "BDL",
        "tradeMethodName": "Banque de développement local (BDL)"
    }, {
        "identifier": "CPA",
        "tradeMethodName": "Crédit populaire d'Algérie (CPA)"
    }, {
        "identifier": "BEA",
        "tradeMethodName": "Banque extérieure d’Algérie (BEA)"
    }, {
        "identifier": "Paysera",
        "tradeMethodName": "Paysera"
    }, {
        "identifier": "BNPParibas",
        "tradeMethodName": "BNP Paribas"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }]
},
    {
    "fullName": "Egyptian Pound",
    "shortName": "EGP",
    "tradeMethods": [{
        "identifier": "Vodafonecash",
        "tradeMethodName": "Vodafone cash"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "InstaPay",
        "tradeMethodName": "InstaPay"
    }, {
        "identifier": "BanqueMisr",
        "tradeMethodName": "Banque Misr"
    }, {
        "identifier": "NBE",
        "tradeMethodName": "National Bank of Egypt (NBE)"
    }, {
        "identifier": "CIBBank",
        "tradeMethodName": "CIB Bank"
    }, {
        "identifier": "AlexBank",
        "tradeMethodName": "Alex Bank"
    }, {
        "identifier": "CIB",
        "tradeMethodName": "CIB"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "telda",
        "tradeMethodName": "telda"
    }, {
        "identifier": "QNB",
        "tradeMethodName": "QNB"
    }, {
        "identifier": "QatarNationalBank",
        "tradeMethodName": "Qatar National Bank QNB"
    }, {
        "identifier": "BanqueduCaire",
        "tradeMethodName": "Banque du Caire"
    }, {
        "identifier": "ArabAfricanBank",
        "tradeMethodName": "Arab African International Bank-AAIB"
    }, {
        "identifier": "HSBCBankEgypt",
        "tradeMethodName": "HSBC Bank Egypt"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "Ahlibank",
        "tradeMethodName": "Ahlibank"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "EtisalatCash",
        "tradeMethodName": "Etisalat Cash"
    }, {
        "identifier": "EmiratesNBD",
        "tradeMethodName": "Emirates NBD"
    }, {
        "identifier": "ADIB",
        "tradeMethodName": "ADIB: Abu Dhabi Islamic Bank"
    }, {
        "identifier": "CreditAgricole",
        "tradeMethodName": "Credit Agricole"
    }, {
        "identifier": "NBK",
        "tradeMethodName": "National Bank of Kuwait (K.S.C) (NBK)"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "OrangeCash",
        "tradeMethodName": "Orange Cash"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "HSBCuruguay",
        "tradeMethodName": "HSBC Uruguay"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "ADCB",
        "tradeMethodName": "Abu Dhabi Commercial Bank ADCB"
    }, {
        "identifier": "CashU",
        "tradeMethodName": "CashU"
    }, {
        "identifier": "NationalBankAbuDhabi",
        "tradeMethodName": "National Bank of Abu Dhabi FAB"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "SmartPay",
        "tradeMethodName": "SmartPay"
    }, {
        "identifier": "alBaraka",
        "tradeMethodName": "alBaraka"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "AttijariwafaNational",
        "tradeMethodName": "Attijariwafa National Bank"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "ALMASHREQBank",
        "tradeMethodName": "AL MASHREQ Bank"
    }, {
        "identifier": "EasyPay",
        "tradeMethodName": "EasyPay"
    }, {
        "identifier": "HSBCMiddleEast",
        "tradeMethodName": "HSBC Bank Middle East Limited - Bahrain"
    }, {
        "identifier": "KFH",
        "tradeMethodName": "Kuwait Finance House (KFH)"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SABB",
        "tradeMethodName": "The Saudi British Bank (SABB)"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "ezipay",
        "tradeMethodName": "EziPay"
    }]
},
    {
    "fullName": "Nakfa",
    "shortName": "ERN",
    "tradeMethods": [{
        "identifier": "Dashen",
        "tradeMethodName": "Dashen"
    }]
},
    {
    "fullName": "Ethiopian Birr",
    "shortName": "ETB",
    "tradeMethods": [{
        "identifier": "CBE",
        "tradeMethodName": "CBE"
    }, {
        "identifier": "TeleBirr",
        "tradeMethodName": "Tele Birr"
    }, {
        "identifier": "Abyssinia",
        "tradeMethodName": "Abyssinia"
    }, {
        "identifier": "Awash",
        "tradeMethodName": "Awash"
    }, {
        "identifier": "Dashen",
        "tradeMethodName": "Dashen"
    }, {
        "identifier": "HibretBank",
        "tradeMethodName": "Hibret Bank"
    }, {
        "identifier": "CBEBirr",
        "tradeMethodName": "CBE Birr"
    }, {
        "identifier": "CorporateBankOromia",
        "tradeMethodName": "Corporate Bank Of Oromia"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Bancamiga",
        "tradeMethodName": "Bancamiga"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "TigoPesa",
        "tradeMethodName": "Tigo Pesa"
    }, {
        "identifier": "WegagenBank",
        "tradeMethodName": "Wegagen Bank"
    }]
},
    {
    "fullName": "Pound Sterling",
    "shortName": "GBP",
    "tradeMethods": [{
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "LloydsBank",
        "tradeMethodName": "Lloyds Bank"
    }, {
        "identifier": "Monzo",
        "tradeMethodName": "Monzo"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "StarlingBank",
        "tradeMethodName": "Starling Bank"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "SterlingBank",
        "tradeMethodName": "Sterling Bank"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Bunq",
        "tradeMethodName": "Bunq"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "BankofGeorgia",
        "tradeMethodName": "Bank of Georgia"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "Bizum",
        "tradeMethodName": "Bizum"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "RussianStandardBank",
        "tradeMethodName": "Русский Стандарт"
    }, {
        "identifier": "Paysera",
        "tradeMethodName": "Paysera"
    }, {
        "identifier": "RaiffeisenBankAval",
        "tradeMethodName": "Raiffeisen Bank Aval"
    }, {
        "identifier": "CitibankRussia",
        "tradeMethodName": "Ситибанк"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "ING",
        "tradeMethodName": "ING"
    }, {
        "identifier": "N26",
        "tradeMethodName": "N26"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "ABA",
        "tradeMethodName": "ABA"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BNPParibas",
        "tradeMethodName": "BNP Paribas"
    }, {
        "identifier": "CreditAgricole",
        "tradeMethodName": "Credit Agricole"
    }, {
        "identifier": "Millennium",
        "tradeMethodName": "Millennium"
    }, {
        "identifier": "Monobank",
        "tradeMethodName": "Monobank"
    }, {
        "identifier": "PKObank",
        "tradeMethodName": "PKO Bank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "7Eleven",
        "tradeMethodName": "7-Eleven"
    }, {
        "identifier": "ABNAMRO",
        "tradeMethodName": "ABN AMRO"
    }, {
        "identifier": "ACLEDA",
        "tradeMethodName": "ACLEDA"
    }, {
        "identifier": "HalykBank",
        "tradeMethodName": "Halyk Bank"
    }, {
        "identifier": "HomeCreditBank",
        "tradeMethodName": "Хоум Кредит Банк (Россия)"
    }, {
        "identifier": "KaspiBank",
        "tradeMethodName": "Kaspi Bank"
    }, {
        "identifier": "LINEPay",
        "tradeMethodName": "LINE Pay"
    }, {
        "identifier": "LaBanquepostale",
        "tradeMethodName": "La Banque postale"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "TBCbank",
        "tradeMethodName": "TBC Bank"
    }, {
        "identifier": "TrueMoney",
        "tradeMethodName": "True Money"
    }, {
        "identifier": "UniCreditRussia",
        "tradeMethodName": "ЮниКредит"
    }, {
        "identifier": "WiseInstant",
        "tradeMethodName": "Wise Instant"
    }, {
        "identifier": "ADCB",
        "tradeMethodName": "Abu Dhabi Commercial Bank ADCB"
    }, {
        "identifier": "Apelsin",
        "tradeMethodName": "Apelsin"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "BankTransilvania",
        "tradeMethodName": "Bank Transilvania"
    }, {
        "identifier": "CenterCreditBank",
        "tradeMethodName": "ЦентрКредит Банк"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "ForteBank",
        "tradeMethodName": "ForteBank"
    }, {
        "identifier": "Gcash",
        "tradeMethodName": "Gcash"
    }, {
        "identifier": "Humo",
        "tradeMethodName": "Humo"
    }, {
        "identifier": "Inecobank",
        "tradeMethodName": "Inecobank"
    }, {
        "identifier": "Kapitalbank",
        "tradeMethodName": "Капиталбанк"
    }, {
        "identifier": "KhanBank",
        "tradeMethodName": "Khan Bank"
    }, {
        "identifier": "MoovMoney",
        "tradeMethodName": "Moov Money"
    }, {
        "identifier": "OKSO",
        "tradeMethodName": "OSKO"
    }, {
        "identifier": "Oschadbank",
        "tradeMethodName": "Ощадбанк"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "Paytm",
        "tradeMethodName": "Paytm"
    }, {
        "identifier": "PermataMe",
        "tradeMethodName": "Permata Me"
    }, {
        "identifier": "PhonePe",
        "tradeMethodName": "PhonePe"
    }, {
        "identifier": "PrivatBank",
        "tradeMethodName": "ПриватБанк (Универсальная)"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "RBCRoyalbank",
        "tradeMethodName": "RBC Royal Bank"
    }, {
        "identifier": "SantanderPoland",
        "tradeMethodName": "Santander Poland"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "Victoriabank",
        "tradeMethodName": "Victoriabank"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }, {
        "identifier": "bKash",
        "tradeMethodName": "bKash"
    }, {
        "identifier": "mBank",
        "tradeMethodName": "mBank"
    }]
},
    {
    "fullName": "Lari",
    "shortName": "GEL",
    "tradeMethods": [{
        "identifier": "TBCbank",
        "tradeMethodName": "TBC Bank"
    }, {
        "identifier": "BankofGeorgia",
        "tradeMethodName": "Bank of Georgia"
    }, {
        "identifier": "CREDOBANK",
        "tradeMethodName": "Credo Bank"
    }, {
        "identifier": "LIBERTYBANK",
        "tradeMethodName": "Liberty Bank"
    }, {
        "identifier": "BASISBANK",
        "tradeMethodName": "BasisBank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "PASHABANK",
        "tradeMethodName": "Pasha Bank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "KoronaPay",
        "tradeMethodName": "KoronaPay"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Ziraat",
        "tradeMethodName": "Ziraat"
    }]
},
    {
    "fullName": "Ghanaian Cedi",
    "shortName": "GHS",
    "tradeMethods": [{
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "Vodafonecash",
        "tradeMethodName": "Vodafone cash"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "AccessBank",
        "tradeMethodName": "Access Bank"
    }, {
        "identifier": "TigoMoney",
        "tradeMethodName": "Tigo Money"
    }, {
        "identifier": "FidelityBank",
        "tradeMethodName": "Fidelity Bank"
    }, {
        "identifier": "CalBank",
        "tradeMethodName": "CalBank"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "StanbicBank",
        "tradeMethodName": "Stanbic Bank"
    }, {
        "identifier": "MpesaVodaphone",
        "tradeMethodName": "M-pesa (Vodafone)"
    }, {
        "identifier": "ZenithBank",
        "tradeMethodName": "Zenith Bank"
    }, {
        "identifier": "GCBBank",
        "tradeMethodName": "GCB Bank"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "GTBank",
        "tradeMethodName": "GTBank"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "Dashen",
        "tradeMethodName": "Dashen"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "Modo",
        "tradeMethodName": "Modo"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "EasyPay",
        "tradeMethodName": "EasyPay"
    }, {
        "identifier": "MPesaKenya",
        "tradeMethodName": "M-PESA Kenya (Safaricom)"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "UnitedBankLimited",
        "tradeMethodName": "United Bank Limited"
    }, {
        "identifier": "Venmo",
        "tradeMethodName": "Venmo"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Dalasi",
    "shortName": "GMD",
    "tradeMethods": [{
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }, {
        "identifier": "GTBank",
        "tradeMethodName": "GTBank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "AccessBank",
        "tradeMethodName": "Access Bank"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "WaveMoney",
        "tradeMethodName": "Wave Money"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BloomBankAfricaGam",
        "tradeMethodName": "Bloom Bank Africa (Gambia)"
    }, {
        "identifier": "EquityBank",
        "tradeMethodName": "Equity Bank"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "UnitedBankLimited",
        "tradeMethodName": "United Bank Limited"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ZenithBank",
        "tradeMethodName": "Zenith Bank"
    }]
},
    {
    "fullName": "Guinea Franc",
    "shortName": "GNF",
    "tradeMethods": [{
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }]
},
    {
    "fullName": "Quetzal",
    "shortName": "GTQ",
    "tradeMethods": [{
        "identifier": "BancoIndustrial",
        "tradeMethodName": "Banco Industrial"
    }, {
        "identifier": "AgromercantilGT",
        "tradeMethodName": "BAM Banco Agromercantil GT"
    }, {
        "identifier": "Banrural",
        "tradeMethodName": "Banrural"
    }, {
        "identifier": "BancoGTContinental",
        "tradeMethodName": "Banco G&T Continental"
    }, {
        "identifier": "FRIGuatemala",
        "tradeMethodName": "FRI Guatemala"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BCG",
        "tradeMethodName": "BAC Credomatic Guatemala"
    }, {
        "identifier": "TBG",
        "tradeMethodName": "Transferencia Bancaria Guatemala"
    }, {
        "identifier": "KashGuatemala",
        "tradeMethodName": "KASH Guatemala"
    }, {
        "identifier": "BancoPromericaSV",
        "tradeMethodName": "Banco Promerica SV"
    }, {
        "identifier": "Bantrab",
        "tradeMethodName": "Bantrab"
    }, {
        "identifier": "BACCredomatic",
        "tradeMethodName": "BAC Credomatic"
    }, {
        "identifier": "AmericaCentralGT",
        "tradeMethodName": "BAC Banco America Central GT"
    }, {
        "identifier": "BancodesarrolloRural",
        "tradeMethodName": "Banco de desarrollo Rural"
    }, {
        "identifier": "BancoAztecaGuatemala",
        "tradeMethodName": "Banco Azteca Guatemala"
    }, {
        "identifier": "BankInternational",
        "tradeMethodName": "Banco Internacional"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }]
},
    {
    "fullName": "Hong Kong Dollar",
    "shortName": "HKD",
    "tradeMethods": [{
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "CashPack",
        "tradeMethodName": "Cashpack"
    }, {
        "identifier": "BankTransferVietnam",
        "tradeMethodName": "Bank Transfer (Vietnam)"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "BankArgentina",
        "tradeMethodName": "Bank Transfer (Argentina)"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "LINEPay",
        "tradeMethodName": "LINE Pay"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Lempira",
    "shortName": "HNL",
    "tradeMethods": [{
        "identifier": "BancoAtlantida",
        "tradeMethodName": "Banco Atlantida"
    }, {
        "identifier": "DaviviendaSA",
        "tradeMethodName": "Davivienda S.A"
    }, {
        "identifier": "BanpaisHonduras",
        "tradeMethodName": "Banpais Honduras"
    }, {
        "identifier": "TBH",
        "tradeMethodName": "Transferencia Bancaria Honduras"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "OccidenteHonduras",
        "tradeMethodName": "Banco de Occidente Honduras"
    }, {
        "identifier": "BACCredomatic",
        "tradeMethodName": "BAC Credomatic"
    }, {
        "identifier": "BCH",
        "tradeMethodName": "BAC Credomatic Honduras"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "BANPAIS",
        "tradeMethodName": "BANPAÍS"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Banrural",
        "tradeMethodName": "Banrural"
    }, {
        "identifier": "KashGuatemala",
        "tradeMethodName": "KASH Guatemala"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "TigoMoney",
        "tradeMethodName": "Tigo Money"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Haitian Gourde",
    "shortName": "HTG",
    "tradeMethods": []
},
    {
    "fullName": "Forint",
    "shortName": "HUF",
    "tradeMethods": [{
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "KHBank",
        "tradeMethodName": "K&H Bank"
    }, {
        "identifier": "CIBBank",
        "tradeMethodName": "CIB Bank"
    }, {
        "identifier": "MKBBank",
        "tradeMethodName": "MKB Bank"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }]
},
    {
    "fullName": "Rupiah",
    "shortName": "IDR",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BCAMobile",
        "tradeMethodName": "BCA"
    }, {
        "identifier": "DANA",
        "tradeMethodName": "DANA(Indonesia)"
    }, {
        "identifier": "MandiriPay",
        "tradeMethodName": "Mandiri Pay"
    }, {
        "identifier": "PermataMe",
        "tradeMethodName": "Permata Me"
    }, {
        "identifier": "BANKBRI",
        "tradeMethodName": "Bank BRI"
    }, {
        "identifier": "OVO",
        "tradeMethodName": "OVO"
    }, {
        "identifier": "SEAbank",
        "tradeMethodName": "SEA Bank"
    }, {
        "identifier": "GoPay",
        "tradeMethodName": "GoPay"
    }, {
        "identifier": "YapBNI",
        "tradeMethodName": "Yap! (BNI)"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "OCBCNISP",
        "tradeMethodName": "OCBC NISP"
    }, {
        "identifier": "Maybank",
        "tradeMethodName": "Maybank"
    }, {
        "identifier": "CIMBNiaga",
        "tradeMethodName": "CIMB Niaga"
    }, {
        "identifier": "BankJago",
        "tradeMethodName": "Bank Jago"
    }, {
        "identifier": "LinkAja",
        "tradeMethodName": "LinkAja"
    }, {
        "identifier": "JeniusPayMe",
        "tradeMethodName": "Jenius PayMe"
    }, {
        "identifier": "Sinarmas",
        "tradeMethodName": "Sinarmas"
    }, {
        "identifier": "NEO",
        "tradeMethodName": "NEO"
    }, {
        "identifier": "DanamonBank",
        "tradeMethodName": "Danamon Bank"
    }, {
        "identifier": "Blu",
        "tradeMethodName": "Blu"
    }, {
        "identifier": "AlloBank",
        "tradeMethodName": "Allo Bank"
    }, {
        "identifier": "TMRW",
        "tradeMethodName": "TMRW by UOB"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Flip",
        "tradeMethodName": "Flip"
    }, {
        "identifier": "BCASyariah",
        "tradeMethodName": "BCA Syariah"
    }, {
        "identifier": "ABA",
        "tradeMethodName": "ABA"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "BankTaiwan",
        "tradeMethodName": "Bank Transfer (Taiwan)"
    }, {
        "identifier": "EasypaisaPK",
        "tradeMethodName": "Easypaisa-PK Only"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "MeezanBank",
        "tradeMethodName": "Meezan Bank"
    }, {
        "identifier": "NayaPay",
        "tradeMethodName": "NayaPay"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "Raast",
        "tradeMethodName": "Raast"
    }, {
        "identifier": "SadaPay",
        "tradeMethodName": "SadaPay"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Indian Rupee",
    "shortName": "INR",
    "tradeMethods": [{
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "Paytm",
        "tradeMethodName": "Paytm"
    }, {
        "identifier": "GPay",
        "tradeMethodName": "Google Pay (GPay)"
    }, {
        "identifier": "PhonePe",
        "tradeMethodName": "PhonePe"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "UPIQRCode",
        "tradeMethodName": "Lightning UPI"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "Mobikwik",
        "tradeMethodName": "Mobikwik"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "StateBank",
        "tradeMethodName": "State Bank"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "Esewa",
        "tradeMethodName": "Esewa"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "ADCB",
        "tradeMethodName": "Abu Dhabi Commercial Bank ADCB"
    }, {
        "identifier": "AlRajhiBank",
        "tradeMethodName": "Al Rajhi Bank"
    }, {
        "identifier": "BankMuscat",
        "tradeMethodName": "Bank Muscat"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "CashU",
        "tradeMethodName": "CashU"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "DEMIRBANK",
        "tradeMethodName": "DemirBank"
    }, {
        "identifier": "DubaiIslamicBank",
        "tradeMethodName": "DIB: Dubai Islamic Bank"
    }, {
        "identifier": "EmiratesNBD",
        "tradeMethodName": "Emirates NBD"
    }, {
        "identifier": "GoPay",
        "tradeMethodName": "GoPay"
    }, {
        "identifier": "Khalti",
        "tradeMethodName": "Khalti"
    }, {
        "identifier": "MPesaKenya",
        "tradeMethodName": "M-PESA Kenya (Safaricom)"
    }, {
        "identifier": "PipolPay",
        "tradeMethodName": "Pipol Pay"
    }, {
        "identifier": "Pix",
        "tradeMethodName": "Pix"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }]
},
    {
    "fullName": "Iraqi Dinar",
    "shortName": "IQD",
    "tradeMethods": [{
        "identifier": "ZAINCASH",
        "tradeMethodName": "ZainCash"
    }, {
        "identifier": "FirstIraqiBank",
        "tradeMethodName": "First Iraqi Bank"
    }, {
        "identifier": "ZainCashBusiness",
        "tradeMethodName": "ZainCash - Business"
    }, {
        "identifier": "AltaifIslamicBank",
        "tradeMethodName": "Altaif Islamic Bank"
    }, {
        "identifier": "AlRafidainQiServices",
        "tradeMethodName": "Al-Rafidain QiServices"
    }, {
        "identifier": "FastPay",
        "tradeMethodName": "FastPay"
    }, {
        "identifier": "NEOPayIraq",
        "tradeMethodName": "NEO Pay Iraq"
    }, {
        "identifier": "Switch",
        "tradeMethodName": "Switch"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "ADIB",
        "tradeMethodName": "ADIB: Abu Dhabi Islamic Bank"
    }, {
        "identifier": "AlHilalBank",
        "tradeMethodName": "Al Hilal Bank"
    }, {
        "identifier": "BENEFITPAY",
        "tradeMethodName": "BenefitPay"
    }, {
        "identifier": "Blu",
        "tradeMethodName": "Blu"
    }, {
        "identifier": "DubaiIslamicBank",
        "tradeMethodName": "DIB: Dubai Islamic Bank"
    }, {
        "identifier": "NBK",
        "tradeMethodName": "National Bank of Kuwait (K.S.C) (NBK)"
    }, {
        "identifier": "NEO",
        "tradeMethodName": "NEO"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "stcpay",
        "tradeMethodName": "stc pay"
    }]
},
    {
    "fullName": "Iceland Krona",
    "shortName": "ISK",
    "tradeMethods": []
},
    {
    "fullName": "Jamaican Dollar",
    "shortName": "JMD",
    "tradeMethods": [{
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Jordanian Dinar",
    "shortName": "JOD",
    "tradeMethods": [{
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "CLICK",
        "tradeMethodName": "CliQ"
    }, {
        "identifier": "ZAINCASH",
        "tradeMethodName": "ZainCash"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "BankAlEtihad",
        "tradeMethodName": "Bank Al Etihad"
    }, {
        "identifier": "FNBewallet",
        "tradeMethodName": "FNB-ewallet"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "BankofJordan",
        "tradeMethodName": "Bank of Jordan"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "JordanIslamicBank",
        "tradeMethodName": "Jordan Islamic Bank"
    }, {
        "identifier": "Umoney",
        "tradeMethodName": "U-money"
    }, {
        "identifier": "CapitecBank",
        "tradeMethodName": "Capitec Bank"
    }, {
        "identifier": "JordanKuwaitBank",
        "tradeMethodName": "Jordan Kuwait Bank"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "CairoAmmanBank",
        "tradeMethodName": "Cairo Amman Bank"
    }, {
        "identifier": "CashInPerson",
        "tradeMethodName": "Наличный расчет"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "Ahlibank",
        "tradeMethodName": "Ahlibank"
    }, {
        "identifier": "AttijariBank",
        "tradeMethodName": "Attijari Bank"
    }, {
        "identifier": "CapitalBank",
        "tradeMethodName": "Capital Bank"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Vodafonecash",
        "tradeMethodName": "Vodafone cash"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ZainCashBusiness",
        "tradeMethodName": "ZainCash - Business"
    }]
},
    {
    "fullName": "Yen",
    "shortName": "JPY",
    "tradeMethods": [{
        "identifier": "LINEPay",
        "tradeMethodName": "LINE Pay"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "7Eleven",
        "tradeMethodName": "7-Eleven"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BCEL",
        "tradeMethodName": "BCEL"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "Esewa",
        "tradeMethodName": "Esewa"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }]
},
    {
    "fullName": "Kenyan Shilling",
    "shortName": "KES",
    "tradeMethods": [{
        "identifier": "MPesaKenya",
        "tradeMethodName": "M-PESA Kenya (Safaricom)"
    }, {
        "identifier": "EquityBank",
        "tradeMethodName": "Equity Bank"
    }, {
        "identifier": "MpesaPaybill",
        "tradeMethodName": "M-pesa Paybill"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "EQbank",
        "tradeMethodName": "EQ Bank"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "StanbicBank",
        "tradeMethodName": "Stanbic Bank"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "CoOperativeBankKenya",
        "tradeMethodName": "Co-Operative Bank Of Kenya"
    }, {
        "identifier": "Dashen",
        "tradeMethodName": "Dashen"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "Inecobank",
        "tradeMethodName": "Inecobank"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Som",
    "shortName": "KGS",
    "tradeMethods": [{
        "identifier": "mBank",
        "tradeMethodName": "mBank"
    }, {
        "identifier": "OPTIMABANK",
        "tradeMethodName": "Оптима Банк"
    }, {
        "identifier": "ELCART",
        "tradeMethodName": "Элкарт"
    }, {
        "identifier": "DEMIRBANK",
        "tradeMethodName": "DemirBank"
    }, {
        "identifier": "BAKAIBANK",
        "tradeMethodName": "Бакай Банк"
    }, {
        "identifier": "KICB",
        "tradeMethodName": "KICB"
    }, {
        "identifier": "COMMERCIALBANKKZT",
        "tradeMethodName": "Коммерческий банк КЫРГЫЗСТАН"
    }, {
        "identifier": "OMoney",
        "tradeMethodName": "O!Money"
    }, {
        "identifier": "AIYLBANK",
        "tradeMethodName": "Айыл Банк"
    }, {
        "identifier": "RSKBANK",
        "tradeMethodName": "РСК Банк"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "HalykBank",
        "tradeMethodName": "Halyk Bank"
    }, {
        "identifier": "KompanionBank",
        "tradeMethodName": "Kompanion Bank"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "ABA",
        "tradeMethodName": "ABA"
    }, {
        "identifier": "FincaBank",
        "tradeMethodName": "Finca Bank"
    }, {
        "identifier": "BaitushumBank",
        "tradeMethodName": "Бай Тушум Банк"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "HALKBANK",
        "tradeMethodName": "Халкбанк"
    }, {
        "identifier": "TBCbank",
        "tradeMethodName": "TBC Bank"
    }]
},
    {
    "fullName": "Cambodian Riel",
    "shortName": "KHR",
    "tradeMethods": [{
        "identifier": "ABA",
        "tradeMethodName": "ABA"
    }, {
        "identifier": "WingMoney",
        "tradeMethodName": "Wing Money"
    }, {
        "identifier": "ACLEDA",
        "tradeMethodName": "ACLEDA"
    }, {
        "identifier": "KHQR",
        "tradeMethodName": "KHQR"
    }, {
        "identifier": "BankTransferCambodia",
        "tradeMethodName": "Bank Transfer (Cambodia)"
    }, {
        "identifier": "TrueMoneyCambodia",
        "tradeMethodName": "True Money (Cambodia)"
    }, {
        "identifier": "Bakong",
        "tradeMethodName": "Bakong"
    }]
},
    {
    "fullName": "Comoro Franc",
    "shortName": "KMF",
    "tradeMethods": []
},
    {
    "fullName": "Kuwaiti Dinar",
    "shortName": "KWD",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "KFH",
        "tradeMethodName": "Kuwait Finance House (KFH)"
    }, {
        "identifier": "NBK",
        "tradeMethodName": "National Bank of Kuwait (K.S.C) (NBK)"
    }, {
        "identifier": "Boubyan",
        "tradeMethodName": "Boubyan Bank (K.S.C) (Boubyan)"
    }, {
        "identifier": "AttijariBank",
        "tradeMethodName": "Attijari Bank"
    }, {
        "identifier": "GulfBank",
        "tradeMethodName": "Gulf Bank (K.S.C) (GBK)"
    }, {
        "identifier": "BurganBank",
        "tradeMethodName": "Burgan Bank (K.S.C) (Burgan)"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "Ahlibank",
        "tradeMethodName": "Ahlibank"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "AlRajhiBank",
        "tradeMethodName": "Al Rajhi Bank"
    }, {
        "identifier": "EasypaisaPK",
        "tradeMethodName": "Easypaisa-PK Only"
    }, {
        "identifier": "IMEPay",
        "tradeMethodName": "IME Pay"
    }, {
        "identifier": "JordanKuwaitBank",
        "tradeMethodName": "Jordan Kuwait Bank"
    }, {
        "identifier": "LinkAja",
        "tradeMethodName": "LinkAja"
    }, {
        "identifier": "LloydsBank",
        "tradeMethodName": "Lloyds Bank"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "PhonePe",
        "tradeMethodName": "PhonePe"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }]
},
    {
    "fullName": "Tenge",
    "shortName": "KZT",
    "tradeMethods": [{
        "identifier": "KaspiBank",
        "tradeMethodName": "Kaspi Bank"
    }, {
        "identifier": "HalykBank",
        "tradeMethodName": "Halyk Bank"
    }, {
        "identifier": "CenterCreditBank",
        "tradeMethodName": "ЦентрКредит Банк"
    }, {
        "identifier": "JysanBank",
        "tradeMethodName": "Jysan Bank"
    }, {
        "identifier": "ForteBank",
        "tradeMethodName": "ForteBank"
    }, {
        "identifier": "FreedomBank",
        "tradeMethodName": "Freedom Bank"
    }, {
        "identifier": "AltynBank",
        "tradeMethodName": "Altyn Bank"
    }, {
        "identifier": "EurasianBank",
        "tradeMethodName": "Евразийский Банк"
    }, {
        "identifier": "HomeCreditKazakhstan",
        "tradeMethodName": "Хоум Кредит Казахстан"
    }, {
        "identifier": "BankRBK",
        "tradeMethodName": "Bank RBK"
    }, {
        "identifier": "Simply",
        "tradeMethodName": "Simply"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "Nurbank",
        "tradeMethodName": "Нурбанк"
    }, {
        "identifier": "Kazpost",
        "tradeMethodName": "Казпочта"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "TengeBank",
        "tradeMethodName": "Tenge Bank"
    }, {
        "identifier": "HALKBANK",
        "tradeMethodName": "Халкбанк"
    }, {
        "identifier": "HomeCreditBank",
        "tradeMethodName": "Хоум Кредит Банк (Россия)"
    }, {
        "identifier": "Monobank",
        "tradeMethodName": "Monobank"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "RussianStandardBank",
        "tradeMethodName": "Русский Стандарт"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "Zelle",
        "tradeMethodName": "Zelle"
    }]
},
    {
    "fullName": "Kip",
    "shortName": "LAK",
    "tradeMethods": [{
        "identifier": "BCEL",
        "tradeMethodName": "BCEL"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BankTransferLaos",
        "tradeMethodName": "Bank Transfer (Laos)"
    }, {
        "identifier": "MMoneyLaos",
        "tradeMethodName": "M Money Laos"
    }]
},
    {
    "fullName": "Lebanese Pound",
    "shortName": "LBP",
    "tradeMethods": [{
        "identifier": "WhishMONEY",
        "tradeMethodName": "whish MONEY"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "Esewa",
        "tradeMethodName": "Esewa"
    }, {
        "identifier": "IMEPay",
        "tradeMethodName": "IME Pay"
    }, {
        "identifier": "Khalti",
        "tradeMethodName": "Khalti"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Sri Lanka Rupee",
    "shortName": "LKR",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "EZCASH",
        "tradeMethodName": "eZCash"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "GENIE",
        "tradeMethodName": "Genie"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "LeoBank",
        "tradeMethodName": "Leobank"
    }, {
        "identifier": "mBank",
        "tradeMethodName": "mBank"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "ALMASHREQBank",
        "tradeMethodName": "AL MASHREQ Bank"
    }, {
        "identifier": "BCEL",
        "tradeMethodName": "BCEL"
    }, {
        "identifier": "COMMERCIALBANKKZT",
        "tradeMethodName": "Коммерческий банк КЫРГЫЗСТАН"
    }, {
        "identifier": "Esewa",
        "tradeMethodName": "Esewa"
    }, {
        "identifier": "GPay",
        "tradeMethodName": "Google Pay (GPay)"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "NationalBankAbuDhabi",
        "tradeMethodName": "National Bank of Abu Dhabi FAB"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "PrivatBank",
        "tradeMethodName": "ПриватБанк (Универсальная)"
    }, {
        "identifier": "RCBC",
        "tradeMethodName": "Rizal Commercial Banking Corporation"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "RiyadBank",
        "tradeMethodName": "Riyad Bank"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "YeloBank",
        "tradeMethodName": "Yelo Bank"
    }, {
        "identifier": "m10",
        "tradeMethodName": "m10"
    }]
},
    {
    "fullName": "Liberian Dollar",
    "shortName": "LRD",
    "tradeMethods": [{
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "AccessBank",
        "tradeMethodName": "Access Bank"
    }, {
        "identifier": "GTBank",
        "tradeMethodName": "GTBank"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Lybian Dinar",
    "shortName": "LYD",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CreditLibanais",
        "tradeMethodName": "Credit Libanais"
    }]
},
    {
    "fullName": "Moroccan Dirham",
    "shortName": "MAD",
    "tradeMethods": [{
        "identifier": "CIHBank",
        "tradeMethodName": "CIH Bank"
    }, {
        "identifier": "AttijariwafaNational",
        "tradeMethodName": "Attijariwafa National Bank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "AttijariBank",
        "tradeMethodName": "Attijari Bank"
    }, {
        "identifier": "BMCEBank",
        "tradeMethodName": "BMCE Bank"
    }, {
        "identifier": "BRDBank",
        "tradeMethodName": "BRD Bank"
    }, {
        "identifier": "SocieteGenerale",
        "tradeMethodName": "Societe Generale"
    }, {
        "identifier": "CreditBanquePopu",
        "tradeMethodName": "Crédit Banque Populaire du Maroc"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "LaBanquepostale",
        "tradeMethodName": "La Banque postale"
    }, {
        "identifier": "SocieteGeneraleComm",
        "tradeMethodName": "Société Générale Commercial Maroc"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "CreditAgricole",
        "tradeMethodName": "Credit Agricole"
    }, {
        "identifier": "CreditduMaroc",
        "tradeMethodName": "Crédit du Maroc"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "CFGbank",
        "tradeMethodName": "CFG BANK"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "BosBank",
        "tradeMethodName": "BOS Bank"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }]
},
    {
    "fullName": "Moldovan Leu",
    "shortName": "MDL",
    "tradeMethods": [{
        "identifier": "MAIB",
        "tradeMethodName": "MAIB"
    }, {
        "identifier": "MICB",
        "tradeMethodName": "MICB (Moldova)"
    }, {
        "identifier": "Victoriabank",
        "tradeMethodName": "Victoriabank"
    }, {
        "identifier": "Paynet",
        "tradeMethodName": "Paynet"
    }, {
        "identifier": "FinComBank",
        "tradeMethodName": "FinComBank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "ABA",
        "tradeMethodName": "ABA"
    }, {
        "identifier": "BCRBank",
        "tradeMethodName": "BCR Bank"
    }, {
        "identifier": "Humo",
        "tradeMethodName": "Humo"
    }, {
        "identifier": "OTPBankNew",
        "tradeMethodName": "OTP BANK"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }]
},
    {
    "fullName": "Malagasy Ariary",
    "shortName": "MGA",
    "tradeMethods": [{
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Burmese Kyat",
    "shortName": "MMK",
    "tradeMethods": [{
        "identifier": "KBZPay1",
        "tradeMethodName": "KBZPay"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CBPay",
        "tradeMethodName": "CB Pay"
    }, {
        "identifier": "AYAPay",
        "tradeMethodName": "AYA Pay"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }, {
        "identifier": "WaveMoney",
        "tradeMethodName": "Wave Money"
    }, {
        "identifier": "uabpay",
        "tradeMethodName": "uabpay"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "Onepay",
        "tradeMethodName": "Onepay"
    }, {
        "identifier": "TrueMoney",
        "tradeMethodName": "True Money"
    }, {
        "identifier": "WavePay1",
        "tradeMethodName": "WavePay"
    }]
},
    {
    "fullName": "Mongolia Tughrik",
    "shortName": "MNT",
    "tradeMethods": [{
        "identifier": "KhanBank",
        "tradeMethodName": "Khan Bank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "TradeandDeveloBank",
        "tradeMethodName": "Trade and Development Bank"
    }, {
        "identifier": "GolomtBank",
        "tradeMethodName": "Golomt Bank"
    }, {
        "identifier": "StateBank",
        "tradeMethodName": "State Bank"
    }, {
        "identifier": "SocialPay",
        "tradeMethodName": "Social Pay"
    }, {
        "identifier": "XacBank",
        "tradeMethodName": "XacBank"
    }, {
        "identifier": "MongolChat",
        "tradeMethodName": "Mongol Chat"
    }]
},
    {
    "fullName": "Macanese Pataca",
    "shortName": "MOP",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "MPay",
        "tradeMethodName": "M Pay"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "Gcash",
        "tradeMethodName": "Gcash"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "LINEPay",
        "tradeMethodName": "LINE Pay"
    }, {
        "identifier": "TradeandDeveloBank",
        "tradeMethodName": "Trade and Development Bank"
    }]
},
    {
    "fullName": "Mauritanian ouguiya",
    "shortName": "MRU",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Bankily",
        "tradeMethodName": "Bankily"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BankTransferPH",
        "tradeMethodName": "Bank transfer (PH)"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "LaBanquepostale",
        "tradeMethodName": "La Banque postale"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Kwacha",
    "shortName": "MWK",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }]
},
    {
    "fullName": "Mexican Peso",
    "shortName": "MXN",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "STP",
        "tradeMethodName": "STP"
    }, {
        "identifier": "CitiBanamex",
        "tradeMethodName": "Citibanamex"
    }, {
        "identifier": "Banorte",
        "tradeMethodName": "Banorte"
    }, {
        "identifier": "SantanderMexico",
        "tradeMethodName": "Santander Mexico"
    }, {
        "identifier": "MercadoPagoNew",
        "tradeMethodName": "Mercadopago"
    }, {
        "identifier": "OXXO",
        "tradeMethodName": "OXXO"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }, {
        "identifier": "7Eleven",
        "tradeMethodName": "7-Eleven"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "Global66",
        "tradeMethodName": "Global66"
    }, {
        "identifier": "HSBCBankEgypt",
        "tradeMethodName": "HSBC Bank Egypt"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Mozambican metical",
    "shortName": "MZN",
    "tradeMethods": [{
        "identifier": "Millennium",
        "tradeMethodName": "Millennium"
    }, {
        "identifier": "MpesaVodaphone",
        "tradeMethodName": "M-pesa (Vodafone)"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }]
},
    {
    "fullName": "Namibia Dollar",
    "shortName": "NAD",
    "tradeMethods": [{
        "identifier": "FNBewallet",
        "tradeMethodName": "FNB-ewallet"
    }]
},
    {
    "fullName": "Nigerian Naira",
    "shortName": "NGN",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "OPay",
        "tradeMethodName": "Opay"
    }, {
        "identifier": "KudaBankNG",
        "tradeMethodName": "Kuda Bank NG"
    }, {
        "identifier": "AccessBank",
        "tradeMethodName": "Access Bank"
    }, {
        "identifier": "PalmPay",
        "tradeMethodName": "Palmpay"
    }, {
        "identifier": "GTBank",
        "tradeMethodName": "GTBank"
    }, {
        "identifier": "FirstBankOfNigeria",
        "tradeMethodName": "First Bank Of Nigeria"
    }, {
        "identifier": "ZenithBank",
        "tradeMethodName": "Zenith Bank"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "FCMB",
        "tradeMethodName": "FCMB"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "UnitedBankAfrica",
        "tradeMethodName": "United Bank for Africa Plc"
    }, {
        "identifier": "StanbicBank",
        "tradeMethodName": "Stanbic Bank"
    }, {
        "identifier": "UnionBankofNigeria",
        "tradeMethodName": "Union Bank of Nigeria"
    }, {
        "identifier": "SterlingBank",
        "tradeMethodName": "Sterling Bank"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "ProvidusBankLimited",
        "tradeMethodName": "Providus Bank Limited"
    }, {
        "identifier": "FidelityBank",
        "tradeMethodName": "Fidelity Bank"
    }, {
        "identifier": "GoMoney",
        "tradeMethodName": "GoMoney"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "FidelityBankPlc",
        "tradeMethodName": "Fidelity Bank Plc"
    }, {
        "identifier": "KeystoneBank",
        "tradeMethodName": "Keystone Bank"
    }, {
        "identifier": "WemaBank",
        "tradeMethodName": "Wema Bank"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "Bundle",
        "tradeMethodName": "Bundle"
    }, {
        "identifier": "FastPay",
        "tradeMethodName": "FastPay"
    }, {
        "identifier": "JaizBankPlc",
        "tradeMethodName": "Jaiz Bank Plc"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Monzo",
        "tradeMethodName": "Monzo"
    }, {
        "identifier": "PolarisBankLimited",
        "tradeMethodName": "Polaris Bank Limited"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "BankofJordan",
        "tradeMethodName": "Bank of Jordan"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "DUSUPAY",
        "tradeMethodName": "Instant Bank Transfer"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "BankPivdenny",
        "tradeMethodName": "Bank Pivdenny"
    }, {
        "identifier": "BankTaiwan",
        "tradeMethodName": "Bank Transfer (Taiwan)"
    }, {
        "identifier": "Inecobank",
        "tradeMethodName": "Inecobank"
    }, {
        "identifier": "LloydsBank",
        "tradeMethodName": "Lloyds Bank"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "NETELLER",
        "tradeMethodName": "Neteller"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "Papara",
        "tradeMethodName": "Papara"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "QPay",
        "tradeMethodName": "QPay"
    }, {
        "identifier": "QatarNationalBank",
        "tradeMethodName": "Qatar National Bank QNB"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "Zelle",
        "tradeMethodName": "Zelle"
    }]
},
    {
    "fullName": "Nicaraguan Cordoba",
    "shortName": "NIO",
    "tradeMethods": [{
        "identifier": "BilleteraMovilBanpro",
        "tradeMethodName": "Billetera Movil Banpro"
    }, {
        "identifier": "BancoLafiseNicaragua",
        "tradeMethodName": "Banco Lafise Nicaragua"
    }, {
        "identifier": "BACcredoNicaragua",
        "tradeMethodName": "BAC Credomatic Nicaragua"
    }, {
        "identifier": "BACCredomatic",
        "tradeMethodName": "BAC Credomatic"
    }, {
        "identifier": "TBN",
        "tradeMethodName": "Transferencia Bancaria Nicaragua"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }]
},
    {
    "fullName": "Norwegian Krone",
    "shortName": "NOK",
    "tradeMethods": [{
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "PrivatBank",
        "tradeMethodName": "ПриватБанк (Универсальная)"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "Vipps",
        "tradeMethodName": "Vipps"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }]
},
    {
    "fullName": "Nepalese Rupee",
    "shortName": "NPR",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Esewa",
        "tradeMethodName": "Esewa"
    }, {
        "identifier": "Khalti",
        "tradeMethodName": "Khalti"
    }, {
        "identifier": "IMEPay",
        "tradeMethodName": "IME Pay"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "QPay",
        "tradeMethodName": "QPay"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "GPay",
        "tradeMethodName": "Google Pay (GPay)"
    }, {
        "identifier": "Paytm",
        "tradeMethodName": "Paytm"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "Maybank",
        "tradeMethodName": "Maybank"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "New Zealand Dollar",
    "shortName": "NZD",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "ANZ",
        "tradeMethodName": "ANZ"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }]
},
    {
    "fullName": "Omani Rial",
    "shortName": "OMR",
    "tradeMethods": [{
        "identifier": "BankMuscat",
        "tradeMethodName": "Bank Muscat"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "mBank",
        "tradeMethodName": "mBank"
    }, {
        "identifier": "BankDhofar",
        "tradeMethodName": "Bank Dhofar"
    }, {
        "identifier": "BankNizwa",
        "tradeMethodName": "Bank Nizwa"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "NationalBankOman",
        "tradeMethodName": "National Bank of Oman"
    }, {
        "identifier": "SoharInternational",
        "tradeMethodName": "Sohar International"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "BankTransilvania",
        "tradeMethodName": "Bank Transilvania"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "HSBCOman",
        "tradeMethodName": "HSBC Oman"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }]
},
    {
    "fullName": "Panamanian Balboa",
    "shortName": "PAB",
    "tradeMethods": [{
        "identifier": "BanescoPanama",
        "tradeMethodName": "Banesco Panama"
    }, {
        "identifier": "BancoGeneralPanama",
        "tradeMethodName": "Banco General Panama"
    }, {
        "identifier": "Zinli",
        "tradeMethodName": "Zinli"
    }, {
        "identifier": "MercantilBankPanama",
        "tradeMethodName": "Mercantil Bank Panama"
    }, {
        "identifier": "BanistmoPanama",
        "tradeMethodName": "Banistmo Panama"
    }, {
        "identifier": "Mony",
        "tradeMethodName": "Mony"
    }, {
        "identifier": "Towerbank",
        "tradeMethodName": "Towerbank"
    }, {
        "identifier": "Nequi",
        "tradeMethodName": "Nequi"
    }, {
        "identifier": "BACCredomatic",
        "tradeMethodName": "BAC Credomatic"
    }, {
        "identifier": "TransferenciaACH",
        "tradeMethodName": "Transferencia ACH (Panamá)"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "MultibankPanama",
        "tradeMethodName": "Multibank Panama"
    }, {
        "identifier": "ScotiabankPanama",
        "tradeMethodName": "Scotiabank Panama"
    }, {
        "identifier": "WallyTech",
        "tradeMethodName": "Wally Tech"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "DaviviendaSA",
        "tradeMethodName": "Davivienda S.A"
    }, {
        "identifier": "GlobalBankPanama",
        "tradeMethodName": "Global Bank Panama"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }]
},
    {
    "fullName": "Peruvian Sol",
    "shortName": "PEN",
    "tradeMethods": [{
        "identifier": "CreditBankofPeru",
        "tradeMethodName": "Credit Bank of Peru"
    }, {
        "identifier": "Interbank",
        "tradeMethodName": "Interbank"
    }, {
        "identifier": "BancoDeCredito",
        "tradeMethodName": "Banco de Credito"
    }, {
        "identifier": "Yape",
        "tradeMethodName": "Yape"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "Plin",
        "tradeMethodName": "Plin"
    }, {
        "identifier": "ScotiabankPeru",
        "tradeMethodName": "Scotiabank Peru"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Banktransferperu",
        "tradeMethodName": "Bank Transfer Peru"
    }, {
        "identifier": "Prex",
        "tradeMethodName": "Prex"
    }, {
        "identifier": "Ligo",
        "tradeMethodName": "Ligo"
    }, {
        "identifier": "BBVAPeru",
        "tradeMethodName": "BBVA Perú"
    }, {
        "identifier": "BanBif",
        "tradeMethodName": "BanBif"
    }, {
        "identifier": "BancoPichincha",
        "tradeMethodName": "Banco Pichincha"
    }, {
        "identifier": "BancolombiaSA",
        "tradeMethodName": "Bancolombia S.A"
    }, {
        "identifier": "Global66",
        "tradeMethodName": "Global66"
    }, {
        "identifier": "Nequi",
        "tradeMethodName": "Nequi"
    }, {
        "identifier": "BancoFalabella",
        "tradeMethodName": "Banco Falabella"
    }, {
        "identifier": "Cash",
        "tradeMethodName": "Cash"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }]
},
    {
    "fullName": "Papua New Guinean Kina",
    "shortName": "PGK",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Maybank",
        "tradeMethodName": "Maybank"
    }, {
        "identifier": "CIMBNiaga",
        "tradeMethodName": "CIMB Niaga"
    }, {
        "identifier": "BigPay",
        "tradeMethodName": "BigPay"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "AgroBank",
        "tradeMethodName": "Агробанк"
    }, {
        "identifier": "EasyPay",
        "tradeMethodName": "EasyPay"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "KFH",
        "tradeMethodName": "Kuwait Finance House (KFH)"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Philippine Peso",
    "shortName": "PHP",
    "tradeMethods": [{
        "identifier": "Gcash",
        "tradeMethodName": "Gcash"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Paymaya",
        "tradeMethodName": "Paymaya"
    }, {
        "identifier": "BPI",
        "tradeMethodName": "Bank of the Philippine Islands (BPI)"
    }, {
        "identifier": "UBoP",
        "tradeMethodName": "UnionBank of the Philippines"
    }, {
        "identifier": "SEAbank",
        "tradeMethodName": "SEA Bank"
    }, {
        "identifier": "BDO",
        "tradeMethodName": "Banco De Oro (BDO)"
    }, {
        "identifier": "CIMBPHP",
        "tradeMethodName": "CIMB Philippines"
    }, {
        "identifier": "KomoBank",
        "tradeMethodName": "Komo Bank"
    }, {
        "identifier": "MBoP",
        "tradeMethodName": "Metropolitan Bank of the Philippines"
    }, {
        "identifier": "RCBC",
        "tradeMethodName": "Rizal Commercial Banking Corporation"
    }, {
        "identifier": "PhilippinesNationalB",
        "tradeMethodName": "Philippines National Bank (PNB)"
    }, {
        "identifier": "Coinsph",
        "tradeMethodName": "Coins.ph"
    }, {
        "identifier": "LoP",
        "tradeMethodName": "Landbank of the Philippines"
    }, {
        "identifier": "GoTymeBank",
        "tradeMethodName": "GoTyme Bank"
    }, {
        "identifier": "AsiaUnitedBank",
        "tradeMethodName": "Asia United Bank"
    }, {
        "identifier": "SecurityBank",
        "tradeMethodName": "Security Bank"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "ChinaBank",
        "tradeMethodName": "China Bank"
    }, {
        "identifier": "TonikBank",
        "tradeMethodName": "Tonik Bank"
    }, {
        "identifier": "Cash",
        "tradeMethodName": "Cash"
    }, {
        "identifier": "Maybank",
        "tradeMethodName": "Maybank"
    }, {
        "identifier": "SterlingBank",
        "tradeMethodName": "Sterling Bank"
    }, {
        "identifier": "BankTransferPH",
        "tradeMethodName": "Bank transfer (PH)"
    }, {
        "identifier": "UnionDigitalBank",
        "tradeMethodName": "Union Digital Bank"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "StarlingBank",
        "tradeMethodName": "Starling Bank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Pakistan Rupee",
    "shortName": "PKR",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "EasypaisaPK",
        "tradeMethodName": "Easypaisa-PK Only"
    }, {
        "identifier": "MeezanBank",
        "tradeMethodName": "Meezan Bank"
    }, {
        "identifier": "SadaPay",
        "tradeMethodName": "SadaPay"
    }, {
        "identifier": "Raast",
        "tradeMethodName": "Raast"
    }, {
        "identifier": "NayaPay",
        "tradeMethodName": "NayaPay"
    }, {
        "identifier": "UnitedBankLimited",
        "tradeMethodName": "United Bank Limited"
    }, {
        "identifier": "AlliedBankLimited",
        "tradeMethodName": "Allied Bank Limited, Wholesale Branch"
    }, {
        "identifier": "Upaisa",
        "tradeMethodName": "Upaisa"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "alBaraka",
        "tradeMethodName": "alBaraka"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Mobikwik",
        "tradeMethodName": "Mobikwik"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "EasyPay",
        "tradeMethodName": "EasyPay"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "AlRajhiBank",
        "tradeMethodName": "Al Rajhi Bank"
    }, {
        "identifier": "BancoEstado",
        "tradeMethodName": "Banco Estado"
    }, {
        "identifier": "BancoFalabella",
        "tradeMethodName": "Banco Falabella"
    }, {
        "identifier": "BancoSantanderChile",
        "tradeMethodName": "Banco Santander Chile"
    }, {
        "identifier": "BancodeChile",
        "tradeMethodName": "Banco de Chile"
    }, {
        "identifier": "CashU",
        "tradeMethodName": "CashU"
    }, {
        "identifier": "DubaiIslamicBank",
        "tradeMethodName": "DIB: Dubai Islamic Bank"
    }, {
        "identifier": "Monzo",
        "tradeMethodName": "Monzo"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }, {
        "identifier": "UnitedBulgarianBank",
        "tradeMethodName": "United Bulgarian Bank (UBB)"
    }]
},
    {
    "fullName": "Polish Zloty",
    "shortName": "PLN",
    "tradeMethods": [{
        "identifier": "Blik",
        "tradeMethodName": "Blik"
    }, {
        "identifier": "PKObank",
        "tradeMethodName": "PKO Bank"
    }, {
        "identifier": "Millennium",
        "tradeMethodName": "Millennium"
    }, {
        "identifier": "SantanderPoland",
        "tradeMethodName": "Santander Poland"
    }, {
        "identifier": "BNPParibas",
        "tradeMethodName": "BNP Paribas"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "BankPekao",
        "tradeMethodName": "Bank Pekao"
    }, {
        "identifier": "ING",
        "tradeMethodName": "ING"
    }, {
        "identifier": "CreditAgricole",
        "tradeMethodName": "Credit Agricole"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "mBank",
        "tradeMethodName": "mBank"
    }, {
        "identifier": "AliorBank",
        "tradeMethodName": "Alior Bank"
    }, {
        "identifier": "GetinNobleBank",
        "tradeMethodName": "VeloBank"
    }, {
        "identifier": "BGZBNPparibas",
        "tradeMethodName": "BGZ BNP Paribas"
    }, {
        "identifier": "CitiHandlowy",
        "tradeMethodName": "Citi Handlowy"
    }, {
        "identifier": "BankPocztowy",
        "tradeMethodName": "Bank Pocztowy"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "BosBank",
        "tradeMethodName": "BOS Bank"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "Monobank",
        "tradeMethodName": "Monobank"
    }]
},
    {
    "fullName": "\tParaguayan Guarani",
    "shortName": "PYG",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BancoFamiliarNew",
        "tradeMethodName": "Banco Familiar"
    }, {
        "identifier": "VisionBanco",
        "tradeMethodName": "Vision Banco"
    }, {
        "identifier": "BancoItauParaguay",
        "tradeMethodName": "Banco Itau Paraguay"
    }, {
        "identifier": "TigoMoney",
        "tradeMethodName": "Tigo Money"
    }, {
        "identifier": "BancoAtlas",
        "tradeMethodName": "Banco Atlas"
    }, {
        "identifier": "BancoContinentalPar",
        "tradeMethodName": "Banco Continental Paraguay"
    }, {
        "identifier": "BancoBasa",
        "tradeMethodName": "Banco Basa"
    }, {
        "identifier": "BancoGNBParaguay",
        "tradeMethodName": "Banco GNB Paraguay"
    }, {
        "identifier": "FinancieraSolar",
        "tradeMethodName": "Financiera Solar"
    }, {
        "identifier": "InferfisaBanco",
        "tradeMethodName": "Interfisa Banco"
    }, {
        "identifier": "BilleteraPersonal",
        "tradeMethodName": "Billetera Personal"
    }, {
        "identifier": "BancoRio",
        "tradeMethodName": "Banco Rio"
    }, {
        "identifier": "BancoRegional",
        "tradeMethodName": "Banco Regional"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "WallyTech",
        "tradeMethodName": "Wally Tech"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "PagoMovil",
        "tradeMethodName": "Pago Movil"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Qatari Rial",
    "shortName": "QAR",
    "tradeMethods": [{
        "identifier": "QatarNationalBank",
        "tradeMethodName": "Qatar National Bank QNB"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "QIB",
        "tradeMethodName": "Qatar Islamic Bank QIB"
    }, {
        "identifier": "MPay",
        "tradeMethodName": "M Pay"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "CBPay",
        "tradeMethodName": "CB Pay"
    }, {
        "identifier": "COMMERCIALBANKKZT",
        "tradeMethodName": "Коммерческий банк КЫРГЫЗСТАН"
    }, {
        "identifier": "OMoney",
        "tradeMethodName": "O!Money"
    }, {
        "identifier": "QNB",
        "tradeMethodName": "QNB"
    }, {
        "identifier": "QIIB",
        "tradeMethodName": "Qatar International Islamic Bank QIIB"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "DohaBank",
        "tradeMethodName": "Doha Bank"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "CashU",
        "tradeMethodName": "CashU"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Vodafonecash",
        "tradeMethodName": "Vodafone cash"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "WhishMONEY",
        "tradeMethodName": "whish MONEY"
    }]
},
    {
    "fullName": "Romanian Leu",
    "shortName": "RON",
    "tradeMethods": [{
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "BankTransilvania",
        "tradeMethodName": "Bank Transilvania"
    }, {
        "identifier": "ING",
        "tradeMethodName": "ING"
    }, {
        "identifier": "BCRBank",
        "tradeMethodName": "BCR Bank"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "BRDBank",
        "tradeMethodName": "BRD Bank"
    }, {
        "identifier": "BANKTRANSFERRON",
        "tradeMethodName": "Bank Transfer (Romania)"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CEC",
        "tradeMethodName": "CEC"
    }, {
        "identifier": "UniCreditRussia",
        "tradeMethodName": "ЮниКредит"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "UniCreditEU",
        "tradeMethodName": "UniCredit"
    }, {
        "identifier": "BCAMobile",
        "tradeMethodName": "BCA"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "Garanti",
        "tradeMethodName": "Garanti"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "MandiriPay",
        "tradeMethodName": "Mandiri Pay"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "Paysera",
        "tradeMethodName": "Paysera"
    }, {
        "identifier": "PermataMe",
        "tradeMethodName": "Permata Me"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "WingMoney",
        "tradeMethodName": "Wing Money"
    }, {
        "identifier": "stcpay",
        "tradeMethodName": "stc pay"
    }]
},
    {
    "fullName": "Serbian Dinar",
    "shortName": "RSD",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "UniCreditEU",
        "tradeMethodName": "UniCredit"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "ErsteBank",
        "tradeMethodName": "Erste Bank"
    }, {
        "identifier": "RaiffeisenBankAval",
        "tradeMethodName": "Raiffeisen Bank Aval"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
    },
    {
    "fullName": "Rwanda Franc",
    "shortName": "RWF",
    "tradeMethods": [{
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "EquityBank",
        "tradeMethodName": "Equity Bank"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "AccessBank",
        "tradeMethodName": "Access Bank"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "MPesaKenya",
        "tradeMethodName": "M-PESA Kenya (Safaricom)"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "MpesaVodaphone",
        "tradeMethodName": "M-pesa (Vodafone)"
    }, {
        "identifier": "Spenn",
        "tradeMethodName": "Spenn"
    }, {
        "identifier": "Inecobank",
        "tradeMethodName": "Inecobank"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "FNBewallet",
        "tradeMethodName": "FNB-ewallet"
    }, {
        "identifier": "FreedomBank",
        "tradeMethodName": "Freedom Bank"
    }, {
        "identifier": "GTBank",
        "tradeMethodName": "GTBank"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "WorldRemit",
        "tradeMethodName": "WorldRemit"
    }]
},
    {
    "fullName": "Saudi Riyal",
    "shortName": "SAR",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "stcpay",
        "tradeMethodName": "stc pay"
    }, {
        "identifier": "AlRajhiBank",
        "tradeMethodName": "Al Rajhi Bank"
    }, {
        "identifier": "urpay",
        "tradeMethodName": "urpay"
    }, {
        "identifier": "SaudiNationalBank",
        "tradeMethodName": "Saudi National Bank (AlAhli Bank)"
    }, {
        "identifier": "AlinmaBank",
        "tradeMethodName": "Alinma Bank"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "RiyadBank",
        "tradeMethodName": "Riyad Bank"
    }, {
        "identifier": "SABB",
        "tradeMethodName": "The Saudi British Bank (SABB)"
    }, {
        "identifier": "Ahlibank",
        "tradeMethodName": "Ahlibank"
    }, {
        "identifier": "ArabBank",
        "tradeMethodName": "Arab Bank"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "LivKSA",
        "tradeMethodName": "Liv. KSA"
    }, {
        "identifier": "EmiratesNBD",
        "tradeMethodName": "Emirates NBD"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "GulfBank",
        "tradeMethodName": "Gulf Bank (K.S.C) (GBK)"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "CashInPerson",
        "tradeMethodName": "Наличный расчет"
    }, {
        "identifier": "CashU",
        "tradeMethodName": "CashU"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Pyypl",
        "tradeMethodName": "Pyypl"
    }, {
        "identifier": "RBCRoyalbank",
        "tradeMethodName": "RBC Royal Bank"
    }, {
        "identifier": "TradeandDeveloBank",
        "tradeMethodName": "Trade and Development Bank"
    }, {
        "identifier": "BancoDeBolivia",
        "tradeMethodName": "Banco Nacional de Bolivia"
    }, {
        "identifier": "BankTransferVietnam",
        "tradeMethodName": "Bank Transfer (Vietnam)"
    }, {
        "identifier": "BankofKhartoum",
        "tradeMethodName": "Bank of Khartoum"
    }, {
        "identifier": "CashPack",
        "tradeMethodName": "Cashpack"
    }, {
        "identifier": "GPay",
        "tradeMethodName": "Google Pay (GPay)"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "KuveytTurk",
        "tradeMethodName": "Kuveyt Turk"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "Paytm",
        "tradeMethodName": "Paytm"
    }, {
        "identifier": "PhonePe",
        "tradeMethodName": "PhonePe"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "TDbank",
        "tradeMethodName": "TD Bank"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "Vodafonecash",
        "tradeMethodName": "Vodafone cash"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }]
},
    {
    "fullName": "Seychelles Rupee",
    "shortName": "SCR",
    "tradeMethods": []
},
    {
    "fullName": "Sudanese Pound",
    "shortName": "SDG",
    "tradeMethods": [{
        "identifier": "BankofKhartoum",
        "tradeMethodName": "Bank of Khartoum"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }]
},
    {
    "fullName": "Swedish Krona",
    "shortName": "SEK",
    "tradeMethods": [{
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "ABA",
        "tradeMethodName": "ABA"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "BankTransferCambodia",
        "tradeMethodName": "Bank Transfer (Cambodia)"
    }, {
        "identifier": "Swish",
        "tradeMethodName": "Swish"
    }]
},
    {
    "fullName": "Leone",
    "shortName": "SLL",
    "tradeMethods": [{
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "OrangeMoneySL",
        "tradeMethodName": "Orange Money - Sierra Leone"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Afrimoney",
        "tradeMethodName": "Afrimoney - Sierra Leone"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "UnitedBankLimited",
        "tradeMethodName": "United Bank Limited"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ezipay",
        "tradeMethodName": "EziPay"
    }]
},
    {
    "fullName": "Somali Shilling",
    "shortName": "SOS",
    "tradeMethods": []
},
    {
    "fullName": "Thai Baht",
    "shortName": "THB",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "TrueMoney",
        "tradeMethodName": "True Money"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "LINEPay",
        "tradeMethodName": "LINE Pay"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Boleto",
        "tradeMethodName": "Bank slip"
    }, {
        "identifier": "BankTaiwan",
        "tradeMethodName": "Bank Transfer (Taiwan)"
    }, {
        "identifier": "SWIFT",
        "tradeMethodName": "Международный перевод (SWIFT)"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "BCEL",
        "tradeMethodName": "BCEL"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ABA",
        "tradeMethodName": "ABA"
    }, {
        "identifier": "BankTransferLaos",
        "tradeMethodName": "Bank Transfer (Laos)"
    }, {
        "identifier": "BankTransferMena",
        "tradeMethodName": "Bank Transfer (Middle East)"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }]
},
    {
    "fullName": "Somoni",
    "shortName": "TJS",
    "tradeMethods": [{
        "identifier": "DCbank",
        "tradeMethodName": "Душанбе Сити Банк"
    }, {
        "identifier": "AlifBank",
        "tradeMethodName": "Алиф Банк"
    }, {
        "identifier": "SpitamenBank",
        "tradeMethodName": "Спитамен Банк"
    }, {
        "identifier": "BankEskhata",
        "tradeMethodName": "Банк Эсхата"
    }, {
        "identifier": "BankofTajikistan",
        "tradeMethodName": "Международный Банк Таджикистана"
    }, {
        "identifier": "Kortimilli",
        "tradeMethodName": "Корти милли"
    }, {
        "identifier": "Orienbank",
        "tradeMethodName": "Ориёнбанк"
    }, {
        "identifier": "Humo",
        "tradeMethodName": "Humo"
    }, {
        "identifier": "Amonatbonk",
        "tradeMethodName": "Амонатбонк"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "Venmo",
        "tradeMethodName": "Venmo"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "Ziraat",
        "tradeMethodName": "Ziraat"
    }]
},
    {
    "fullName": "Turkmenistani Manat",
    "shortName": "TMT",
    "tradeMethods": [{
        "identifier": "AlifBank",
        "tradeMethodName": "Алиф Банк"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Tunisian Dinar",
    "shortName": "TND",
    "tradeMethods": [{
        "identifier": "Postepay",
        "tradeMethodName": "Postepay"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "AttijariBank",
        "tradeMethodName": "Attijari Bank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BanqueZitouna",
        "tradeMethodName": "Banque Zitouna"
    }, {
        "identifier": "AIBT",
        "tradeMethodName": "Arab International Bank of Tunisia"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }]
},
    {
    "fullName": "Turkish Lira",
    "shortName": "TRY",
    "tradeMethods": [{
        "identifier": "Ziraat",
        "tradeMethodName": "Ziraat"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Garanti",
        "tradeMethodName": "Garanti"
    }, {
        "identifier": "DenizBank",
        "tradeMethodName": "Denizbank"
    }, {
        "identifier": "VakifBank",
        "tradeMethodName": "VakifBank"
    }, {
        "identifier": "KuveytTurk",
        "tradeMethodName": "Kuveyt Turk"
    }, {
        "identifier": "Papara",
        "tradeMethodName": "Papara"
    }, {
        "identifier": "QNB",
        "tradeMethodName": "QNB"
    }, {
        "identifier": "ISBANK",
        "tradeMethodName": "İŞBANK"
    }, {
        "identifier": "Akbank",
        "tradeMethodName": "Akbank"
    }, {
        "identifier": "Oldubil",
        "tradeMethodName": "OLDUBIL"
    }, {
        "identifier": "BanktransferTurkey",
        "tradeMethodName": "Bank Transfer (Turkey)"
    }, {
        "identifier": "Ozan",
        "tradeMethodName": "Ozan"
    }, {
        "identifier": "alBaraka",
        "tradeMethodName": "alBaraka"
    }, {
        "identifier": "HALKBANK",
        "tradeMethodName": "Халкбанк"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "TurkiyeFinansBank",
        "tradeMethodName": "Turkiye Finans Participation Bank"
    }, {
        "identifier": "Fibabanka",
        "tradeMethodName": "Fibabanka"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ING",
        "tradeMethodName": "ING"
    }, {
        "identifier": "BAKAIBANK",
        "tradeMethodName": "Бакай Банк"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "KaspiBank",
        "tradeMethodName": "Kaspi Bank"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "BurganBank",
        "tradeMethodName": "Burgan Bank (K.S.C) (Burgan)"
    }, {
        "identifier": "FasterPayments",
        "tradeMethodName": "Faster Payments"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "QatarNationalBank",
        "tradeMethodName": "Qatar National Bank QNB"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }]
},
    {
    "fullName": "Trinidad and Tobago Dollar",
    "shortName": "TTD",
    "tradeMethods": [{
        "identifier": "Zinli",
        "tradeMethodName": "Zinli"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "PayID",
        "tradeMethodName": "PayID"
    }]
},
    {
    "fullName": "New Taiwan Dollar",
    "shortName": "TWD",
    "tradeMethods": [{
        "identifier": "BankTaiwan",
        "tradeMethodName": "Bank Transfer (Taiwan)"
    }, {
        "identifier": "jkopay",
        "tradeMethodName": "JKO Transfer"
    }, {
        "identifier": "LINEPay",
        "tradeMethodName": "LINE Pay"
    }, {
        "identifier": "LINEBANK",
        "tradeMethodName": "LINE Bank"
    }, {
        "identifier": "PostBankNew",
        "tradeMethodName": "Почта Банк"
    }, {
        "identifier": "Cash",
        "tradeMethodName": "Cash"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "EasyPay",
        "tradeMethodName": "EasyPay"
    }, {
        "identifier": "7Eleven",
        "tradeMethodName": "7-Eleven"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }]
},
    {
    "fullName": "Tanzanian Shilling",
    "shortName": "TZS",
    "tradeMethods": [{
        "identifier": "MpesaVodaphone",
        "tradeMethodName": "M-pesa (Vodafone)"
    }, {
        "identifier": "TigoPesa",
        "tradeMethodName": "Tigo Pesa"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "MpesaPaybill",
        "tradeMethodName": "M-pesa Paybill"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "MPesaKenya",
        "tradeMethodName": "M-PESA Kenya (Safaricom)"
    }, {
        "identifier": "TigoMoney",
        "tradeMethodName": "Tigo Money"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "EquityBank",
        "tradeMethodName": "Equity Bank"
    }, {
        "identifier": "MPay",
        "tradeMethodName": "M Pay"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Ukrainian Hryvnia",
    "shortName": "UAH",
    "tradeMethods": [{
        "identifier": "Monobank",
        "tradeMethodName": "Monobank"
    }, {
        "identifier": "PrivatBank",
        "tradeMethodName": "ПриватБанк (Универсальная)"
    }, {
        "identifier": "ABank",
        "tradeMethodName": "A-Bank"
    }, {
        "identifier": "PUMBBank",
        "tradeMethodName": "PUMB"
    }, {
        "identifier": "izibank",
        "tradeMethodName": "Izibank"
    }, {
        "identifier": "Sportbank",
        "tradeMethodName": "Sportbank"
    }, {
        "identifier": "SenseSuperApp",
        "tradeMethodName": "Sense SuperApp"
    }, {
        "identifier": "Oschadbank",
        "tradeMethodName": "Ощадбанк"
    }, {
        "identifier": "RaiffeisenBankAval",
        "tradeMethodName": "Raiffeisen Bank Aval"
    }, {
        "identifier": "BankVlasnyiRakhunok",
        "tradeMethodName": "Bank Vlasnyi Rakhunok"
    }, {
        "identifier": "Ukrsibbank",
        "tradeMethodName": "Ukrsibbank"
    }, {
        "identifier": "OTPBankNew",
        "tradeMethodName": "OTP BANK"
    }, {
        "identifier": "CreditAgricole",
        "tradeMethodName": "Credit Agricole"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "Ukrgasbank",
        "tradeMethodName": "Ukrgasbank"
    }, {
        "identifier": "KredoBank",
        "tradeMethodName": "KredoBank"
    }, {
        "identifier": "IdeaBank",
        "tradeMethodName": "Idea Bank"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "NEO",
        "tradeMethodName": "NEO"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BankPivdenny",
        "tradeMethodName": "Bank Pivdenny"
    }, {
        "identifier": "AccordBank",
        "tradeMethodName": "Accordbank"
    }, {
        "identifier": "PravexBank",
        "tradeMethodName": "Pravex Bank"
    }, {
        "identifier": "Ukreximbank",
        "tradeMethodName": "Ukreximbank"
    }, {
        "identifier": "CREDOBANK",
        "tradeMethodName": "Credo Bank"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "Tascombank",
        "tradeMethodName": "Tascombank"
    }, {
        "identifier": "BankCreditDnipro",
        "tradeMethodName": "Bank Credit Dnipro"
    }, {
        "identifier": "SEPA",
        "tradeMethodName": "Банковский перевод SEPA (EU)"
    }, {
        "identifier": "BankVostok",
        "tradeMethodName": "Bank Vostok"
    }, {
        "identifier": "SEPAinstant",
        "tradeMethodName": "SEPA Instant"
    }, {
        "identifier": "ForwardBank",
        "tradeMethodName": "Forward Bank"
    }, {
        "identifier": "GEOPay",
        "tradeMethodName": "GEO Pay"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "ProcreditBank",
        "tradeMethodName": "ProCredit Bank"
    }, {
        "identifier": "UnexBank",
        "tradeMethodName": "Unex Bank"
    }, {
        "identifier": "MTBank",
        "tradeMethodName": "МТБанк"
    }, {
        "identifier": "ZEN",
        "tradeMethodName": "ZEN"
    }, {
        "identifier": "AliorBank",
        "tradeMethodName": "Alior Bank"
    }, {
        "identifier": "Blik",
        "tradeMethodName": "Blik"
    }, {
        "identifier": "CystalBank",
        "tradeMethodName": "Crystalbank"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "Monzo",
        "tradeMethodName": "Monzo"
    }, {
        "identifier": "UniCreditEU",
        "tradeMethodName": "UniCredit"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }]
},
    {
    "fullName": "Uganda Shilling",
    "shortName": "UGX",
    "tradeMethods": [{
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "EquityBank",
        "tradeMethodName": "Equity Bank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "MPesaKenya",
        "tradeMethodName": "M-PESA Kenya (Safaricom)"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "StanbicBank",
        "tradeMethodName": "Stanbic Bank"
    }, {
        "identifier": "MpesaPaybill",
        "tradeMethodName": "M-pesa Paybill"
    }, {
        "identifier": "MpesaVodaphone",
        "tradeMethodName": "M-pesa (Vodafone)"
    }, {
        "identifier": "Inecobank",
        "tradeMethodName": "Inecobank"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "MoneyGram",
        "tradeMethodName": "Moneygram"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "TeleBirr",
        "tradeMethodName": "Tele Birr"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }]
},
    {
    "fullName": "Uruguayan Peso",
    "shortName": "UYU",
    "tradeMethods": [{
        "identifier": "Prex",
        "tradeMethodName": "Prex"
    }, {
        "identifier": "ItauUruguay",
        "tradeMethodName": "Itaú Uruguay"
    }, {
        "identifier": "BankRepublicUruguay",
        "tradeMethodName": "Bank of the Republic of Uruguay"
    }, {
        "identifier": "RedPagos",
        "tradeMethodName": "Red Pagos"
    }, {
        "identifier": "SantanderUrug",
        "tradeMethodName": "Banco Santander Uruguay"
    }, {
        "identifier": "OcaBlue",
        "tradeMethodName": "OCA Blue"
    }, {
        "identifier": "ScotiabankUruguay",
        "tradeMethodName": "Scotiabank Uruguay"
    }, {
        "identifier": "BBVAUruguay",
        "tradeMethodName": "BBVA Uruguay"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "MercadoPagoNew",
        "tradeMethodName": "Mercadopago"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "CentralBankofUruguay",
        "tradeMethodName": "Central Bank of Uruguay"
    }, {
        "identifier": "HSBCuruguay",
        "tradeMethodName": "HSBC Uruguay"
    }]
},
    {
    "fullName": "Uzbekistan Sum",
    "shortName": "UZS",
    "tradeMethods": [{
        "identifier": "Humo",
        "tradeMethodName": "Humo"
    }, {
        "identifier": "Uzcard",
        "tradeMethodName": "Uzcard"
    }, {
        "identifier": "Anorbank",
        "tradeMethodName": "Anorbank"
    }, {
        "identifier": "IpakYuliBank",
        "tradeMethodName": "Ipak Yuli Bank"
    }, {
        "identifier": "Kapitalbank",
        "tradeMethodName": "Капиталбанк"
    }, {
        "identifier": "AloqaBank",
        "tradeMethodName": "Алокабанк"
    }, {
        "identifier": "Hamkorbank",
        "tradeMethodName": "Hamkorbank"
    }, {
        "identifier": "Unired",
        "tradeMethodName": "Unired"
    }, {
        "identifier": "TengeBank",
        "tradeMethodName": "Tenge Bank"
    }, {
        "identifier": "Apelsin",
        "tradeMethodName": "Apelsin"
    }, {
        "identifier": "TBCbank",
        "tradeMethodName": "TBC Bank"
    }, {
        "identifier": "OSON",
        "tradeMethodName": "OSON"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "Payme",
        "tradeMethodName": "Payme.io"
    }, {
        "identifier": "AsakaBank",
        "tradeMethodName": "Асака Банк"
    }, {
        "identifier": "AsiaAllianceBank",
        "tradeMethodName": "Asia Alliance Bank"
    }, {
        "identifier": "InfinBank",
        "tradeMethodName": "InfinBank"
    }, {
        "identifier": "UzbekNationalBank",
        "tradeMethodName": "Узнацбанк"
    }, {
        "identifier": "CLICK",
        "tradeMethodName": "CliQ"
    }, {
        "identifier": "AgroBank",
        "tradeMethodName": "Агробанк"
    }, {
        "identifier": "Paysend",
        "tradeMethodName": "Paysend.com"
    }, {
        "identifier": "QIWI",
        "tradeMethodName": "QIWI"
    }, {
        "identifier": "Humans",
        "tradeMethodName": "Humans"
    }, {
        "identifier": "RaiffeisenBank",
        "tradeMethodName": "Райффайзенбанк"
    }, {
        "identifier": "RussianStandardBank",
        "tradeMethodName": "Русский Стандарт"
    }, {
        "identifier": "SalamPay",
        "tradeMethodName": "SalamPay"
    }, {
        "identifier": "XalqBank",
        "tradeMethodName": "Народный Банк (Узбекистан)"
    }, {
        "identifier": "TrastBank",
        "tradeMethodName": "TrastBank"
    }, {
        "identifier": "Uzpromstroybank",
        "tradeMethodName": "SQB Bank"
    }, {
        "identifier": "Mobiletopup",
        "tradeMethodName": "Пополнение баланса мобильного телефона"
    }, {
        "identifier": "PayGram",
        "tradeMethodName": "PayGram"
    }, {
        "identifier": "TrustBankRussia",
        "tradeMethodName": "Траст"
    }, {
        "identifier": "AlifBank",
        "tradeMethodName": "Алиф Банк"
    }, {
        "identifier": "AsiaUnitedBank",
        "tradeMethodName": "Asia United Bank"
    }, {
        "identifier": "DCbank",
        "tradeMethodName": "Душанбе Сити Банк"
    }, {
        "identifier": "HalykBank",
        "tradeMethodName": "Halyk Bank"
    }, {
        "identifier": "IpotekaBank",
        "tradeMethodName": "Ипотека Банк"
    }, {
        "identifier": "MKBBank",
        "tradeMethodName": "MKB Bank"
    }, {
        "identifier": "Paynet",
        "tradeMethodName": "Paynet"
    }, {
        "identifier": "SpitamenBank",
        "tradeMethodName": "Спитамен Банк"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }]
},
    {
    "fullName": "Venezuelan bolivar",
    "shortName": "VES",
    "tradeMethods": [{
        "identifier": "Banesco",
        "tradeMethodName": "Banesco"
    }, {
        "identifier": "PagoMovil",
        "tradeMethodName": "Pago Movil"
    }, {
        "identifier": "Mercantil",
        "tradeMethodName": "Mercantil"
    }, {
        "identifier": "Provincial",
        "tradeMethodName": "Provincial"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BNCBancoNacional",
        "tradeMethodName": "BNC Banco Nacional de Crédito"
    }, {
        "identifier": "Bancamiga",
        "tradeMethodName": "Bancamiga"
    }, {
        "identifier": "BBVABank",
        "tradeMethodName": "BBVA"
    }, {
        "identifier": "Bancaribe",
        "tradeMethodName": "Bancaribe"
    }, {
        "identifier": "Banplus",
        "tradeMethodName": "Banplus"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }, {
        "identifier": "BancoActivo",
        "tradeMethodName": "Banco Activo"
    }, {
        "identifier": "UbiiPagos",
        "tradeMethodName": "Ubii Pagos"
    }, {
        "identifier": "Cash",
        "tradeMethodName": "Cash"
    }, {
        "identifier": "BancoPlaza",
        "tradeMethodName": "Banco Plaza"
    }, {
        "identifier": "Zinli",
        "tradeMethodName": "Zinli"
    }, {
        "identifier": "BancolombiaSA",
        "tradeMethodName": "Bancolombia S.A"
    }, {
        "identifier": "BankBrazil",
        "tradeMethodName": "Банковский перевод (Бразилия)"
    }, {
        "identifier": "BankTransferCambodia",
        "tradeMethodName": "Bank Transfer (Cambodia)"
    }]
},
    {
    "fullName": "Zimbabwe Dollar",
    "shortName": "ZWD",
    "tradeMethods": []
},
    {
    "fullName": "Vietnamese Dong",
    "shortName": "VND",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "BankTransferVietnam",
        "tradeMethodName": "Bank Transfer (Vietnam)"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "ViettelMoney",
        "tradeMethodName": "Viettel Money"
    }, {
        "identifier": "ZaloPayNew",
        "tradeMethodName": "ZaloPay"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "ShopeePay",
        "tradeMethodName": "ShopeePay-SEA"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "VNpay",
        "tradeMethodName": "VNPAY"
    }, {
        "identifier": "VNPTpay",
        "tradeMethodName": "VNPT Money"
    }, {
        "identifier": "CAKE",
        "tradeMethodName": "CAKE"
    }, {
        "identifier": "SmartPay",
        "tradeMethodName": "SmartPay"
    }, {
        "identifier": "FoxPay",
        "tradeMethodName": "Foxpay"
    }, {
        "identifier": "VinID",
        "tradeMethodName": "VinID"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }, {
        "identifier": "CashPack",
        "tradeMethodName": "Cashpack"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "EasypaisaPK",
        "tradeMethodName": "Easypaisa-PK Only"
    }, {
        "identifier": "MeezanBank",
        "tradeMethodName": "Meezan Bank"
    }, {
        "identifier": "MpesaVodaphone",
        "tradeMethodName": "M-pesa (Vodafone)"
    }, {
        "identifier": "OKSO",
        "tradeMethodName": "OSKO"
    }, {
        "identifier": "Raast",
        "tradeMethodName": "Raast"
    }]
},
    {
    "fullName": "CFA Franc BEAC",
    "shortName": "XAF",
    "tradeMethods": [{
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "MoovMoney",
        "tradeMethodName": "Moov Money"
    }, {
        "identifier": "AfrilandFirstBank",
        "tradeMethodName": "Afriland First Bank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "BGFIBank",
        "tradeMethodName": "BGFIBank"
    }, {
        "identifier": "Cashapp",
        "tradeMethodName": "Cash app"
    }, {
        "identifier": "Payeer",
        "tradeMethodName": "Payeer"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Zelle",
        "tradeMethodName": "Zelle"
    }]
},
    {
    "fullName": "CFA Franc BCEAO",
    "shortName": "XOF",
    "tradeMethods": [{
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }, {
        "identifier": "MoovMoney",
        "tradeMethodName": "Moov Money"
    }, {
        "identifier": "Ecobank",
        "tradeMethodName": "Ecobank"
    }, {
        "identifier": "Inecobank",
        "tradeMethodName": "Inecobank"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "TMoney",
        "tradeMethodName": "TMoney"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "FreeMoney",
        "tradeMethodName": "Free Money"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "Vodafonecash",
        "tradeMethodName": "Vodafone cash"
    }, {
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "AccessBank",
        "tradeMethodName": "Access Bank"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "MoMoNew",
        "tradeMethodName": "MoMo"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "WavePay1",
        "tradeMethodName": "WavePay"
    }]
},
    {
    "fullName": "Yemeni Rial",
    "shortName": "YER",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "YemenCommercialBank",
        "tradeMethodName": "Yemen Commercial Bank"
    }, {
        "identifier": "NationalBankYemen",
        "tradeMethodName": "National Bank of Yemen"
    }, {
        "identifier": "TransBank",
        "tradeMethodName": "Trans Bank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }]
},
    {
    "fullName": "Rand",
    "shortName": "ZAR",
    "tradeMethods": [{
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "CapitecBank",
        "tradeMethodName": "Capitec Bank"
    }, {
        "identifier": "FNBewallet",
        "tradeMethodName": "FNB-ewallet"
    }, {
        "identifier": "Nedbank",
        "tradeMethodName": "Nedbank"
    }, {
        "identifier": "CashDeposit",
        "tradeMethodName": "Внесение наличных на счет (Кэш ин)"
    }, {
        "identifier": "SpecificBank",
        "tradeMethodName": "Переводы в конкретном банке"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "Chippercash",
        "tradeMethodName": "Chipper Cash"
    }, {
        "identifier": "WesternUnion",
        "tradeMethodName": "Western Union"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "StanbicBank",
        "tradeMethodName": "Stanbic Bank"
    }, {
        "identifier": "WaveMobile",
        "tradeMethodName": "Wave Mobile Money"
    }, {
        "identifier": "ALIPAY",
        "tradeMethodName": "Alipay"
    }, {
        "identifier": "BankIndia",
        "tradeMethodName": "Банковский перевод (Индия)"
    }, {
        "identifier": "Bundle",
        "tradeMethodName": "Bundle"
    }, {
        "identifier": "FPS",
        "tradeMethodName": "Instant Transfer"
    }, {
        "identifier": "FreedomBank",
        "tradeMethodName": "Freedom Bank"
    }, {
        "identifier": "IMPS",
        "tradeMethodName": "IMPS"
    }, {
        "identifier": "OrangeMoney",
        "tradeMethodName": "Orange Money - OM"
    }, {
        "identifier": "PerfectMoney",
        "tradeMethodName": "Perfect Money"
    }, {
        "identifier": "Revolut",
        "tradeMethodName": "Revolut"
    }, {
        "identifier": "SkrillMoneybookers",
        "tradeMethodName": "Skrill (Moneybookers)"
    }, {
        "identifier": "UPI",
        "tradeMethodName": "UPI"
    }, {
        "identifier": "WECHAT",
        "tradeMethodName": "WeChat"
    }, {
        "identifier": "Wise",
        "tradeMethodName": "Wise"
    }]
},
    {
    "fullName": "Zambian Kwacha",
    "shortName": "ZMW",
    "tradeMethods": [{
        "identifier": "airtelmoney",
        "tradeMethodName": "Airtel Money"
    }, {
        "identifier": "MTNMobileMoney",
        "tradeMethodName": "MTN Mobile Money"
    }, {
        "identifier": "FNBewallet",
        "tradeMethodName": "FNB-ewallet"
    }, {
        "identifier": "BANK",
        "tradeMethodName": "Банковский перевод"
    }, {
        "identifier": "StandardChartered",
        "tradeMethodName": "Standard Chartered Bank"
    }, {
        "identifier": "Advcash",
        "tradeMethodName": "AdvCash"
    }, {
        "identifier": "AirTM",
        "tradeMethodName": "AirTM"
    }]
}
]

export const currenciesList = CURRENCIES.map(item => {
        return {
            id: item.shortName,
            label: `${item.fullName} (${item.shortName})`,
            tradeMethods: item.tradeMethods
        }
    });

export const getPaymentMethods = () => {
    let result = {}

    currenciesList.forEach(item => {
        result[item.id] = item.tradeMethods.map(method => {
            return {
                id: method.identifier,
                label: method.tradeMethodName,
            }
        })
    })

    return result
}

export const getOptionLabel = (option) => {
    return option.label
}

export function getRequest(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Fetch error:', error);
            throw error;
        });
}

export const postRequest = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("POST request error:", error);
        throw error;
    }
};
