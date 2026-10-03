import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title:'Home'}}/>
      <Stack.Screen name="team" options={{ title:'Team Members'}}/>
      <Stack.Screen name="jhonnedel" options={{ title:'Jhonnedel-Profile'}}/>
      <Stack.Screen name="ian" options={{ title:'Ian-Profile'}}/> 
      <Stack.Screen name="novie" options={{ title:'Novie-Profile' }}/>
      <Stack.Screen name="geoffrey" options={{ title:'Geoffrey-Profile'}}/>
    </Stack>
  );
}