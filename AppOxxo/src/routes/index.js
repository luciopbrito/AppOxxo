import React from 'react';
import { useAuth } from '../contexts/Auth';
import { RoutesClientOff } from './routes.client.off';
import { RoutesClientOn } from './routes.client.on';

export default function Routes() {
    const { authData } = useAuth()

    return (
        authData ? <RoutesClientOn /> : <RoutesClientOff />
    )
}
