import * as Print from "expo-print";
import * as FileSystem from "expo-file-system";

export default class PDFHelper {

    static async CreatePDF(html) {
        const response = await Print.printToFileAsync({ 'html': html, 'width': 792, 'height': 612 });
        // console.log(response);
        return response;
    }
}