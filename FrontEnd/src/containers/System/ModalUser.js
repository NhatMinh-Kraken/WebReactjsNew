import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../System/ModalUser.scss'

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            RepeatPassword: '',
            Address: '',
            PhoneUser: '',
            Render: '',
            Role: ''
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }


    handleOnChangeInput = (event, id) => {

        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['FirstName', 'LastName', 'Email', 'Password', 'RepeatPassword', 'Address', 'PhoneUser', 'Render', 'Role'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewuser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            // Call API create modal
            this.props.createNewUser(this.state); // gọi đến cha
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={'abc'} centered size="lg">
                <ModalHeader toggle={() => { this.toggle() }} ><span style={{ fontSize: '14px', fontWeight: 'bold' }}>Create New User</span></ModalHeader>
                <div className='Form-Create-new-user'>
                    <ModalBody>
                        <div className="container">
                            <div className='row'>
                                <form>

                                    <div className='title-create-new-user'>
                                        <span>Thêm Người Dùng</span>
                                    </div>
                                    <div className='form-row'>
                                        <div className="user-box mb-4 col-md-6">
                                            <input type="text" id="registerName" className="form-control" name='Name' required onChange={(event) => { this.handleOnChangeInput(event, "FirstName") }} value={this.state.FirstName} />
                                            <label className="form-label" htmlFor="registerName">Name</label>
                                        </div>

                                        <div className="user-box mb-4 col-md-6">
                                            <input type="text" id="registerUsername" className="form-control" name='Username' required onChange={(event) => { this.handleOnChangeInput(event, "LastName") }} value={this.state.LastName} />
                                            <label className="form-label" htmlFor="registerUsername">Username</label>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="user-box mb-4 col-md-12">
                                            <input type="text" id="registerEmail" className="form-control" name='Email' required onChange={(event) => { this.handleOnChangeInput(event, "Email") }} value={this.state.Email} />
                                            <label className="form-label" htmlFor="registerEmail">Email</label>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="user-box mb-4 col-md-6">
                                            <input type="password" id="registerPassword" className="form-control" name='Password' required onChange={(event) => { this.handleOnChangeInput(event, "Password") }} value={this.state.Password} />
                                            <label className="form-label" htmlFor="registerPassword">Password</label>
                                        </div>

                                        <div className="user-box mb-4 col-md-6">
                                            <input type="password" id="registerRepeatPassword" className="form-control" name='RepeatPassword' required onChange={(event) => { this.handleOnChangeInput(event, "RepeatPassword") }} value={this.state.RepeatPassword} />
                                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat Password</label>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="user-box mb-4 col-md-12">
                                            <input type="text" id="registerAddress" className="form-control" name='Address' required onChange={(event) => { this.handleOnChangeInput(event, "Address") }} value={this.state.Address} />
                                            <label className="form-label" htmlFor="registerAddress">Address</label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className='user-box col-md-6'>
                                            <label htmlFor="inputPhoneNumber" className="form-labels">Phone Number</label>
                                            <input type="text" className="form-control"
                                                id="inputPhoneNumber" name="PhoneNumber" onChange={(event) => { this.handleOnChangeInput(event, "PhoneUser") }}
                                                placeholder="+84..." value={this.state.PhoneUser} />
                                        </div>
                                        <div className='user-box col-md-4'>
                                            <label htmlFor="inputRender" className="form-labels">Sex</label>
                                            <select id="inputRender" className="form-control"
                                                name="Render" onChange={(event) => { this.handleOnChangeInput(event, "Render") }} value={this.state.Render}>
                                                <option defaultValue="1">Male</option>
                                                <option defaultValue="2">Female</option>
                                            </select>
                                        </div>
                                        <div className="user-box col-md-2">
                                            <label htmlFor="inputRole" className="form-labels">Role</label>
                                            <select id="inputRole" className="form-control"
                                                name="Role" onChange={(event) => { this.handleOnChangeInput(event, "Role") }} value={this.state.Role}>
                                                <option defaultValue="1">Admin</option>
                                                <option defaultValue="2">Custom</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* <div className='col-12 d-flex justify-content-center'>
                                    <button className="btn btn-danger btn-block mb-3 col-4">Sign in</button>
                                </div> */}
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className='col-12 d-flex justify-content-center'>
                            <Button className='mb-3 col-4' color="danger" centered onClick={() => { this.handleAddNewuser() }}>Thêm</Button>{' '}
                        </div>
                    </ModalFooter>
                </div>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


