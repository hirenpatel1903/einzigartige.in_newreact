function validateEmail(email) {
    const re = /[\w'+-]+(\.[\w'+-]+)*@\w+([-.]\w+)*\.\w{2,24}/;
    return re.test(String(email).toLowerCase());
}

export {validateEmail};