import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../System/ModalUser.scss';
import _ from 'lodash';


class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
            RepeatPassword: '',
            Address: '',
            PhoneUser: '',
            Gender: '',
            RoleId: ''
        }
    }

    componentDidMount() {
        let user = this.props.currentUser
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                FirstName: user.FirstName,
                LastName: user.LastName,
                Email: user.Email,
                Address: user.Address,
                PhoneUser: user.PhoneUser,
                Gender: user.Gender,
                RoleId: user.RoleId
            })
        }
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
        let arrInput = ['FirstName', 'LastName', 'Email', 'Address', 'PhoneUser', 'Gender', 'RoleId'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            // Call API edit modal
            this.props.EditUser(this.state); // gọi đến cha
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => { this.toggle() }} className={'abc'} centered="true" size="lg">
                <ModalHeader toggle={() => { this.toggle() }} ><span style={{ fontSize: '14px', fontWeight: 'bold' }}>Edit New User</span></ModalHeader>
                <div className='Form-Create-new-user'>
                    <ModalBody>
                        <div className="container">
                            <div className='row'>
                                <form>

                                    <div className='title-create-new-user'>
                                        <span>Sửa Thông Tin Người Dùng</span>
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
                                            <input type="text" id="registerEmail" className="form-control" name='Email' required disabled onChange={(event) => { this.handleOnChangeInput(event, "Email") }} value={this.state.Email} />
                                            <label className="form-labell" htmlFor="registerEmail">Email</label>
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
                                            <label htmlFor="inputGender" className="form-labels">Sex</label>
                                            <select id="inputGender" className="form-control"
                                                name="Gender" onChange={(event) => { this.handleOnChangeInput(event, "Gender") }} value={this.state.Gender}>
                                                <option value="0">Male</option>
                                                <option value="1">Female</option>
                                            </select>
                                        </div>
                                        <div className="user-box col-md-2">
                                            <label htmlFor="inputRoleId" className="form-labels">RoleId</label>
                                            <select id="inputRoleId" className="form-control"
                                                name="RoleId" onChange={(event) => { this.handleOnChangeInput(event, "RoleId") }} value={this.state.RoleId}>
                                                <option value="0">Admin</option>
                                                <option value="1">Custom</option>
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
                            <Button className='mb-3 col-4' color="danger" centered="true" onClick={() => { this.handleSaveUser() }}>Sửa</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


