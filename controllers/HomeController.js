const SendMailService = require('../services/SendMailService');

const HomeController = {
    index: (req, res) => {
        return res.render('index');
    },
    contactUs: (req, res) => {
        return res.render('contatos');
    },
    sendMail: async (req, res) => {
        const { name, email, message } = req.body;

        let mailData = {
            topic: 'Nova mensagem recebida do site',
            recipient: process.env.EMAIL,
            body: 'Nova mensagem recebida de: ' + name + ' <' + email + '>' + '\n' + message
        }

        await SendMailService.sendMail(mailData);
        return res.render('successo');
    }
}

module.exports = HomeController;