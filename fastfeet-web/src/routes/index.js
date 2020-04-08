import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'
import SignIn from '~/pages/SignIn';
import DeliveriesList from '~/pages/Deliveries/List';
import DeliveriesCreate from '~/pages/Deliveries/Create';
import DeliverymansList from '~/pages/Deliverymans/List';
import DeliverymansCreate from '~/pages/Deliverymans/Create';
import DeliverymansUpdate from '~/pages/Deliverymans/Update';
import RecipientsList from '~/pages/Recipients/List';
import RecipientsCreate from '~/pages/Recipients/Create';
import RecipientsUpdate from '~/pages/Recipients/Update';
import TroublesList from '~/pages/Troubles/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={DeliveriesList} isPrivate/>
      <Route path="/deliveries/create" component={DeliveriesCreate} isPrivate/>
      <Route path="/deliverymans" exact component={DeliverymansList} isPrivate/>
      <Route path="/deliverymans/create" component={DeliverymansCreate} isPrivate/>
      <Route path="/deliverymans/update/:id" component={DeliverymansUpdate} isPrivate/>
      <Route path="/recipients" exact component={RecipientsList} isPrivate/>
      <Route path="/recipients/create"  component={RecipientsCreate} isPrivate/>
      <Route path="/recipients/update/:id"  component={RecipientsUpdate} isPrivate/>
      <Route path="/troubles"  component={TroublesList} isPrivate/>

      <Route path="/" component={() => <h3>404 Not Found</h3>} />
    </Switch>
  );
}
