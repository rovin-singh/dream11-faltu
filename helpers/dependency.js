const xml2js = require('xml2js');
const excelToJson = require('convert-excel-to-json');

exports.format_data_unsc_debart = async (params) => {
    try {
        let indivisual_arr = params.CONSOLIDATED_LIST.INDIVIDUALS.INDIVIDUAL;
        let entity_arr = params.CONSOLIDATED_LIST.ENTITIES.ENTITY
        let arr1 = await Promise.all(indivisual_arr.map(async (item) => {
            return {
                data_id: item.DATAID,
                full_name: `${item?.FIRST_NAME || ''} ${item?.SECOND_NAME || ''} ${item?.THIRD_NAME || ''} ${item?.FOURTH_NAME || ''}`,
                reference_number: item?.REFERENCE_NUMBER,
                listed_on: item?.LISTED_ON,
                list_type: item?.UN_LIST_TYPE,
                comments: item?.COMMENTS1,
                title: item?.TITLE?.VALUE,
                nationality: item?.NATIONALITY?.VALUE,
                date_of_birth: item?.INDIVIDUAL_DATE_OF_BIRTH?.DATE || '',
                documents: item?.INDIVIDUAL_DOCUMENT,
                alias_name: item?.INDIVIDUAL_ALIAS,
                source: "unsc"
            }
        }));

        let arr2 = await Promise.all(entity_arr.map(async (item) => {
            return {
                data_id: item.DATAID,
                full_name: item.FIRST_NAME,
                reference_number: item?.REFERENCE_NUMBER,
                listed_on: item?.LISTED_ON,
                list_type: item?.UN_LIST_TYPE,
                comments: item?.COMMENTS1,
                title: item.TITLE?.VALUE,
                nationality: `${item.ENTITY_ADDRESS?.CITY || ''} ${item.ENTITY_ADDRESS?.COUNTRY || ''}`,
                date_of_birth: item?.INDIVIDUAL_DATE_OF_BIRTH?.DATE || '',
                documents: item?.INDIVIDUAL_DOCUMENT,
                alias_name: item?.ENTITY_ALIAS,
                source: "unsc"
            }
        }));
        return { status: true, data: [...arr1, arr2] }
    }
    catch (error) {
        console.log(error.message)
        return {
            status: false,
            status_code: 500,
            message: error.message
        }
    }
}

exports.xlsx_to_json_convertion = async (data) => {
    try {
        const result = excelToJson({
            source: data,
            // header: {
            //     rows: 1
            // },
        });
        console.log(result)
        return { status: true, status_code: 200, message: 'success', body: formt };
    }
    catch (error) {
        return {
            status: false,
            status_code: 500,
            message: error.message
        };
    }
}