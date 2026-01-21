import { useEffect, useState } from 'react';

export function useSolanaTransactions(mintAddress: string) {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_HELIUS_API_KEY;
    // Helius Enhanced WebSocket URL
    const ws = new WebSocket(`wss://atlas-mainnet.helius-rpc.com?api-key=${apiKey}`);

    ws.onopen = () => {
      console.log('Connected to Helius Stream');
      // Subscribe specifically to our Token Mint
      const subscriptionRequest = {
        jsonrpc: "2.0",
        id: 420,
        method: "transactionSubscribe",
        params: [
          { accountInclude: [mintAddress] },
          { 
            commitment: "processed", 
            encoding: "jsonParsed", 
            transactionDetails: "full" 
          }
        ]
      };
      ws.send(JSON.stringify(subscriptionRequest));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (!data.params) return;

      const tx = data.params.result;
      
      // PARSING LOGIC: Extract relevant info from Helius enhanced format
      const newTx = {
        id: tx.signature,
        type: tx.events?.swap ? 'SWAP' : 'TRANSFER',
        amountSOL: tx.fee / 1000000000, // Convert lamports to SOL
        wallet: `${tx.feePayer.slice(0, 4)}...${tx.feePayer.slice(-4)}`,
        time: new Date().toLocaleTimeString(),
        isWhale: tx.fee > 5000000 // Example threshold for "Whale"
      };

      setTransactions(prev => [newTx, ...prev.slice(0, 9)]);
    };

    return () => ws.close();
  }, [mintAddress]);

  return transactions;
}