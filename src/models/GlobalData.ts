export class GlobalData {
    constructor(
        public total_market_cap_usd: number,
        public total_24h_volume_usd: number,
        public bitcoin_percentage_of_market_cap: number,
        public active_currencies: number,
        public active_assets: number,
        public active_markets: number,
        public last_updated: number
    ) { }
}