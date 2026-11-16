import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { Capacitor } from '@capacitor/core';

window.NativeScanner = {
  BarcodeScanner,
  isNative: Capacitor.isNativePlatform(),
};
