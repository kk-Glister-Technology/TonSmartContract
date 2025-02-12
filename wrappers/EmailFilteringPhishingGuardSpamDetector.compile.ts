import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'func',
    targets: ['contracts/email_filtering_phishing_guard_spam_detector.fc'],
};
