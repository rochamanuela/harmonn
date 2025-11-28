export async function loginUser(credentials) {
    try {
        const response = await fetch('https://sua-api.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Credenciais inválidas');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}