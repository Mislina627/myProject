function handleSubmit(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll("#name, #surname, #email, #message");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.border = "2px solid red"; 
      } else {
        input.style.border = ""; 
      }
    });

    if (!isValid) {
      alert("Lütfen tüm alanları doldurunuz!");
    } else {
      alert("Mesajınız gönderildi!");
    }
  }