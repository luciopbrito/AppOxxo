import { Box, Input } from 'native-base';
import React from 'react';

export default function FormInput({ placeholder, funcState }) {
    return (
        <Input
            placeholder={placeholder}
            backgroundColor='#fff'
            fontSize={15}
            onChangeText={(e) => funcState(e)}
        />
    )
}
