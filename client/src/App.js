import HomeLayout from './layout/HomeLayout';
import OverviewPage from './pages/OverviewPage';
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="bg-[#282B30]">
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index exact element={<OverviewPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
