import Axios from "axios";

export function downloadFile(type) {
    return Axios.get(`/api/reports/download?type=${type}`, {responseType: 'blob'});
}