import React, { Component, Fragment } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
class SearchBar extends Component {
    state = {
        term: ''
    }

    handleSearchTermChange = term => {
        this.setState({ term });
        this.props.runSearch(term);
    }

    render() {
        return (
            <Form onSubmit={event => event.preventDefault()}>
                <FormGroup>
                    <Label for="term">Search Term</Label>
                    <Input 
                        type="term" 
                        name="term" 
                        id="term" 
                        placeholder="insert search term"
                        onChange={event => this.handleSearchTermChange(event.target.value)}
                        value={this.state.term}
                    />
                </FormGroup>
	        </Form>
        )
    }
}

export default SearchBar;