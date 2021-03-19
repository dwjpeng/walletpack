
export let Blockchains = {
    EOS:'eos',
    ROXE:'roxe',
    ETH:'eth',
    TRX:'trx',
    BTC:'btc',
	FIO:'fio',
};

export let BlockchainsArray = Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));

export let blockchainName = x => {
    switch(x){
        case 'btc': return 'Bitcoin';
        case Blockchains.ROXE: return 'Roxe Chain';
        case Blockchains.EOS: return 'EOS';
        case Blockchains.ETH: return 'Ethereum';
        case Blockchains.TRX: return 'Tron';
        case Blockchains.BTC: return 'Bitcoin';
        case Blockchains.FIO: return 'FIO';
        default: return x;
    }
};

export const setBlockchains = (_Blockchains, _blockchainNameParser = null) => {
	Blockchains = _Blockchains;
	BlockchainsArray = Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));
	if(_blockchainNameParser) blockchainName = _blockchainNameParser;
}
