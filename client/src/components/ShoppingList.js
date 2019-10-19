import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    
    state={
        items : [
            { id: uuid(), name: "Milk"},
            { id: uuid(), name: "Eggs"},
            { id: uuid(), name: "Water"},
            { id: uuid(), name: "Chicken"}
        ]
    }

    addItem = () => {
        const name = prompt('Enter Item');
        if(name){
          this.setState(state => ({
            items: [...state.items, { id:uuid(), name }]
          }));
        }
      }

      deleteBtn = (id) => {
        //   console.log(id);
          this.setState({
            items: [...this.state.items.filter(item => item.id !== id)]
          });
      }

    render() {
        const {items} = this.state;
        // console.log(items);
        return (
            <Container>
                <Button 
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.addItem}>
                
                Add item
                
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    
                                    <Button
                                        className="removeBtn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteBtn.bind(this, id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        )
    }
}


export default ShoppingList
