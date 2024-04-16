const score_model = require("../models/debart.model")

exports.save_player_data = async (params) => {
    try {
        let db_response = await score_model.insertMany(params);
        if (db_response) {
            return { status: true, status_code: 200, message: 'successfully uploaded data.' }
        }
        return { status: false, status_code: 203, message: 'Db operation failed.' }
    }
    catch (error) {
        return {
            status: false,
            status_code: 500,
            message: error.message
        }
    }
}