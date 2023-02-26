function doMultiplication() {

    const number = document.querySelector("input").value;
    const div = document.getElementById("table_content");

    div.innerText = "";

    if(!number) {

        alert("O valor do campo deve ser preenchido!");

    } else {

        for(var i = 0; i <= 10; i++) {
            const result = i*number;
            const p = document.createElement("p");
            const p_content = document.createTextNode(""+ i + " X " + number + " = " + result+"");
            p.appendChild(p_content);
            div.appendChild(p);

        }
    }
}