'use client';

import { usePreventInspect } from '@/hooks/usePreventInspect';

export default function SecurityInit() {
  usePreventInspect();
  return null; // This component doesn't render any UI, just runs the hook
}