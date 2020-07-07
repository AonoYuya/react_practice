import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoList(props){
  return (
    <List className="ul_tag">
      <ListItem className="li_tag">
        <ListItemText primary="番号" secondary="内容" className="input_area_first"/>
      </ListItem>
      {
        props.list.map((item,i) => (
          <ListItem key={i} className="li_tag">
            <ListItemText primary={i} secondary={item} className="input_area"/>
          </ListItem>
        ))
      }
    </List>
  );
}

export default TodoList;
