function capitalizeNames(arr){
    return arr.map((str)=> {
        return str[0].toUpperCase().concat(str.substring(1))  
    })
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]