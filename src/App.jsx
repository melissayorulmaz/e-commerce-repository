import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GreenPart from "./components/GreenPart";
import Featured from "./components/Featured";
import BuyMe from "./components/BuyMe";
import ShopPage from "./pages/ShopPage";
import DesktopCloths from "./components/shoppageComponents/DesktopCloths";
import FilterSide from "./components/shoppageComponents/FilterSide";
import CategoryList from "./components/shoppageComponents/CategoryList";


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
        <GreenPart />
        <BuyMe />
        <Featured />
      </Route>
      <Route path="/shop">
        <ShopPage />
        <DesktopCloths />
        <FilterSide />
        <CategoryList />
      </Route>
    </Switch>
  );
}
export default App;
