import { toNano } from '@ton/core';
import { EmailFilteringPhishingGuardSpamDetector } from '../wrappers/EmailFilteringPhishingGuardSpamDetector';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const emailFilteringPhishingGuardSpamDetector = provider.open(EmailFilteringPhishingGuardSpamDetector.createFromConfig({}, await compile('EmailFilteringPhishingGuardSpamDetector')));

    await emailFilteringPhishingGuardSpamDetector.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(emailFilteringPhishingGuardSpamDetector.address);

    // run methods on `emailFilteringPhishingGuardSpamDetector`
}
