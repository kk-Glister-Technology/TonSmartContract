import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core';

export type ContractNameConfig = {};

export function ContractNameConfigConfigToCell(config: ContractNameConfig): Cell {
    return beginCell().endCell();
}

export class ContractNameClass implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new ContractName(address);
    }

    static createFromConfig(config: EmailFilteringPhishingGuardSpamDetectorConfig, code: Cell, workchain = 0) {
        const data = ContractNameConfigCell(config);
        const init = { code, data };
        return new ContractNameConfigCell(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
