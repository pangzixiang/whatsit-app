import Main from '../pages/main';
import Settings from '../pages/settings';

const RouterMapping = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/settings',
    component: <Settings />,
  },
];

export default RouterMapping;
