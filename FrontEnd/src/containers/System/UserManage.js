import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'
import { GetAllUsers, createNewUserService } from '../../services/userService'
import ModalUser from '../System/ModalUser';


class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUser: [],
            isOpenModalUser: false,

        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact();
        //console.log('get user from node.js: ', response);
    }

    getAllUserFromReact = async () => {
        let response = await GetAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUser: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleModalUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode == 0) {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false
                })
            }
            else {    
                alert(response.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let arrUser = this.state.arrUser;
        return (
            <div className='scrollbar'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleModalUser}
                    createNewUser={this.createNewUser}

                />
                <div className="container mt-5">
                    <span className='Manager-title'>Manager User</span>
                    <div className='mx-1 '>
                        <button className='btn btn-primary px-3 border border-warning' onClick={() => this.handleAddNewUser()}><i className='fas fa-plus mr-2'></i>Add New User</button>
                    </div>
                    {
                        arrUser && arrUser.map((item, index) => {
                            return (
                                <div className='container mt-2 mb-5'>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" name="Email" placeholder="Email" defaultValue={item.Email} readonly />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputFirstNamel4">First Name</label>
                                            <input type="text" className="form-control"
                                                id="inputFirstNamel4" name="FristName"
                                                placeholder="First Name" defaultValue={item.FirstName} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputLastNamel4">Last Name</label>
                                            <input type="text" className="form-control"
                                                id="inputLastNamel4" name="LastName"
                                                placeholder="Last Name" defaultValue={item.LastName} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress"
                                            name="Address"
                                            placeholder="1234 Main St" defaultValue={item.Address} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPhoneNumber">Phone Number</label>
                                            <input type="text" className="form-control"
                                                id="inputPhoneNumber" name="PhoneNumber"
                                                placeholder="+84..." defaultValue={item.PhoneUser} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputRender">Sex</label>
                                            <input type="text" className="form-control"
                                                id="inputRender" name="Sex"
                                                defaultValue={item.Gender === 1 ? "Male" :
                                                    "Female"} />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputRole">Role</label>
                                            <input type="text" className="form-control"
                                                id="inputRole" name="Role"
                                                defaultValue={item.RoleId === '1' ?
                                                    "Admin" : "Custom"} />
                                        </div>
                                    </div>

                                    <button
                                        type="submit" className="btn btn-warning edit"
                                        name="SubmitEdit">Edit</button>
                                    <button
                                        type="submit" className="btn btn-danger deleted"
                                        name="SubmitDelete">Delete</button>

                                </div>
                            )
                        })
                    }

                </div>

            </div >
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
