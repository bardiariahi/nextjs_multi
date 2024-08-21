// Function to capitalize only the first letter of a string
export function capitalizeFirstLetter(string) {
    if (!string) return ''; // Check if the string is empty or null
    return string.charAt(0).toUpperCase() + string.slice(1);
  }