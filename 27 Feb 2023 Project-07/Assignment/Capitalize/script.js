function mixColors() {
    const color1 = document.getElementById("color1").value.toLowerCase();
    const color2 = document.getElementById("color2").value.toLowerCase();
    let result;
  
    switch (`${color1}-${color2}`) {
      case "red-blue":
      case "blue-red":
        result = "purple";
        break;
      case "red-yellow":
      case "yellow-red":
        result = "orange";
        break;
      case "blue-yellow":
      case "yellow-blue":
        result = "green";
        break;
      default:
        result = "Invalid color combination";
        break;
    }
  
    document.getElementById("result").textContent = `Result: ${result}`;
}
  