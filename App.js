import "react-native-gesture-handler";

import { UserProvider } from "./userContext";

import MainComponent from "./src/components/MainComponent";

const App = () => {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  );
};

export default App;
