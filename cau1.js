var menu = ["rau xào", "thịt luộc", "gà rán"];
function ask() {
    let question = prompt("hãy nhập yêu cầu", "");
    if (question === "C") {
        let question = prompt("Bạn muốn ăn gì", "");
        let bought = [question]
        localStorage.setItem("bought", JSON.stringify(bought));
    }else if (question === "R") {
        alert("rau xào, thịt luộc, gà rán");
    }else if (question === "U") {
        let question = prompt("Bạn muốn ăn thêm gì", "");
        let data = localStorage.getItem("bought")
        data = JSON.parse(data)
        console.log(data);
        data.push(question);
        localStorage.setItem("bought", JSON.stringify(data));
    } else if (question === "D") {
        let question = prompt("Mời người dùng xóa món ăn đã chọn", "");
        let bought = localStorage.getItem("bought");
        let deleted = bought.indexOf(question);
        let data = JSON.parse(bought);
        data.splice(question,1);
        localStorage.setItem("bought", JSON.stringify(data))
    }
}
ask()