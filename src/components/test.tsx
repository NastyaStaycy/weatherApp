import React from "react";

type Props = {
    title: string;
}

export const TestComponent: React.FC<Props> = (props: Props): JSX.Element => (
    <h1>{props.title}</h1>
);