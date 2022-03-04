import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './fieldComponents/MyUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            
            <TextField source="phone" />
            <MyUrlField source="website" />
            
        </Datagrid>
    </List>
);