export function ping(addr) {
    let resp = ""
    let body = {"text": "hello"};
    let request = new XMLHttpRequest();
    request.open("POST", addr, false); // Синхроный запрос, вызывает тормоз
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("charset", "utf-8");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200 || request.status == 0) {
                let content = request.responseText;
                let json = JSON.parse(content);
                resp = json
            }
        }
    }
    request.send(JSON.stringify(body));
    return resp;
}
