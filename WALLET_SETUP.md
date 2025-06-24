# Wallet Connection Setup

The AppKit wallet connection has been implemented in your app! Here's what you need to do to complete the setup:

## 1. Get Your Project ID

1. Go to [https://cloud.reown.com](https://cloud.reown.com)
2. Create an account or sign in
3. Create a new project
4. Copy your project ID

## 2. Update Configuration

Edit `app/lib/wallet.ts` and replace the placeholder values:

```typescript
// Replace with your actual project ID from Reown Cloud
const projectId = "YOUR_PROJECT_ID";

// Update the metadata with your app details
const metadata = {
  name: "Elevantoo", // Your app name
  description: "Elevantoo App", // Your app description
  url: "https://reown.com/appkit",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "elevantoo://", // Replace with your app scheme
    universal: "your-app-universal-link.com", // Replace with your universal link
  },
};
```

## 3. Hermes Compatibility ✅

The app has been configured to work with Hermes (React Native's JavaScript engine):

- ✅ **Babel configuration** - Using `unstable_transformImportMeta: true` in babel-preset-expo
- ✅ **Metro configuration** - Optimized for Hermes
- ✅ **Process polyfill** - Added for better compatibility

## 4. Configure App Scheme (iOS/Android)

### For iOS:
The app scheme is already configured in `app.json`:
```json
{
  "expo": {
    "scheme": "elevantoo"
  }
}
```

### For Android:
The intent filters are already configured in `app.json`:
```json
{
  "expo": {
    "android": {
      "intentFilters": [
        {
          "action": "VIEW",
          "autoVerify": true,
          "data": [
            {
              "scheme": "elevantoo"
            }
          ],
          "category": ["BROWSABLE", "DEFAULT"]
        }
      ]
    }
  }
}
```

## 5. Test the Implementation

1. Run your app: `npm start`
2. Navigate to the home screen
3. Tap the "Connect Wallet" button
4. The AppKit modal should open with wallet connection options

## Features Implemented

- ✅ WagmiProvider and QueryClientProvider setup
- ✅ AppKit configuration with mainnet, polygon, and arbitrum chains
- ✅ AppKit modal component
- ✅ Connect wallet button on home screen
- ✅ WalletConnect compatibility
- ✅ **Hermes compatibility with Babel transform**
- ✅ **Metro configuration for optimal performance**

## Available Hooks

You can also use AppKit hooks for custom wallet functionality:

```typescript
import { useAppKit } from '@reown/appkit-wagmi-react-native';

function MyComponent() {
  const { open } = useAppKit();
  
  return (
    <Button onPress={open} title="Connect Wallet" />
  );
}
```

## Troubleshooting

### Hermes Issues
If you encounter `import.meta is not supported in hermes` errors:
- The Babel configuration uses `unstable_transformImportMeta: true` in babel-preset-expo
- This is the recommended approach for handling import.meta in Hermes
- Clear Metro cache: `npx expo start --clear`

### Other Common Issues
- Make sure you have a valid project ID from Reown Cloud
- Ensure your app scheme is properly configured
- Check that all dependencies are installed correctly
- For production, update the universal link to your actual domain
- Clear Metro cache: `npx expo start --clear` 