import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { ContractName } from '../wrappers/ContractNameConfig';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('ContractNameDesc', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('ContractNameConfig');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let ContractNameConfig: SandboxContract<ContractName>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        ContractNameConfig = blockchain.openContract(ContractName.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await ContractNameConfig.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: ContractName.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and emailFilteringPhishingGuardSpamDetector are ready to use
    });
});
