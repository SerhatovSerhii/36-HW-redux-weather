import React, { useState } from 'react';

interface Props {
    getWeather: (city: string) => void
}

const Form = ({ getWeather }: Props) => {

    const [city, setCity] = useState('');

    const getCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={handleChange} type='text' />
            <button type='submit'>Get weather</button>
        </form>
    )
}

export default Form