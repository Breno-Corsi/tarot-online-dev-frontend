import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default async function Fingerprint() {
    const fp = await FingerprintJS.load();
    const result = await fp.get();

    return result.visitorId;
}