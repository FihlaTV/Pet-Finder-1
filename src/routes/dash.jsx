
import Dashboard from 'views/Dashboard/Dashboard.jsx';
import SweetAlert from 'views/Components/SweetAlertPage.jsx';
import ValidationForms from 'views/Forms/ValidationForms.jsx';
import DataTables from 'views/Tables/DataTables.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import UserPage from 'views/Pages/UserPage.jsx';

import pagesRoutes from './pages.jsx';

const pages = [{
  path: '/pages/user-page', name: 'User Page', mini: 'UP', component: UserPage,
}].concat(pagesRoutes);

const dashRoutes = [
  {
    path: '/UserPage', name: 'Dashboard', icon: 'pe-7s-graph', component: UserPage,
  },
  {
    collapse: true,
    path: '/components',
    name: 'Components',
    state: 'openComponents',
    icon: 'pe-7s-plugin',
    views: [
      {
        path: '/components/sweet-alert', name: 'Sweet Alert', mini: 'SA', component: SweetAlert,
      },
    ],
  },
  {
    collapse: true,
    path: '/forms',
    name: 'Forms',
    state: 'openForms',
    icon: 'pe-7s-note2',
    views: [
      {
        path: '/forms/validation-forms', name: 'Validation Forms', mini: 'VF', component: ValidationForms,
      },
    ],
  },
  {
    path: '/calendar', name: 'Calendar', icon: 'pe-7s-date', component: Calendar,
  },
  {
    path: '/tables/DataTables', name: 'Animal Inventory', state: 'openTables', icon: 'pe-7s-news-paper', component: DataTables,
  },
  {
    redirect: true, path: '/', pathTo: '/UserPage', name: 'Dashboard',
  },
];
export default dashRoutes;
