
const config = {
    apiUrl: process.env.REACT_APP_API_URL ?? 'http://localhost:8000',
    apiTimeoutMs: Number.parseInt(process.env.REACT_APP_API_TIMEOUT_MS ?? "5000"),
    geolocationRefreshIntervalMins: Number.parseInt(process.env.REACT_APP_GEOLOCATION_REFRESH_INTERVAL_MINS ?? "5"),
}

export default config