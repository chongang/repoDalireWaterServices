
function validateDWSM(content){
  if (content.startsWith("DWSM:")) {
    // Extract the remaining text after ":"
    var remainingText = content.substring(5);
    return remainingText;
  } else {
    return "invalid";
  }
}
