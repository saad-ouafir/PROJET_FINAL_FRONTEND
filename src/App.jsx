import { ThemeProvider } from "next-themes";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <>
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
