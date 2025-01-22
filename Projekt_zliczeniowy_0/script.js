function convertToJson() {
    alert("halo")
    let form = uzytkownik.getElementById("dataForm");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    let jsonData = JSON.stringify(formData);
    let jsonOutput = uzytkownik.getElementById("jsonOutput");
    jsonOutput.uzytkownik = "<pre>" + jsonData + "</pre>";
}