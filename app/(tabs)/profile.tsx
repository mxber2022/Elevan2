import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAccount } from 'wagmi';
import { WalletInfo } from '@/components/WalletInfo';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ProfileScreen() {
  const { isConnected } = useAccount();

  const handleCopyAddress = () => {
    // TODO: Implement copy to clipboard functionality
    console.log('Copy address functionality');
  };

  const handleViewOnExplorer = () => {
    // TODO: Implement view on blockchain explorer functionality
    console.log('View on explorer functionality');
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.avatarContainer}>
          <IconSymbol size={60} name="person.circle.fill" color="#007AFF" />
        </ThemedView>
        <ThemedText type="title" style={styles.title}>
          Profile
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          {isConnected ? 'Wallet Connected' : 'Connect your wallet to get started'}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Wallet Connection
        </ThemedText>
        <WalletInfo />
      </ThemedView>

      {isConnected && (
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Quick Actions
          </ThemedText>
          
          <TouchableOpacity style={styles.actionButton} onPress={handleCopyAddress}>
            <IconSymbol size={24} name="doc.on.doc" color="#007AFF" />
            <ThemedText style={styles.actionText}>Copy Address</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton} onPress={handleViewOnExplorer}>
            <IconSymbol size={24} name="safari" color="#007AFF" />
            <ThemedText style={styles.actionText}>View on Explorer</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      )}

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          App Information
        </ThemedText>
        
        <ThemedView style={styles.infoItem}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            App Name:
          </ThemedText>
          <ThemedText style={styles.value}>Elevantoo</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.infoItem}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            Version:
          </ThemedText>
          <ThemedText style={styles.value}>1.0.0</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.infoItem}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            Platform:
          </ThemedText>
          <ThemedText style={styles.value}>React Native + Expo</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.infoItem}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            Wallet Integration:
          </ThemedText>
          <ThemedText style={styles.value}>AppKit + WalletConnect</ThemedText>
        </ThemedView>
      </ThemedView>

      {isConnected && (
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Wallet Features
          </ThemedText>
          
          <ThemedView style={styles.featureItem}>
            <IconSymbol size={20} name="checkmark.circle.fill" color="#4CAF50" />
            <ThemedText style={styles.featureText}>
              View wallet balance and transaction history
            </ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.featureItem}>
            <IconSymbol size={20} name="checkmark.circle.fill" color="#4CAF50" />
            <ThemedText style={styles.featureText}>
              Send and receive cryptocurrency
            </ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.featureItem}>
            <IconSymbol size={20} name="checkmark.circle.fill" color="#4CAF50" />
            <ThemedText style={styles.featureText}>
              Connect to decentralized applications
            </ThemedText>
          </ThemedView>
          
          <ThemedView style={styles.featureItem}>
            <IconSymbol size={20} name="checkmark.circle.fill" color="#4CAF50" />
            <ThemedText style={styles.featureText}>
              Manage multiple blockchain networks
            </ThemedText>
          </ThemedView>
        </ThemedView>
      )}

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Support
        </ThemedText>
        
        <TouchableOpacity style={styles.supportButton}>
          <ThemedText style={styles.supportText}>Help & Documentation</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.supportButton}>
          <ThemedText style={styles.supportText}>Report an Issue</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.supportButton}>
          <ThemedText style={styles.supportText}>Privacy Policy</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  sectionTitle: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  label: {
    fontSize: 14,
  },
  value: {
    opacity: 0.8,
    fontSize: 14,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderRadius: 8,
    marginBottom: 8,
  },
  actionText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  featureText: {
    marginLeft: 12,
    fontSize: 14,
    opacity: 0.8,
  },
  supportButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  supportText: {
    fontSize: 16,
    opacity: 0.8,
  },
}); 