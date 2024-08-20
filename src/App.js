import './App.css';
import Enter from "./pages/Enter"
import { Route , Routes } from "react-router-dom";
import Section from './pages/Sections';
import Store from './pages/Store';
import {SidebarProvider} from "./components/Hooks/context-sidebar"

function App() {

  
  return (
    <div className="App">
      <SidebarProvider>
        <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/section" element={<Section />} />
        <Route path="/Store" element={<Store />} />
        </Routes>
      </SidebarProvider>
    </div>
  );
}

export default App;
