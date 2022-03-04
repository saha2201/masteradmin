import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate  } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
//auth-provider 

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
      <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
          <Resource name="users" list={UserList} icon={UserIcon}/>
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      </Admin>
  );

export default App;