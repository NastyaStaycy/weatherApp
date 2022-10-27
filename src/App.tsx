import React from "react";
import {Form} from "./components/Form";
import {Weather} from "./components/Weather";

const API_KEY = '738f5313938737a53aff8880abad4843';

export const App: React.FC = () => {

    const [info, setInfo] = React.useState(null);
    const [error, setError] = React.useState(undefined);

    const city_name = 'Moscow';
    const country_code = 'ru';

    console.log(info);


    async function gettingWeather(city: string) {
        // const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&appid=${API_KEY}&units=metric`);
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

        if (data.weather) {
            setInfo(data);
        } else {
            setError(data.message)
        }
    }

    return (
        <>
            <h1>Hello React!</h1>
            <Form onGettingWeather={gettingWeather}/>
            <Weather data={info} error={error}/>
        </>
    )
};