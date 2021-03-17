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
import Dashboard from "./components/dashboard/Dashboard";

// Customer

import Customers from "./components/customer/Customers";
import Customer from "./components/customer/Customer";
import CreateCustomer from "./components/customer/CreateCustomer";
import CustomerGroups from "./components/customer/CustomerGroups";
import CreateCustomerGroup from "./components/customer/CreateCustomerGroup";

// Supplier

import Suppliers from "./components/supplier/Suppliers";
import Supplier from "./components/supplier/Supplier";
import CreateSupplier from "./components/supplier/CreateSupplier";
import SupplierGroups from "./components/supplier/SupplierGroups";
import CreateSupplierGroup from "./components/supplier/CreateSupplierGroup";

// Inventory
import Items from "./components/inventory/item/Items";
import CreateItem from "./components/inventory/item/CreateItem";

import ItemGroups from "./components/inventory/itemGroup/ItemGroups";
import CreateItemGroup from "./components/inventory/itemGroup/CreateItemGroup";

import Warehouses from "./components/inventory/warehouse/Warehouses";
import CreateWarehouse from "./components/inventory/warehouse/CreateWarehouse";

import Uoms from "./components/inventory/uom/Uoms";
import CreateUom from "./components/inventory/uom/CreateUom";

import Inventory from "./components/inventory/Inventory";

// Purchase

import CreatePQ from "./components/purchase/pq/CreatePQ";
import PQs from "./components/purchase/pq/PQs";

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
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />

        {/* Customer */}
        <PrivateRoute exact path='/customers' component={Customers} />
        <PrivateRoute
          exact
          path='/create-customer'
          component={CreateCustomer}
        />
        <PrivateRoute exact path={`/customer/:id`} component={Customer} />

        {/* Supplier */}

        <PrivateRoute exact path='/suppliers' component={Suppliers} />
        <PrivateRoute
          exact
          path='/create-supplier'
          component={CreateSupplier}
        />
        <PrivateRoute exact path={`/supplier/:id`} component={Supplier} />

        {/* Item */}
        <PrivateRoute exact path='/items' component={Items} />
        <PrivateRoute exact path='/create-item' component={CreateItem} />

        <PrivateRoute exact path='/item-groups' component={ItemGroups} />
        <PrivateRoute exact path='/inventory' component={Inventory} />

        <PrivateRoute
          exact
          path='/create-item-group'
          component={CreateItemGroup}
        />

        <PrivateRoute exact path='/warehouses' component={Warehouses} />
        <PrivateRoute
          exact
          path='/create-warehouse'
          component={CreateWarehouse}
        />

        <PrivateRoute exact path='/uoms' component={Uoms} />
        <PrivateRoute exact path='/create-uom' component={CreateUom} />

        <PrivateRoute
          exact
          path='/customer-groups'
          component={CustomerGroups}
        />
        <PrivateRoute
          exact
          path='/create-customer-group'
          component={CreateCustomerGroup}
        />

        <PrivateRoute
          exact
          path='/supplier-groups'
          component={SupplierGroups}
        />

        <PrivateRoute
          exact
          path='/create-supplier-group'
          component={CreateSupplierGroup}
        />

        <PrivateRoute exact path='/purchase-quotation' component={PQs} />
        <PrivateRoute exact path='/create-pq' component={CreatePQ} />

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
