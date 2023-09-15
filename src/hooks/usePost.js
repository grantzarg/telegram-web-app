import { useState, useEffect } from 'react';

export function usePost(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function postData(payload) {
        try {
            setLoading(true);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    return { data, loading, error, postData };
}