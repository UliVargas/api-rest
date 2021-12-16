const axios = require("axios");

const getEstacionamientos = async(req, res) => {
    const resp = await axios.get("https://dev.parcoapp.com/api/Parkings").then(data => data.data);

    res.status(200).json(resp)
};

module.exports = getEstacionamientos;