class User {
  constructor(name, gender, birth, country, email, password, photo, admin) {
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._email = email;
    this._password = password;
    this._photo = photo;
    this._admin = admin;
    this._register = new Date();
  }

  get register() {
    return this._register
  }

  get name() {
    return this._name;
  }

  get gender() {
    return this._gender
  }

  get birth() {
    this._birth
  }

  get country(){
    this._country
  }

  get email() { 
    this._email
  }

  get password() {
    this._password
  }

  get admin(){  
    this._admin
  }

  get photo() {
    this._photo
  } 
  set photo(value) {
    this._photo = value
  }

}