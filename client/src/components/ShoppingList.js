import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux'; // it allows us to basically get the state from redux to react component
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';//if you have component properties we should put them in proptypes(its kind of validation)

class ShoppingList extends Component {

   componentDidMount() {
        this.props.getItems();
   } //use it when you call an action or making an api request
   
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
        const {items} = this.props.allItems;
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

ShoppingList.propTypes = {
     getItems: PropTypes.func.isRequired,
     allItems: PropTypes.object.isRequired
};//setting proptypes

const mapStateToProps = state => ({

    allItems: state.allitems // we are matching a redux state to a component prop and we named it item because we named it that in our root reducer

}); //will map the state of item to a component property(eg to use it like this.props.items) 
//for only one param we dont need a round bracket 


export default connect(mapStateToProps, { getItems })(ShoppingList); //takes in 2 params: mapStateToProps and any action that we may use in this component
