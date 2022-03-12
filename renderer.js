const charts = [
  "BINANCE:BTCUSDT", // chart 1
  "BINANCE:FTMUSDT", // chart 2
  "BINANCE:SOLUSDT", // chart 3
  "BINANCE:UTKUSDT", // chart 4
];

charts.map((value, index) => {
  const isLast = index === charts.length - 1;
  new TradingView.widget({
    autosize: true,
    symbol: value,
    interval: "15",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "fr",
    toolbar_bg: "#f1f3f6",
    hide_top_toolbar: false,
    withdateranges: isLast,
    hide_side_toolbar: !isLast,
    enable_publishing: false,
    allow_symbol_change: true,
    studies: ["BB@tv-basicstudies", "MASimple@tv-basicstudies"],
    container_id: `tradingview_chart_${index + 1}`,
  });
});
