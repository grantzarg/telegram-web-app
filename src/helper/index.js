import {useMemo} from "react";

export const CURRENCIES = [
    {
        "fullName": "Доллар США",
        "shortName": "USD",
        "tradeMethods": [
            {
                "identifier": "Wise",
                "tradeMethodName": "Wise"
            },
            {
                "identifier": "Zelle",
                "tradeMethodName": "Zelle"
            },
            {
                "identifier": "AirTM",
                "tradeMethodName": "AirTM"
            },
            {
                "identifier": "PerfectMoney",
                "tradeMethodName": "Perfect Money"
            },
            {
                "identifier": "SkrillMoneybookers",
                "tradeMethodName": "Skrill (Moneybookers)"
            },
            {
                "identifier": "Payeer",
                "tradeMethodName": "Payeer"
            },
            {
                "identifier": "Advcash",
                "tradeMethodName": "AdvCash"
            },
            {
                "identifier": "Revolut",
                "tradeMethodName": "Revolut"
            },
            {
                "identifier": "Pyypl",
                "tradeMethodName": "Pyypl"
            },
            {
                "identifier": "NETELLER",
                "tradeMethodName": "Neteller"
            },
            {
                "identifier": "TBCbank",
                "tradeMethodName": "TBC Bank"
            },
            {
                "identifier": "BankofGeorgia",
                "tradeMethodName": "Bank of Georgia"
            },
            {
                "identifier": "Prex",
                "tradeMethodName": "Prex"
            },
            {
                "identifier": "ZEN",
                "tradeMethodName": "ZEN"
            }
        ]
    },
    {
        "fullName": "Евро",
        "shortName": "EUR",
        "tradeMethods": [
            {
                "identifier": "Wise",
                "tradeMethodName": "Wise"
            },
            {
                "identifier": "Revolut",
                "tradeMethodName": "Revolut"
            },
            {
                "identifier": "N26",
                "tradeMethodName": "N26"
            },
            {
                "identifier": "ZEN",
                "tradeMethodName": "ZEN"
            }
        ]
    },
    {
        "fullName": "Грузинский лари",
        "shortName": "GEL",
        "tradeMethods": [
            {
                "identifier": "TBCbank",
                "tradeMethodName": "TBC Bank"
            },
            {
                "identifier": "BankofGeorgia",
                "tradeMethodName": "Bank of Georgia"
            }
        ]
    },
    {
        "fullName": "Российский рубль",
        "shortName": "RUB",
        "tradeMethods": [
            {
                "identifier": "RaiffeisenBank",
                "tradeMethodName": "Райффайзенбанк"
            },
            {
                "identifier": "RussianStandardBank",
                "tradeMethodName": "Русский Стандарт"
            },
            {
                "identifier": "PostBankNew",
                "tradeMethodName": "Почта Банк"
            },
            {
                "identifier": "QIWI",
                "tradeMethodName": "QIWI"
            },
            {
                "identifier": "HomeCreditBank",
                "tradeMethodName": "Хоум Кредит Банк (Россия)"
            },
            {
                "identifier": "CitibankRussia",
                "tradeMethodName": "Ситибанк"
            },
            {
                "identifier": "AkBarsBank",
                "tradeMethodName": "Ак Барс Банк"
            },
            {
                "identifier": "RenaissanceCredit",
                "tradeMethodName": "Ренессанс Кредит Банк"
            },
            {
                "identifier": "BCSBank",
                "tradeMethodName": "БКС Банк"
            },
            {
                "identifier": "Advcash",
                "tradeMethodName": "AdvCash"
            },
            {
                "identifier": "Payeer",
                "tradeMethodName": "Payeer"
            }
        ]
    },
    {
        "fullName": "Армяский драм",
        "shortName": "AMD",
        "tradeMethods": [
            {
                "identifier": "IDBank",
                "tradeMethodName": "IDBank"
            },
            {
                "identifier": "Inecobank",
                "tradeMethodName": "Inecobank"
            },
            {
                "identifier": "Ameriabank",
                "tradeMethodName": "Ameriabank"
            },
            {
                "identifier": "Idram",
                "tradeMethodName": "Idram"
            },
            {
                "identifier": "Ardshinbank",
                "tradeMethodName": "Ardshinbank"
            },
            {
                "identifier": "ACBAbank",
                "tradeMethodName": "ACBA Bank"
            },
            {
                "identifier": "UNIBANK",
                "tradeMethodName": "Unibank"
            },
            {
                "identifier": "BANK",
                "tradeMethodName": "Банковский перевод"
            }
        ]
    },
    {
        "fullName": "Белорусский рубль",
        "shortName": "BYN",
        "tradeMethods": [
            {
                "identifier": "BANK",
                "tradeMethodName": "Банковский перевод"
            },
            {
                "identifier": "ABank",
                "tradeMethodName": "A-Bank"
            },
            {
                "identifier": "MTBank",
                "tradeMethodName": "МТБанк"
            },
            {
                "identifier": "PriorBank",
                "tradeMethodName": "Приорбанк"
            },
            {
                "identifier": "ParitetBank",
                "tradeMethodName": "Паритетбанк"
            }
        ]
    },
    {
        "fullName": "Дирхам ОАЭ",
        "shortName": "AED",
        "tradeMethods": [
            {
                "identifier": "BANK",
                "tradeMethodName": "Банковский перевод"
            },
            {
                "identifier": "EmiratesNBD",
                "tradeMethodName": "Emirates NBD"
            },
            {
                "identifier": "ADCB",
                "tradeMethodName": "Abu Dhabi Commercial Bank ADCB"
            },
            {
                "identifier": "ADIB",
                "tradeMethodName": "ADIB: Abu Dhabi Islamic Bank"
            },
            {
                "identifier": "ALMASHREQBank",
                "tradeMethodName": "AL MASHREQ Bank"
            },
            {
                "identifier": "mBank",
                "tradeMethodName": "mBank"
            },
            {
                "identifier": "NationalBankAbuDhabi",
                "tradeMethodName": "National Bank of Abu Dhabi FAB"
            },
            {
                "identifier": "AlHilalBank",
                "tradeMethodName": "Al Hilal Bank"
            },
            {
                "identifier": "Pyypl",
                "tradeMethodName": "Pyypl"
            }
        ]
    },
    {
        "fullName": "Чешская крона",
        "shortName": "CZK",
        "tradeMethods": [
            {
                "identifier": "Wise",
                "tradeMethodName": "Wise"
            },
            {
                "identifier": "Revolut",
                "tradeMethodName": "Revolut"
            },
            {
                "identifier": "ZEN",
                "tradeMethodName": "ZEN"
            }
        ]
    },
    {
        "fullName": "Фунт стерлингов",
        "shortName": "GBP",
        "tradeMethods": [
            {
                "identifier": "Wise",
                "tradeMethodName": "Wise"
            },
            {
                "identifier": "Revolut",
                "tradeMethodName": "Revolut"
            }
        ]
    },
    {
        "fullName": "Киргизский сом",
        "shortName": "KGS",
        "tradeMethods": [
            {
                "identifier": "mBank",
                "tradeMethodName": "mBank"
            },
            {
                "identifier": "OPTIMABANK",
                "tradeMethodName": "Оптима Банк"
            },
            {
                "identifier": "ELCART",
                "tradeMethodName": "Элкарт"
            },
            {
                "identifier": "DEMIRBANK",
                "tradeMethodName": "DemirBank"
            },
            {
                "identifier": "BAKAIBANK",
                "tradeMethodName": "Бакай Банк"
            }
        ]
    },
    {
        "fullName": "Казахстанский тенге",
        "shortName": "KZT",
        "tradeMethods": [
            {
                "identifier": "KaspiBank",
                "tradeMethodName": "Kaspi Bank"
            },
            {
                "identifier": "HalykBank",
                "tradeMethodName": "Halyk Bank"
            },
            {
                "identifier": "CenterCreditBank",
                "tradeMethodName": "ЦентрКредит Банк"
            },
            {
                "identifier": "JysanBank",
                "tradeMethodName": "Jysan Bank"
            },
            {
                "identifier": "ForteBank",
                "tradeMethodName": "ForteBank"
            },
            {
                "identifier": "FreedomBank",
                "tradeMethodName": "Freedom Bank"
            },
            {
                "identifier": "AltynBank",
                "tradeMethodName": "Altyn Bank"
            },
            {
                "identifier": "EurasianBank",
                "tradeMethodName": "Евразийский Банк"
            },
            {
                "identifier": "HomeCreditKazakhstan",
                "tradeMethodName": "Хоум Кредит Казахстан"
            },
            {
                "identifier": "BankRBK",
                "tradeMethodName": "Bank RBK"
            },
            {
                "identifier": "Simply",
                "tradeMethodName": "Simply"
            },
            {
                "identifier": "QIWI",
                "tradeMethodName": "QIWI"
            }
        ]
    },
    {
        "fullName": "Молдавский лей",
        "shortName": "MDL",
        "tradeMethods": [
            {
                "identifier": "MAIB",
                "tradeMethodName": "MAIB"
            },
            {
                "identifier": "MICB",
                "tradeMethodName": "MICB (Moldova)"
            },
            {
                "identifier": "Victoriabank",
                "tradeMethodName": "Victoriabank"
            },
            {
                "identifier": "Paynet",
                "tradeMethodName": "Paynet"
            }
        ]
    },
    {
        "fullName": "Польский злотый",
        "shortName": "PLN",
        "tradeMethods": [
            {
                "identifier": "Revolut",
                "tradeMethodName": "Revolut"
            },
            {
                "identifier": "Wise",
                "tradeMethodName": "Wise"
            }
        ]
    },
    {
        "fullName": "Шведская крона",
        "shortName": "SEK",
        "tradeMethods": [
            {
                "identifier": "Wise",
                "tradeMethodName": "Wise"
            }
        ]
    },
    {
        "fullName": "Турецкая лира",
        "shortName": "TRY",
        "tradeMethods": [
            {
                "identifier": "Ziraat",
                "tradeMethodName": "Ziraat"
            },
            {
                "identifier": "BANK",
                "tradeMethodName": "Банковский перевод"
            },
            {
                "identifier": "Garanti",
                "tradeMethodName": "Garanti"
            },
            {
                "identifier": "DenizBank",
                "tradeMethodName": "Denizbank"
            },
            {
                "identifier": "VakifBank",
                "tradeMethodName": "VakifBank"
            },
            {
                "identifier": "KuveytTurk",
                "tradeMethodName": "Kuveyt Turk"
            },
            {
                "identifier": "Papara",
                "tradeMethodName": "Papara"
            },
            {
                "identifier": "QNB",
                "tradeMethodName": "QNB"
            },
            {
                "identifier": "ISBANK",
                "tradeMethodName": "İŞBANK"
            },
            {
                "identifier": "Akbank",
                "tradeMethodName": "Akbank"
            },
            {
                "identifier": "Ozan",
                "tradeMethodName": "Ozan"
            },
            {
                "identifier": "alBaraka",
                "tradeMethodName": "alBaraka"
            }
        ]
    },
    {
        "fullName": "Украинская гривна",
        "shortName": "UAH",
        "tradeMethods": [
            {
                "identifier": "Monobank",
                "tradeMethodName": "Monobank"
            },
            {
                "identifier": "PrivatBank",
                "tradeMethodName": "ПриватБанк (Универсальная)"
            },
            {
                "identifier": "ABank",
                "tradeMethodName": "A-Bank"
            },
            {
                "identifier": "PUMBBank",
                "tradeMethodName": "PUMB"
            },
            {
                "identifier": "izibank",
                "tradeMethodName": "Izibank"
            },
            {
                "identifier": "Sportbank",
                "tradeMethodName": "Sportbank"
            },
            {
                "identifier": "SenseSuperApp",
                "tradeMethodName": "Sense SuperApp"
            },
            {
                "identifier": "Oschadbank",
                "tradeMethodName": "Ощадбанк"
            },
            {
                "identifier": "RaiffeisenBankAval",
                "tradeMethodName": "Raiffeisen Bank Aval"
            },
            {
                "identifier": "BankVlasnyiRakhunok",
                "tradeMethodName": "Bank Vlasnyi Rakhunok"
            },
            {
                "identifier": "Ukrsibbank",
                "tradeMethodName": "Ukrsibbank"
            },
            {
                "identifier": "OTPBankNew",
                "tradeMethodName": "OTP BANK"
            },
            {
                "identifier": "CreditAgricole",
                "tradeMethodName": "Credit Agricole"
            },
            {
                "identifier": "RaiffeisenBank",
                "tradeMethodName": "Райффайзенбанк"
            },
            {
                "identifier": "Ukrgasbank",
                "tradeMethodName": "Ukrgasbank"
            },
            {
                "identifier": "KredoBank",
                "tradeMethodName": "KredoBank"
            },
            {
                "identifier": "IdeaBank",
                "tradeMethodName": "Idea Bank"
            },
            {
                "identifier": "Wise",
                "tradeMethodName": "Wise"
            }
        ]
    },
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
