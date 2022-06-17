import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Men from "./components/pages/Men";
import Scouting from "./components/pages/Scouting";
import Women from "./components/pages/Women";
import Registration from "./components/pages/Registration";
import DisplayModels from "./components/pages/DisplayModels";
import ModelList from "./components/pages/ModelList";
import UploadImage from "./components/pages/imageUpload";
// import ReactFirebaseFileUpload from "./components/pages/MultipleFileUpload";
import MultiUpload from "./components/pages/Mfu";



function App() {
  return (
     <div>
       <Routes> 
         <Route path = '/' element = {<Homepage/>} />
         <Route path="/Women"   element = {<Women />}/>
          
         <Route path="/Men" element = {<Men />} />
         
         <Route path="/Scouting" element = {<Scouting />} />
        
         <Route path="/About" element = {<About/>} />
              
         <Route path="/Registration" element = {<Registration />} />
         
         {/* <Route path="/UploadImage" element = {<UploadImage />} /> */}

         {/* <Route path="/ModelList" element = {<ModelList />} /> */}

         {/* <Route path="/DisplayModels" element = {<DisplayModels />} /> */}

         <Route path="/Contact" element = {<Contact />} />
       
         <Route path="/multiUpload" element = {<MultiUpload />} />
        </Routes>
     </div>
  );
}


export default App;
