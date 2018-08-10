import React, { Component } from 'react';
import defaultAvatar from './assets/default-avatar.png';
import logo from './assets/logo.png';
import favicon from './assets/favicon.png';


class Navbar extends Component {
	render() {
		var ava;
		if (this.props.user.avatar === null) {
			ava = defaultAvatar;
		}
		else {
			ava = this.props.user.avatar;
		}
		return(
			<nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
			  <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
				<a className="navbar-brand brand-logo" href="#homepage"><img src={logo} alt="logo" /></a>
				<a className="navbar-brand brand-logo-mini" href="index.html"><img src={favicon} alt="logo" /></a>
			  </div>
			  <div className="navbar-menu-wrapper d-flex align-items-stretch">
				<div className="search-field d-none d-md-block">
				  <div className="d-flex align-items-center h-100">
					<div className="input-group">
					  <div className="input-group-prepend bg-transparent">
						  <i className="input-group-text border-0 mdi mdi-magnify"></i>                
					  </div>
					  <input id="search" type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
					</div>
				  </div>
				</div>
				
				<ul className="navbar-nav navbar-nav-right">
				
				  <li className="nav-item nav-logout d-none d-lg-block">
					<a className="nav-link" href="#homepage">
					  <i className="mdi mdi-home"></i>
					</a>
				  </li>
				  
				  <li className="nav-item dropdown">
					<a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#d" data-toggle="dropdown" aria-expanded="false">
					  <i className="mdi mdi-email-outline"></i>
					  <span className="count-symbol bg-warning"></span>
					</a>
					<div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
					  <h6 className="p-3 mb-0">Messages</h6>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item preview-item">
						<div className="preview-thumbnail">
							<img src={defaultAvatar} alt="ava" className="profile-pic" />
						</div>
						<div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
						  <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Minh send you a message</h6>
						  <p className="text-gray mb-0">
							1 Minutes ago
						  </p>
						</div>
					  </a>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item preview-item">
						<div className="preview-thumbnail">
							<img src={defaultAvatar} alt="ava" className="profile-pic" />
						</div>
						<div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
						  <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Minh dz send you a message</h6>
						  <p className="text-gray mb-0">
							15 Minutes ago
						  </p>
						</div>
					  </a>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item preview-item">
						<div className="preview-thumbnail">
							<img src={defaultAvatar} alt="ava" className="profile-pic" />
						</div>
						<div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
						  <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
						  <p className="text-gray mb-0">
							18 Minutes ago
						  </p>
						</div>
					  </a>
					  <div className="dropdown-divider"></div>
					  <h6 className="p-3 mb-0 text-center">4m new messages</h6>
					</div>
				  </li>
				  
				  <li className="nav-item dropdown">
					<a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#d" data-toggle="dropdown">
					  <i className="mdi mdi-bell-outline"></i>
					  <span className="count-symbol bg-danger"></span>
					</a>
					<div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
					  <h6 className="p-3 mb-0">Notifications</h6>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item preview-item">
						<div className="preview-thumbnail">
						  <div className="preview-icon bg-success">
							<i className="mdi mdi-calendar"></i>
						  </div>
						</div>
						<div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
						  <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
						  <p className="text-gray ellipsis mb-0">
							Just a reminder that you have an event today
						  </p>
						</div>
					  </a>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item preview-item">
						<div className="preview-thumbnail">
						  <div className="preview-icon bg-info">
							<i className="mdi mdi-link-variant"></i>
						  </div>
						</div>
						<div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
						  <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
						  <p className="text-gray ellipsis mb-0">
							New admin wow!
						  </p>
						</div>
					  </a>
					  <div className="dropdown-divider"></div>
					  <h6 className="p-3 mb-0 text-center">See all notifications</h6>
					</div>
				  </li>
				
				  <li className="nav-item nav-profile dropdown">
					<a className="nav-link dropdown-toggle" id="profileDropdown" href="#d" data-toggle="dropdown" aria-expanded="false">
					  <div className="nav-profile-img">
						<img src={ava} alt="ava" />
						<span className="availability-status online"></span>             
					  </div>
					  <div className="nav-profile-text">
						<p className="mb-1 text-black">{this.props.user.username}</p>
					  </div>
					</a>
					<div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
					  <a className="dropdown-item" href="#profile">
						<i className="mdi mdi-account-card-details mr-2 text-primary"></i>
						Profile
					  </a>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item" href="#setting">
						<i className="mdi mdi-settings mr-2 text-primary"></i>
						Setting
					  </a>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item" href="#logout">
						<i className="mdi mdi-logout mr-2 text-primary"></i>
						Log out
					  </a>
					</div>
				  </li>

				</ul>
				<button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
				  <span className="mdi mdi-menu"></span>
				</button>
			  </div>
			</nav>
		);
	}
}

