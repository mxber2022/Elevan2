import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { AppKitButton } from '@reown/appkit-wagmi-react-native';

export function WalletInfo() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address,
  });
  const { disconnect } = useDisconnect();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (!isConnected) {
    return (
      <ThemedView style={styles.connectSection}>
        <ThemedText style={styles.connectText}>
          Connect your wallet to view your profile information
        </ThemedText>
        <AppKitButton />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.walletInfo}>
      <ThemedView style={styles.addressSection}>
        <ThemedText type="defaultSemiBold" style={styles.label}>
          Connected Address:
        </ThemedText>
        <ThemedText style={styles.address}>
          {address ? formatAddress(address) : 'Loading...'}
        </ThemedText>
      </ThemedView>
      
      {balance && (
        <ThemedView style={styles.balanceSection}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            Balance:
          </ThemedText>
          <ThemedText style={styles.balance}>
            {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
          </ThemedText>
        </ThemedView>
      )}
      
      <TouchableOpacity style={styles.disconnectButton} onPress={() => disconnect()}>
        <ThemedText style={styles.disconnectText}>Disconnect Wallet</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  connectSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  connectText: {
    marginBottom: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
  walletInfo: {
    gap: 16,
  },
  addressSection: {
    gap: 8,
  },
  balanceSection: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    opacity: 0.8,
  },
  address: {
    fontFamily: 'monospace',
    fontSize: 16,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    textAlign: 'center',
  },
  balance: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4CAF50',
    textAlign: 'center',
  },
  disconnectButton: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  disconnectText: {
    color: 'white',
    fontWeight: '600',
  },
}); 