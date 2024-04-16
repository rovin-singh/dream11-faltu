const helper_dependency = require("../helpers/dependency");
const helper_services = require("../helpers/services")
const admin_query = require("../query/admin.query");
exports.upload_xmls_data = async (req, res, next) => {
    try {
        let uploaded_data = req.files.scorelist.data;
        let response = await helper_dependency.xlsx_to_json_convertion(uploaded_data);
        if (response.status == true) {
            let data = response.body;
            let db_response = await admin_query.save_player_data(data);
            return res.status(db_response.status_code).json(db_response)
        }
        return res.status(response.status_code).json(formated_res)
    }
    catch (error) {
        console.log(error.message);
        next(error.message);
    }
}