class Avatar extends Component {
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.onAvatarChange(e.target.files[0], this.props.user.cv, this.props.user.bio, this.props.user.address, this.props.user.school);
		this.refs.submitAvatar.click();
	}
		
	handleClick() {
		this.refs.fileInput.click();
	}
		
	render() {
		var ava;
		if (this.props.user.avatar === null) {
			ava = defaultAvatar;
		}
		else {
			ava = this.props.user.avatar;
		}
		return(
			<div className="col-md-3 grid-margin stretch-card">
              <div className="card card-ovl">
				<div className="card-pad card-pad-ovl">
					<img src={ava} className="avatar-change-btn ava-mar" alt="avatar" />
					<button type="button" className="btn btn-gradient-primary btn-fw avatar-change-btn" onClick={this.handleClick}>Update profile picture</button>
					<input id="avatar" type="file" className="file-disable-display" onChange={this.handleChange} accept="image/*" ref="fileInput" />
					<button className="file-disable-display" ref="submitAvatar"></button>
				</div>
			  </div>
            </div>
		);
	}
	
}

class EditProfile extends Component {
	
	constructor(props) {
		super(props);
		this.handleCV = this.handleCV.bind(this);
		this.handleAddress = this.handleAddress.bind(this);
		this.handleSchool = this.handleSchool.bind(this);
		this.handleBio = this.handleBio.bind(this);
	}
	
	handleCV(e) {
		this.props.onProfileChange(this.props.user.avatarFile, e.target.files[0], this.props.user.bio, this.props.user.address, this.props.user.school);
	}
	
	handleAddress(e) {
		this.props.onProfileChange(this.props.user.avatarFile, this.props.user.cv, this.props.user.bio, e.target.value, this.props.user.school);
	}
	
	handleSchool(e) {
		this.props.onProfileChange(this.props.user.avatarFile, this.props.user.cv, this.props.user.bio, this.props.user.address, e.target.value);
	}
	
	handleBio(e) {
		this.props.onProfileChange(this.props.user.avatarFile, this.props.user.cv, e.target.value, this.props.user.address, this.props.user.school);
	}
	
	render() {
		return(		
			<div className="col-md-7 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Profile</h4>
				  
                    <div className="form-group">
						<label htmlFor="username">Username</label>
						<input id="username" type="text" value={this.props.user.username} placeholder="Username" className="form-control" disabled/>
                    </div>
					
                    <div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" type="password" value={this.props.user.password} placeholder="Password" className="form-control" disabled/>
                    </div>
					
                    <div className="form-group">
						<label htmlFor="email">Email</label>
						<input id="email" type="email" value={this.props.user.email} placeholder="Email" className="form-control" disabled/>
                    </div>
					
					<div className="form-group">
                      <label htmlFor="cv">Upload CV</label>
                      <input id="cv" type="file" name="img[]" onChange={this.handleCV} className="file-upload-default" />
                      <div className="input-group col-xs-12">
                        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload CV" />
                        <span className="input-group-append">
                          <button className="file-upload-browse btn btn-gradient-primary" type="button">Upload</button>
                        </span>
                      </div>
                    </div>
					
                    <div className="form-group">
						<label htmlFor="address">Address</label>
						<input id="address" type="text" value={this.props.user.address} onChange={this.handleAddress} placeholder="Address" className="form-control" />
                    </div>
					
					<div className="form-group">
						<label htmlFor="school">School</label>
						<input id="school" type="text" value={this.props.user.school} onChange={this.handleSchool} placeholder="School" className="form-control" />
                    </div>
					
					<div className="form-group">
						<label htmlFor="bio">About me</label>
						<textarea id="bio" value={this.props.user.bio} onChange={this.handleBio} className="form-control" placeholder="About me" rows="5"></textarea>
                    </div>
					
                    <button type="submit" className="btn btn-gradient-primary mr-2">Update profile</button>
                </div>
              </div>
            </div>
		);
	}
	
}

class App extends Component {
  
  constructor(props) {
	  super(props);
	  this.infoChange = this.infoChange.bind(this);
	  this.state = {
		  user: {
			  email: "",
			  username: "Default username",
			  password: "",
			  avatar: null,
			  avatarFile: null,
			  cv: null,
			  bio: "",
			  address: "",
			  school: ""
		  }
	  };
  }
    
  infoChange(newAvatar, newCV, newBio, newAddress, newSchool) {
	  this.setState({
		  user: {
			  email: this.state.user.email,
			  username: this.state.user.username,
			  password: this.state.user.password,
			  avatarFile: newAvatar,
			  avatar: this.state.user.avatar,
			  cv: newCV,
			  bio: newBio,
			  address: newAddress,
			  school: newSchool
		  }
	  });
  }
  
  render() {
    return (
	  <form method="POST">
		<Navbar user={this.state.user}/>
		<div className="container-fluid page-body-wrapper">
			<div className="content-wrapper">
				<div className="row ctn">
				<Avatar user={this.state.user} onAvatarChange={this.infoChange}/>
					<div className="col-md-1"></div>
					<EditProfile user={this.state.user} onProfileChange={this.infoChange}/>
				</div>
			</div>
			</div>
      </form>
    );
  }
}

export default App;
