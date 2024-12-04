function whichIsLarger(f, g) {
    const valueF = f();
    const valueG = g();
    if (valueF > valueG) {
      return "f";
    } else if (valueG > valueF) {
      return "g";
    } else {
      return "neither";
    }
  }
  
  console.log(whichIsLarger(() => 5, () => 10));  // Outputs: "g"
  console.log(whichIsLarger(() => 25, () => 25)); // Outputs: "neither"
  console.log(whichIsLarger(() => 505050, () => 5050)); // Outputs: "f"
  