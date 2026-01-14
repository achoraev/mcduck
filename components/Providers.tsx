"use client";

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { SolanaWalletConnectors } from '@dynamic-labs/solana';

export function Providers({ children }: { children: React.ReactNode }) {
  const envId = process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID;

  if (!envId) {
    console.warn("Dynamic Environment ID is missing. Check your Vercel Environment Variables.");
    return <>{children}</>;
  }

  return (
    <DynamicContextProvider
      settings={{
        environmentId: envId,
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}