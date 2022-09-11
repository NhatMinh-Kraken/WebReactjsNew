import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'
import { GetAllUsers } from '../../services/userService'

class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUser: []
        }
    }

    async componentDidMount() {
        let response = await GetAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUser: response.users
            })
            console.log('check state user 1', this.state.arrUser);
        }
        console.log('get user from node.js: ', response);
    }


    render() {
        console.log('check state user 3', this.state)
        let arrUser = this.state.arrUser;
        return (
            <div className=''>
                <div className="container mt-5">
                    <span className='Manager-title'>Manager User</span>
                    {
                        arrUser && arrUser.map((item, index) => {
                            return (
                                <div className='container mt-2 mb-5'>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" name="Email" placeholder="Email" value={item.Email} readOnly />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputFirstNamel4">First Name</label>
                                            <input type="text" class="form-control"
                                                id="inputFirstNamel4" name="FristName"
                                                placeholder="First Name" value={item.FirstName} />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputLastNamel4">Last Name</label>
                                            <input type="text" class="form-control"
                                                id="inputLastNamel4" name="LastName"
                                                placeholder="Last Name" value={item.LastName} />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" class="form-control" id="inputAddress"
                                            name="Address"
                                            placeholder="1234 Main St" value={item.Address} />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputPhoneNumber">Phone Number</label>
                                            <input type="text" class="form-control"
                                                id="inputPhoneNumber" name="PhoneNumber"
                                                placeholder="+84..." value={item.PhoneUser} />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputRender">Sex</label>
                                            <input type="text" class="form-control"
                                                id="inputRender" name="Sex"
                                                value={item.Gender === 1 ? "Male" :
                                                    "Female"} />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label for="inputRole">Role</label>
                                            <input type="text" class="form-control"
                                                id="inputRole" name="Role"
                                                value={item.RoleId === '1' ?
                                                    "Admin" : "Custom"} />
                                        </div>
                                    </div>

                                    <button
                                        type="submit" class="btn btn-warning edit"
                                        name="SubmitEdit">Edit</button>
                                    <button
                                        type="submit" class="btn btn-danger deleted"
                                        name="SubmitDelete">Delete</button>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
