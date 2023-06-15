const fetch = require("node-fetch");

const fetch_data = async (symbol) => {

    let url = `https://query2.finance.yahoo.com/v7/finance/quote?formatted=false&lang=en-US&region=US&symbols=${symbol}&corsDomain=finance.yahoo.com`
    const res = await fetch(url, {
        "headers": {
            "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "cookie": "A1=d=AQABBPlDi2QCEHIaiNo-erdV1xeQBqcLb3MFEgEBAQGVjGSVZFkPyyMA_eMAAA&S=AQAAAqfx91-Inz7YjBvA6J0VTKA; A3=d=AQABBPlDi2QCEHIaiNo-erdV1xeQBqcLb3MFEgEBAQGVjGSVZFkPyyMA_eMAAA&S=AQAAAqfx91-Inz7YjBvA6J0VTKA; A1S=d=AQABBPlDi2QCEHIaiNo-erdV1xeQBqcLb3MFEgEBAQGVjGSVZFkPyyMA_eMAAA&S=AQAAAqfx91-Inz7YjBvA6J0VTKA&j=WORLD; thamba=1; cmp=t=1686848512&j=0&u=1---; PRF=newChartbetateaser%3D0%252C1688058117532%26t%3DHDFCBANK.NS%252BHDB%252B%255EGSPC%252B%255ERUTA3=d=AQABBDspUWMCEJIfx5pOU8LjroChiKq1_rAFEgEBAQF6UmNbYwAAAAAA_eMAAA&S=AQAAAqWU4koWG2u572AfVNWQXZQ; A1=d=AQABBDspUWMCEJIfx5pOU8LjroChiKq1_rAFEgEBAQF6UmNbYwAAAAAA_eMAAA&S=AQAAAqWU4koWG2u572AfVNWQXZQ; A1S=d=AQABBDspUWMCEJIfx5pOU8LjroChiKq1_rAFEgEBAQF6UmNbYwAAAAAA_eMAAA&S=AQAAAqWU4koWG2u572AfVNWQXZQ&j=WORLD=dmeabg9gr6rk0&b=3&s=22; GUC=AQEBCAFjtUBj6EIibwS2&s=AQAAAD9JkhQD&g=Y7PyEA; A1=d=AQABBIBus2ECEOB1Dd4oIpyuj6YUi4JLOdsFEgEBCAFAtWPoY1lQb2UB_eMBAAcIgG6zYYJLOds&S=AQAAAiutns5GnbBNu674mViELoQ; A3=d=AQABBIBus2ECEOB1Dd4oIpyuj6YUi4JLOdsFEgEBCAFAtWPoY1lQb2UB_eMBAAcIgG6zYYJLOds&S=AQAAAiutns5GnbBNu674mViELoQ; A1S=d=AQABBIBus2ECEOB1Dd4oIpyuj6YUi4JLOdsFEgEBCAFAtWPoY1lQb2UB_eMBAAcIgG6zYYJLOds&S=AQAAAiutns5GnbBNu674mViELoQ&j=WORLD; thamba=1; cmp=t=1673527640&j=0&u=1---; PRF=t%3DSBIN.NS%252BJINDALSTEL.NS%252BABFRL.NS%252BTIPSINDLTD.NS%252BNTPC.NS%252BADANIGREEN.NS%252BJKPAPER.NS%252BBEL.NS%252BBANKBARODA.NS%252BPERMAGN.BO%252BASHOKLEY.NS%252BICICIBANK.NS%252BAXISBANK.NS%252BAMBUJACEM.NS%252BADANIENT.NS%26newChartbetateaser%3D0%252C1674737247136"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
    });

    const raw_data = await res.json()
    const market_price = raw_data.quoteResponse.result[0].regularMarketPrice
    return market_price
};

module.exports = fetch_data
