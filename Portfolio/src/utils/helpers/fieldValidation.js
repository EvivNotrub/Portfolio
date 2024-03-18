function validName(name) {
  const regex = /^[\p{L}]([-']?[\p{L}]+)*( [\p{L}]([-']?[\p{L}]+)*)+$/iu;
  // const regex = /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/iu;
  // const regex = /^([\p{L}]{2,})+\s+([\p{L}\s]{2,})+$/iu;
  return regex.test(name);
}

function validMail(mail) {
  const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return mailRegex.test(mail);
}
// TODO: check for best regex for mail
// function isEmail(email) {
//   let regex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//   return regex.test(String(email).toLowerCase());
// }

function validPhoneNumber(phone) {
  const phoneRegex = /^\d{9,16}$/;
  return phoneRegex.test(phone);
}

// TODO: regex for message

export function validForm(name, mail, message, phone) {
  
  if (!name || !validName(name)) {
    alert("Please enter a valid name !");
    return false;
  }
  if (!mail || !validMail(mail)) {
    alert("Please enter a valid mail !");
    return false;
  }
  if (phone && !validPhoneNumber(phone)) {
    alert("Please enter a valid phone number !");
    return false;
  }
  if (!message) {
    alert("Please enter a valid message !");
    return false;
  }
  if (29 > message.length || message.length > 700) {
    alert("Please enter a message between 30 and 800 characters !");
    return false;
  }
  return true;
}
