var fields = document.querySelectorAll('#form-user-create [name]');
var user = {}
fields.forEach(function(fields, index){

  if(fields.name == 'gender') {
    if(fields.checked){
      user[fields.name] = fields.value
    }
  }else {
    user[fields.name] = fields.value
  }
});
console.log(user)