import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core';

export type EmailFilteringPhishingGuardSpamDetectorConfig = {};

export function emailFilteringPhishingGuardSpamDetectorConfigToCell(config: EmailFilteringPhishingGuardSpamDetectorConfig): Cell {
    return beginCell().endCell();
}

export class EmailFilteringPhishingGuardSpamDetector implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new EmailFilteringPhishingGuardSpamDetector(address);
    }

    static createFromConfig(config: EmailFilteringPhishingGuardSpamDetectorConfig, code: Cell, workchain = 0) {
        const data = emailFilteringPhishingGuardSpamDetectorConfigToCell(config);
        const init = { code, data };
        return new EmailFilteringPhishingGuardSpamDetector(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
