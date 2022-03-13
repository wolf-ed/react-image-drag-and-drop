import { Fragment } from 'react';
import EmptyBox from './EmptyBox/EmptyBox';
import FilledBox from './FilledBox/FilledBox';


function App() {

  return (
    <Fragment>
      <EmptyBox id="empty-1"><FilledBox id="fill-1" /></EmptyBox>
      <EmptyBox />
      <EmptyBox />
      <EmptyBox />
    </Fragment >
  );
}

export default App;
