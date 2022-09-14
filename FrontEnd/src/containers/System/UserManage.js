import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../System/UserManage.scss'
import { GetAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService'
import ModalUser from '../System/ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';


class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUser: [],
            isOpenModalUser: false,
            isOpenEditUser: false,
            UserEdit: {}
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

    toggleModalEditUser = () => {
        this.setState({
            isOpenEditUser: !this.state.isOpenEditUser,
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

                // tạo xong xóa thông tin
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
            else {
                alert(response.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {

        try {
            let res = await deleteUserService(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            } else {
                alert(res.errMessage);
            }

        } catch (e) {
            console.log(e)
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenEditUser: true,
            UserEdit: user
        })
    }

    DoEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact()
                this.setState({
                    isOpenEditUser: false
                })
            } else {
                alert(res.errMessage)
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

                {this.state.isOpenEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenEditUser}
                        toggleFromParent={this.toggleModalEditUser}
                        currentUser={this.state.UserEdit}
                        EditUser={this.DoEditUser}
                    />
                }
                <div className="container mt-5">
                    <span className='Manager-title'>Manager User</span>
                    <div className='mx-1 '>
                        <button className='btn btn-primary px-3 border border-warning' onClick={() => this.handleAddNewUser()}><i className='fas fa-plus mr-2'></i>Add New User</button>
                    </div>
                    {
                        arrUser && arrUser.map((item, index) => {
                            return (
                                <div className='container mt-5 pb-5 Manager-border'>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label >Email</label>
                                            <input type="email" className="form-control" name="Email" placeholder="Email" value={item.Email} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label >First Name</label>
                                            <input type="text" className="form-control"
                                                name="FristName"
                                                placeholder="First Name" value={item.FirstName} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Last Name</label>
                                            <input type="text" className="form-control"
                                                name="LastName"
                                                placeholder="Last Name" value={item.LastName} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Address</label>
                                        <input type="text" className="form-control"
                                            name="Address"
                                            placeholder="1234 Main St" value={item.Address} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label >Phone Number</label>
                                            <input type="text" className="form-control"
                                                name="PhoneNumber"
                                                placeholder="+84..." value={item.PhoneUser} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label >Sex</label>
                                            <input type="text" className="form-control"
                                                name="Sex"
                                                value={item.Gender === '0' ? "Male" : "Female"} />
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label >Role</label>
                                            <input type="text" className="form-control"
                                                name="Role"
                                                value={item.RoleId === '0' ? "Admin" : "Custom"} />
                                        </div>
                                    </div>

                                    <button
                                        type="submit" className="btn btn-warning edit"
                                        name="SubmitEdit" onClick={() => this.handleEditUser(item)}><span><i className="far fa-edit mr-2"></i></span>Edit</button>
                                    <button
                                        type="submit" className="btn btn-danger deleted"
                                        name="SubmitDelete" onClick={() => this.handleDeleteUser(item)}><span><i className="far fa-trash-alt mr-2"></i></span>Delete</button>

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
