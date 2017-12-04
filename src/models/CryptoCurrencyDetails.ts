export class CryptoCurrencyDetails {
    constructor(
        public id: string,
        public name: string,
        public symbol: string,
        public rank: number,
        public price_usd: number,
        public price_btc: number,
        public market_cap_usd: number,
        public available_supply: number,
        public total_supply: number,
        public max_supply: number,
        public percent_change_1h: number,
        public percent_change_24h: number,
        public percent_change_7d: number,
        public last_updated: number
    ) { }
}