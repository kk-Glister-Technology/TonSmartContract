import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { EmailFilteringPhishingGuardSpamDetector } from '../wrappers/EmailFilteringPhishingGuardSpamDetector';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('EmailFilteringPhishingGuardSpamDetector', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('EmailFilteringPhishingGuardSpamDetector');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let emailFilteringPhishingGuardSpamDetector: SandboxContract<EmailFilteringPhishingGuardSpamDetector>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        emailFilteringPhishingGuardSpamDetector = blockchain.openContract(EmailFilteringPhishingGuardSpamDetector.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await emailFilteringPhishingGuardSpamDetector.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: emailFilteringPhishingGuardSpamDetector.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and emailFilteringPhishingGuardSpamDetector are ready to use
    });
});
