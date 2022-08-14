import Router from "./Router";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }} withNormalizeCSS withGlobalStyles>
      <Router />
    </MantineProvider>
  );
}

export default App;
