import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef 

    state = {
        name: '',
        phone: '',
    }
    
    handleChang = (e) => {
        this.setState({
        [e.target.name]: e.target.value 
        //e.tatget.name <-- input의 name 를 따라간다. 
    });
    }

    handelSubmit =(e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
        this.input.current.focus();

    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
              <input 
                name="name"
                placeholder="이름" 
                onChange={this.handleChang}
                value={this.state.name}
                ref={ this.input }
              />
              <input 
                name="phone"
                placeholder="전화번호" 
                onChange={this.handleChang}
                value={this.state.phone} 
              />
              <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;       