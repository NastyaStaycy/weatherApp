import React from "react";

type Props = {
    onGettingWeather: (city: string) => void;
}

export const Form: React.FC<Props> = (props: Props): JSX.Element => {

    function  gettingWeather(e: any) {
        e.preventDefault();
        props.onGettingWeather(e.target.elements.city.value);
    }

    return (
        <form onSubmit={gettingWeather}>
            <input type='text' placeholder='Город' name='city' />
            <button>Получить погоду</button>
        </form>
)};