import React, { Fragment, useEffect } from "react";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./_actions/authAction";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./utils/PrivateRoute";

import Sidebar from "./components/UI/Sidebar";
import Alert from "./components/UI/Alert";
import NotFound from "./components/UI/NotFound";
import Login from "./components/authentication/Login";
import Landing from "./components/UI/Landing";
import Dashboard from "./components/dashboard/dashboard";

import BusinessPartners from "./components/businessPartner/BusinessPartners";
import BusinessPartner from "./components/businessPartner/BusinessPartner";
import CreateBP from "./components/businessPartner/CreateBP";

import Items from "./components/inventory/item/Items";
import CreateItem from "./components/inventory/item/CreateItem";

import ItemGroups from "./components/inventory/itemGroup/ItemGroups";
import CreateItemGroup from "./components/inventory/itemGroup/CreateItemGroup";

import Warehouses from "./components/inventory/warehouse/Warehouses";
import CreateWarehouse from "./components/inventory/warehouse/CreateWarehouse";

import Uoms from "./components/inventory/uom/Uoms";
import CreateUom from "./components/inventory/uom/CreateUom";

import BpGroups from "./components/businessPartner/bpGroup/bpGroups";
import CreateBpGroup from "./components/businessPartner/bpGroup/CreateBpGroup";

import Inventory from "./components/inventory/Inventory";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  let routes = (
    <Fragment>
      <Alert />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/business-partners"
          component={BusinessPartners}
        />
        <PrivateRoute exact path="/create-bp" component={CreateBP} />
        <PrivateRoute
          exact
          path={`/business-partner/:id`}
          component={BusinessPartner}
        />

        <PrivateRoute exact path="/items" component={Items} />
        <PrivateRoute exact path="/create-item" component={CreateItem} />

        <PrivateRoute exact path="/item-groups" component={ItemGroups} />
        <PrivateRoute exact path="/inventory" component={Inventory} />

        <PrivateRoute
          exact
          path="/create-item-group"
          component={CreateItemGroup}
        />

        <PrivateRoute exact path="/warehouses" component={Warehouses} />
        <PrivateRoute
          exact
          path="/create-warehouse"
          component={CreateWarehouse}
        />

        <PrivateRoute exact path="/uoms" component={Uoms} />
        <PrivateRoute exact path="/create-uom" component={CreateUom} />

        <PrivateRoute exact path="/bp-groups" component={BpGroups} />
        <PrivateRoute exact path="/create-bp-group" component={CreateBpGroup} />

        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );

  return (
    <Provider store={store}>
      <Router>
        <Sidebar>{routes}</Sidebar>
      </Router>
    </Provider>
  );
};

export default App;
