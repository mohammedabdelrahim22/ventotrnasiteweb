import MultiStepForm from './components/multi/multi';
import Index from './components/index'
import { InlineWidget, PopupWidget, } from "react-calendly";
// import Chat from './components/chat'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app overflow-hidden'>
        {/* <Chat /> */}
        <InlineWidget url="https://calendly.com/mohammedabdelrahim42/30min" />
        <PopupWidget
          url="https://calendly.com/mohammedabdelrahim42/30min"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="red"
        />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/MultiStepForm" element={<MultiStepForm />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
