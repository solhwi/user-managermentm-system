import React, {Component} from 'react';
import CustomerDelete from './CustomerDelete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends Component{
    render(){
      return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell> 
                <TableCell><img src ={this.props.image}/></TableCell> 
                <TableCell>{this.props.name}</TableCell> 
                <TableCell>{this.props.birth}</TableCell> 
                <TableCell>{this.props.sex}</TableCell> 
                <TableCell>{this.props.job}</TableCell> 
                <TableCell>
                <CustomerDelete 
                    stateRefresh={this.props.stateRefresh}
                    id={this.props.id}
                />
                </TableCell>
            </TableRow>
        );
    }
}

// this는 해당 Component를 뜻함 Component의 props가 가진 name
export default Customer;