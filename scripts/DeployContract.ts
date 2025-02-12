import { toNano } from '@ton/core';
import { ContractNameConfig } from '../wrappers/ContractName';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const ContractNameConfig = provider.open(ContractName.createFromConfig({}, await compile('Contract')));

    await Contract.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(ContractNameConfig.address);

    // run methods on `Contract`
}
