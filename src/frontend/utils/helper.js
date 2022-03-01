const ConvertSystemNameToURLName = (systemName) => {
    if (systemName.toString().toLowerCase() === "management") {
        return "admin";
    } else if (systemName.toString().toLowerCase() === "inspection") {
        return "checkup";
    } else if (systemName.toString().toLowerCase() === "mycarte") {
        return "user";
    } else {
        return "master";
    }
};

const ConvertURLNameToSystemName = (urlName) => {
    if (urlName.toString().toLowerCase() === "admin") {
        return "MANAGEMENT";
    } else if (urlName.toString().toLowerCase() === "checkup") {
        return "INSPECTION";
    } else if (urlName.toString().toLowerCase() === "user") {
        return "MYCARTE";
    } else {
        return "ALC-MAINTENANCE";
    }
};

const ConvertToDateJapanese = (date) => {
    var dates = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', { dateStyle: 'full' }).format(date);
    var yerCovert = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date)
    var dateSlice = dates.slice(0, dates.length - 3);
    var checkIndexYers = dateSlice.indexOf("年");
    var dateConvert = "(" + dateSlice.slice(0, checkIndexYers) + "年)" + yerCovert + dateSlice.slice(checkIndexYers, dateSlice.length);
    return dateConvert;
}

const TimeDelay = (timeDelay) => {
    return new Promise(res => setTimeout(res, timeDelay));
}

export const helper = {
    ConvertSystemNameToURLName,
    ConvertURLNameToSystemName,
    ConvertToDateJapanese,
    TimeDelay
};