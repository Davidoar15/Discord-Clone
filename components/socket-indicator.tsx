"use client";

import { useSockect } from "./providers/socket-provider";
import { Badge } from "./ui/badge";

export const SocketIndicator = () => {
    const { isConnected } = useSockect();

    if (!isConnected) {
        return (
            <Badge 
                variant="outline"
                className="bg-yellow-600 text-white border-none"
            >
                Fallback: Polling every 1s
            </Badge>
        );
    };

    return (
        <Badge 
            variant="outline"
            className="bg-emerald-600 text-white border-none"
        >
            Live: Real-time update
        </Badge>
    );
};