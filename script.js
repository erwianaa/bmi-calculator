function getInputValues() {
    return {
      tinggi: parseInt(document.getElementById("tinggi").value),
      berat: parseInt(document.getElementById("berat").value)
    };
  }
  
  function validateValues(inputValues) {
    if (inputValues.tinggi < 0 || inputValues.tinggi == 0) {
      return "Tinggi tidak boleh kosong atau kurang dari 0";
    }
  
    if (inputValues.berat < 0 || inputValues.berat == 0) {
      return "Berat tidak boleh kosong atau kurang dari 0";
    }
  }
  
  function calculateBMI(inputValues) {
    let bmi = inputValues.berat / inputValues.tinggi / inputValues.tinggi * 10000;
    
    if (bmi <= 18.5) {
      return "underweight";
    }
    if (bmi <= 24.9) {
      return "Normal";
    }
    if (bmi <= 29.9) {
      return "Overweight";
    }
    
    return "Obesity";
  }
  
  function setErrorMessage(errorMessage) {
    document.getElementById("error").innerHTML = errorMessage;
  }
  
  function setOutput(bmiValue) {
    document.getElementById("output-bmi").innerHTML = bmiValue;
    document.getElementById("output").style.display = "block";
    document.getElementById("output-bmi").setAttribute("class", bmiValue.toLowerCase());
  }
  
  // main function
  function handleFormSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
  
    let values = getInputValues();
    let errMessage = validateValues(values);
    if (errMessage) {
      setErrorMessage(errMessage);
      return
    }
  
    let bmi = calculateBMI(values);
    console.log(bmi);
    setOutput(bmi);
  }
  
  document.getElementById("form").addEventListener("submit", handleFormSubmit);
  