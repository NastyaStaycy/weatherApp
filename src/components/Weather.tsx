import React from "react";

type Props = {
    data: any;
    error: string | undefined;
}

export const Weather: React.FC<Props> = (props: Props): JSX.Element => (
    <div>
        {props.error}
    </div>
);