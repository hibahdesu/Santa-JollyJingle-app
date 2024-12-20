// App.js
import React from 'react';
import { WebView } from 'react-native-webview';  // Import WebView

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://santa-44bwqrn2n-hibahdesus-projects.vercel.app/' }}  // URL of your deployed Next.js app
      style={{ marginTop: 20 }}  // Optional styling to give some space at the top
    />
  );
}
