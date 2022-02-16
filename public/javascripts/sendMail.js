
const contactForm = document.getElementById("form_box_desktop")
const nome = document.getElementById("field_contato_nome_desktop");
const sobrenome = document.getElementById("field_contato_sobrenome_desktop");
const email = document.getElementById("field_contato_email_desktop");
const message = document.getElementById("field_contato_mensagem_desktop");
const submit = document.getElementById("contato_submit_desktop")


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: nome.value,
        lastName: sobrenome.value,
        mail: email.value,
        message: message.value
    }

    axios.post("https://localhost:4000/contatos", formData).then((results) => {
        console.log(results)
        window.location.href = results.data.url
    })

})