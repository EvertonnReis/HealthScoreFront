import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/Login';
import NavegadorInferior from './app/NavegadorInferior';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (typeof setImmediate === 'undefined') {
    global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
  }
  
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <NavegadorInferior />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}

// import React, { useState, useEffect, useRef } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Login from './app/Login';
// import NavegadorInferior from './app/NavegadorInferior';
// import * as Notifications from 'expo-notifications';
// import { Platform } from 'react-native';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   if (typeof setImmediate === 'undefined') {
//     global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
//   }

//   useEffect(() => {
//     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//     // Listener para notificações recebidas enquanto o app está em primeiro plano
//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       console.log('Notificação recebida:', notification);
//     });

//     // Listener para interações com notificações (usuário toca na notificação)
//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log('Resposta à notificação:', response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <NavegadorInferior />
//       ) : (
//         <Login onLogin={() => setIsLoggedIn(true)} />
//       )}
//     </NavigationContainer>
//   );
// }

// async function registerForPushNotificationsAsync() {
//   if (Platform.OS === 'web') {
//     console.log('Notificações push na web requerem `notification.vapidPublicKey` em app.json.');
//     // return;
//   }

//   let token;
//   if (Platform.OS === 'web') {
//     alert(token);
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   const { status: existingStatus } = await Notifications.getPermissionsAsync();
//   let finalStatus = existingStatus;
//   if (existingStatus !== 'granted') {
//     const { status } = await Notifications.requestPermissionsAsync();
//     finalStatus = status;
//   }
//   if (finalStatus !== 'granted') {
//     alert('Falha ao obter permissão para notificações push!');
//     return;
//   }

//   token = (await Notifications.getExpoPushTokenAsync()).data;
//   console.log('Expo Push Token:', token);

//   return token;
// }

