import 'bootstrap/dist/css/bootstrap.min.css';
import MeetingManagement from './view/MeetingManagements';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import TextManagement from './view/TextManagement';
import WritingHelp from './view/WritingHelp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MeetingManagement />,
  },
  {
    path: 'text-manipulation',
    element: <TextManagement />,
  },
  {
    path: 'writing-help',
    element: <WritingHelp />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
