export interface ServerStatus {
    address: string;
    online: boolean;
    version: string;
    current_players: string;
    latency: number;
    players: string[];
}