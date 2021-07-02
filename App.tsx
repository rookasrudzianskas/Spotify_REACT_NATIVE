import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidget from "./components/PlayerWidget";
import Amplify from 'aws-amplify';
import config from './aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';
import {AppContext} from "./AppContext";

Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<string|null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
      return (
      <SafeAreaProvider>
          <AppContext.Provider value={{
    // @ts-ignore
              songId: songId,
              setSongId: (id: string) => {
                setSongId(id);
          }}
          }>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <PlayerWidget />
          </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
