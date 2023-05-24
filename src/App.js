import "./App.css";
import PageLayout from "./componets/PageLayout";
import GlobalProvider from "./provider/GlobalProvider";
import Header from "./componets/Header";
import { useRef } from "react";

function App() {
  const headerRef = useRef(null);


  return (
    <GlobalProvider googleApiKey={"abced"}>
      <div className="App">
        <Header ref={headerRef} className={"parent-class"}/>
        <PageLayout>
          <h1>Test App</h1>
          <button onClick={() =>{
            if(headerRef.current){
              headerRef.current.onClick(true);
            }
          }}>Update Child Value</button>
        </PageLayout>
      </div>
    </GlobalProvider>
  );
}

export default App;
