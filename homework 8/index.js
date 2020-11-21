const findBestEmployee = function (employees) {
    // твій код

    let tasksNumber = 0;
    let result = 0;
    for(const key in employees){
        if (employees[key] > tasksNumber){
            tasksNumber = employees[key];
            result = key;
        }
    }
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux