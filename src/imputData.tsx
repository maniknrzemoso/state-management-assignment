interface inputType {
  firstField: {
    icon: string;
    content: string;
    symbol: string;
  };
  price: string;
  change: string;
  marketCap: string;
  icon: string;
}

const inputData: inputType[] = [
  {
    firstField: {
      icon: "bitcoin",
      content: "Bitcoin",
      symbol: "BTC",
    },
    price: "$3,285,553.73",
    change: "+1.06%",
    marketCap: "$60.1T",
    icon: "filledstar",
  },
  {
    firstField: {
      icon: "ethereum",
      content: "Ethereum",
      symbol: "ETH",
    },
    price: "$216,678.10",
    change: "-5.49%",
    marketCap: "$25.4T",
    icon: "blankstar",
  },
  {
    firstField: {
      icon: "ethereum2",
      content: "Ethereum2",
      symbol: "ETH2",
    },
    price: "$216,678.10",
    change: "-5.49%",
    marketCap: "$25.4T",
    icon: "filledstar",
  },
  {
    firstField: {
      icon: "tether",
      content: "Tether",
      symbol: "USDT",
    },
    price: "$74.31",
    change: "+0.11%",
    marketCap: "$4.6T",
    icon: "filledstar",
  },
  {
    firstField: {
      icon: "bitcoincoin",
      content: "Bitcoin Coin",
      symbol: "BNB",
    },
    price: "$24,942.54",
    change: "-3.69%",
    marketCap: "$4.2T",
    icon: "filledstar",
  },
  {
    firstField: {
      icon: "cardano",
      content: "Cardano",
      symbol: "ADA",
    },
    price: "$104.52",
    change: "-1.82",
    marketCap: "$3.4T",
    icon: "blankstar",
  },
  {
    firstField: {
      icon: "xrp",
      content: "XRP",
      symbol: "XRP",
    },
    price: "$57.21",
    change: "+1.11%",
    marketCap: "$2.7T",
    icon: "blankstar",
  },
  {
    firstField: {
      icon: "dodgecoin",
      content: "Dodge Coin",
      symbol: "XRP",
    },
    price: "$17.64",
    change: "-6.96%",
    marketCap: "$2.3T",
    icon: "blankstar",
  },
  {
    firstField: {
      icon: "usd",
      content: "USD Coin",
      symbol: "XRP",
    },
    price: "$74.26",
    change: "+1.01%",
    marketCap: "$2.1T",
    icon: "blankstar",
  },
];
console.log(typeof inputData);
export { inputData };
