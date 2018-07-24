import React, { Component } from 'react';
import defaultAvatar from './assets/default-avatar.png';
import logo from './assets/logo.png';


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
			<nav className="navbar navbar-expand-lg bg-info">
				<div className="container">
					<div className="navbar-translate">
						<a className="navbar-brand" href="#homepage">
							<img src={logo} className="navbar-li" alt="logo" />
					   </a>
						<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-bar bar1"></span>
							<span className="navbar-toggler-bar bar2"></span>
							<span className="navbar-toggler-bar bar3"></span>
						</button>
					</div>

					<div className="collapse navbar-collapse justify-content-end" id="navigation">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#homepage">
									Home
								</a>
							</li>
							<li className="nav-item">
								<div className="dropdown">
									<a href="#profile" className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdownMenuLink1">
										<img src={ava} className="navbar-li rounded-circle" alt="avatar" />
										{this.props.user.username}
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
										<a className="dropdown-item" href="#profile"><i className="now-ui-icons users_single-02 icon-setting"></i> Profile</a>
										<a className="dropdown-item" href="#notifications"><i className="now-ui-icons ui-1_bell-53 icon-setting"></i> Notifications</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#setting"><i className="now-ui-icons loader_gear icon-setting"></i> Setting</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#logout"><i className="now-ui-icons ui-1_lock-circle-open icon-setting"></i> Log out</a>
									</ul>
								</div>
							</li>
						</ul>
					</div>
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
			<div className="col-sm-3">
				<fieldset className="rounded">
					<img src={ava} className="avatar-change-btn" alt="avatar" />
					<button type="button" className="btn btn-info avatar-change-btn" onClick={this.handleClick}>Update profile picture</button>
					<input id="avatar" type="file" className="file-disable-display" onChange={this.handleChange} accept="image/*" ref="fileInput" />
					<button className="file-disable-display" ref="submitAvatar"></button>
				</fieldset>
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
			<fieldset className="col-sm-7 rounded">
				<legend className="legend-mg">Profile</legend>
				<div className="col-sm-11">
					<div className="form-group input-tp">
						<label className="label-form col-sm-3" htmlFor="username">Username: </label>
						<input id="username" type="text" value={this.props.user.username} placeholder="Username" className="form-control col-sm-7 input-lt" disabled/>
					</div>
					
					<div className="form-group input-tp">
						<label className="label-form col-sm-3" htmlFor="password">Password: </label>
						<input id="password" type="password" value={this.props.user.password} placeholder="Password" className="form-control col-sm-7 input-lt" disabled/>
					</div>
					
					<div className="form-group input-tp">
						<label className="label-form col-sm-3" htmlFor="email">Email: </label>
						<input id="email" type="email" value={this.props.user.email} placeholder="Email" className="form-control col-sm-7 input-lt" disabled/>
					</div>
					
					<div className="form-group input-tp">
						<label className="label-form col-sm-3" htmlFor="cv">Upload CV: </label>
						<input id="cv" className="cv" type="file" onChange={this.handleCV} />
					</div>
					
					<div className="form-group input-tp">
						<label className="label-form col-sm-3" htmlFor="address">Address: </label>
						<input id="address" type="text" value={this.props.user.address} onChange={this.handleAddress} placeholder="Address" className="form-control col-sm-7 input-lt" />
					</div>
					
					<div className="form-group input-tp">
						<label className="label-form col-sm-3" htmlFor="school">School: </label>
						<input id="school" type="text" value={this.props.user.school} onChange={this.handleSchool} placeholder="School" className="form-control col-sm-7 input-lt" />
					</div>
					
					<div className="form-group input-tp">
						<label className="label-form col-sm-3" htmlFor="bio">About me: </label>
						<textarea id="bio" value={this.props.user.bio} onChange={this.handleBio} className="form-control textar-lt" placeholder="About me" rows="5"></textarea>
					</div>
					
					<div className="form-group input-tp">
						<input className="btn btn-info btn-round float-right" type="submit" value="Update profile" />
					</div>
				</div>
			</fieldset>
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
		<div className="container">
			<div className="row">
				<Avatar user={this.state.user} onAvatarChange={this.infoChange}/>
				<div className="col-sm-1"></div>
				<EditProfile user={this.state.user} onProfileChange={this.infoChange}/>
			</div>
		</div>
      </form>
    );
  }
}

export default App;
