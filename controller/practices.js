const greet = (req, h) => {
    const { name = 'Stranger' } = req.params;
    const { lang = 'en' } = req.query;

    let msg = `Hello, ${name}`;
    if (lang === 'id') {
        msg = `Hai, ${name}`;
    }

    return h.response(msg).code(200);
}

module.exports = { greet };