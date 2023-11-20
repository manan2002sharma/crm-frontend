import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Entry } from './page/entry/Entr.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketLIsts } from './page/ticket-listing/TicketLIsts.page';
import { Ticket } from './page/ticket/ticket.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddTicket/> */}
        {/* <TicketLIsts/> */}
        <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
