import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MedicalList from './components/MedicalList';
import MedicalListFromJson from './components/MedicalListFromJson';
import PatientTable from './components/PatientTable';
import PatientTableWithSortFilter from './components/PatientTableWithSortFilter';
import PatientManager from './components/componentcommunication/PatientManager';
import PatientForm from './components/validation/PatientForm';
import AllEmp from './components/createviewall/AllEmp';
import Hello from './components/renderinglogic/Hello';
import Counter from './components/renderinglogic/Counter';
import Propschange from './components/renderinglogic/Propschange';
import SideEffect from './components/renderinglogic/SideEffect';
import UseEffectExamples from './components/renderinglogic/UseEffectExamples';
import ResourceManager from './components/crud/ResourceManager';
import ResourceManagerComponent from './components/crudwithcompnents/ResourceManagerComponent';
import RectangleOutput from './components/poc/RectangleOutput';
import Rectpoc from './components/poc/Rectpoc';
import ResourceManagerComponentWithAxios from './components/crudwithcompnents/ResourceManagerComponentWithAxios';

function App() {
  return (
    <div className="App">

      
      {/*  <MedicalList/>
       <MedicalListFromJson/>
       <PatientTable/>
       <PatientTableWithSortFilter/>

       */} 

       {/* parent and child communication */}
       {/* <PatientManager/> */}

       {/* form validation in react  */}
       {/* <PatientForm/> */}
       <hr/>
       {/* <AllEmp/> */}

          <hr/>
          {/* different kind of renders and useEffect  */}
         {/*  <Hello/>
          <Counter/>
          <Propschange/>
          */}
          {/* <SideEffect/>  */}
          {/* <UseEffectExamples/>  */}

          {/* <ResourceManager/> */}

          {/* <ResourceManagerComponent/> */}

          {/* <Rectpoc/> */}

           <ResourceManagerComponentWithAxios/> 
     </div>
  );
}

export default App;
