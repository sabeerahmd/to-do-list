// App.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import './App.css'; // Import the custom CSS file

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            list: [],
        };
    }

    // Update user input
    updateInput(value) {
        this.setState({ userInput: value });
    }

    // Add new item
    addItem() {
        if (this.state.userInput !== "") {
            const newItem = {
                id: Math.random(), // Random ID to delete later
                value: this.state.userInput,
            };
            this.setState({
                list: [...this.state.list, newItem],
                userInput: "",
            });
        }
    }

    // Delete item
    deleteItem(id) {
        const updatedList = this.state.list.filter((item) => item.id !== id);
        this.setState({ list: updatedList });
    }

    // Edit item
    editItem(index) {
        const editedTodo = prompt("Edit the todo:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            const updatedList = [...this.state.list];
            updatedList[index].value = editedTodo;
            this.setState({ list: updatedList });
        }
    }

    render() {
        return (
            <Container>
                <Row className="title-row">
                    TODO LIST
                </Row>

                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Add item..."
                                size="lg"
                                value={this.state.userInput}
                                onChange={(e) => this.updateInput(e.target.value)}
                                aria-label="Add todo"
                            />
                            <Button
                                variant="dark"
                                className="mt-2"
                                onClick={() => this.addItem()}
                            >
                                ADD
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {this.state.list.map((item, index) => (
                                <ListGroup.Item
                                    key={item.id}
                                    variant="dark"
                                    action
                                    className="todo-item"
                                >
                                    {item.value}
                                    <span>
                                        <Button
                                            variant="light"
                                            onClick={() => this.deleteItem(item.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="light"
                                            onClick={() => this.editItem(index)}
                                        >
                                            Edit
                                        </Button>
                                    </span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
