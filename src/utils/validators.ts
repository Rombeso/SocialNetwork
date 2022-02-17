import React from "react";

export const required = (value: any) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxlength: any) => (value: any) => {
    if (value.length > maxlength) return `Max length ${maxlength} symbols`
    return undefined

}

