import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

function App() {
  return (
    <div className="all-content">
      <div className="container">
        <SidebarMenu></SidebarMenu>
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
