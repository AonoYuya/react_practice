import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

function TodoList(props){
  return (
    <List className="ul_tag">
      <ListItem className="li_tag">
        <ListItemText primary="番号" secondary="内容" className="input_area"/>
      </ListItem>
      {
        props.list.map((item,i) => (
          <ListItem key={i} className="li_tag" id={`todo_${i}`}>
            <ListItemText primary={i} secondary={item} className="input_area"/>
            <Button variant="contained" color="primary" onClick={props.handleClick} data-number={i}>
              編集
            </Button>
          </ListItem>
        ))
      }
    </List>
  );
}

export default TodoList;
