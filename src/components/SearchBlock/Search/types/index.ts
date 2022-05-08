import {ChangeEvent} from "react";

export type SearchPropsType = {
    value: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}