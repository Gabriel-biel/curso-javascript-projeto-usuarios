class UserController {
  constructor(formId ,tableId){
    this.fomrEl = document.getElementById(formId);
    this.tableEl = document.getElementById(tableId);
    
    this.onSubmit();
  }

  onSubmit(){
    this.fomrEl.addEventListener('submit', event => {
      event.preventDefault();

      let values = this.getValues()
      values.photo = '';

      this.getPhoto();

      this.addLine(this.getValues());
    });
  }

  getPhoto(callback){
    let fileReader = new FileReader();

    let elements = [...this.fomrEl.elements].filter(item => {
      if (item.name === 'photo')
      return item
    });

    let file = elements[0].files[0]

    fileReader.onload = () => {
      fileReader.result;
      
    };

    fileReader.readAsDataURL(file);
  }

  getValues(){

    let user = {};

    [...this.fomrEl.elements].forEach(function(fields, index){

      if(fields.name == 'gender') {
        if(fields.checked){
          user[fields.name] = fields.value
        }
      }else {
        user[fields.name] = fields.value
      }
    });
  
    return new User(
      user.name, 
      user.gender, 
      user.birth, 
      user.country, 
      user.email, 
      user.password, 
      user.photo, 
      user.admin);
  }

  addLine(dataUser) {
    
    this.tableEl.innerHTML = `
      <tr>
        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
        <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
          <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
          <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
      </tr>
    `
  }
}