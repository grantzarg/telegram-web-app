import {CURRENCIES} from './constants';

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

        return error;
    }
};