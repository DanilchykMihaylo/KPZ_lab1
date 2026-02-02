function createForm() {
    const form = document.createElement("form");
    form.name = "registration";
    form.appendChild(createLabel("Логін:"));
    form.appendChild(createInput("text", "login"));
    form.appendChild(document.createElement("br"));
    form.appendChild(createLabel("Пароль:"));
    form.appendChild(createInput("password", "password"));
    form.appendChild(document.createElement("br"));
    form.appendChild(createLabel("Повторіть пароль:"));
    form.appendChild(createInput("password", "password2"));
    form.appendChild(document.createElement("br"));
    form.appendChild(createLabel("Стать:"));
    form.appendChild(createRadio("gender", "чоловік"));
    form.appendChild(document.createTextNode(" чоловік "));
    form.appendChild(createRadio("gender", "жінка"));
    form.appendChild(document.createTextNode(" жінка"));
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(createLabel("Вкажіть місто:"));
    const select = document.createElement("select");
    select.name = "city";
    select.size = 3;
    ["Житомир", "Київ", "Львів"].forEach(city => {
        const option = document.createElement("option");
        option.text = city;
        select.add(option);
    });
    form.appendChild(select);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(createLabel("Інтереси:"));
    form.appendChild(document.createElement("br"));
    ["футбол", "шахи", "малювання", "музика"].forEach(interest => {
        const checkbox = createCheckbox("interest", interest);
        form.appendChild(checkbox);
        form.appendChild(document.createTextNode(" " + interest + " "));
    });
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    const btnDiv = document.createElement("div");
    btnDiv.className = "buttons";
    const resetBtn = document.createElement("input");
    resetBtn.type = "reset";
    resetBtn.value = "Очистити";
    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "Відправити";
    btnDiv.appendChild(resetBtn);
    btnDiv.appendChild(submitBtn);
    form.appendChild(btnDiv);
    document.body.appendChild(form);
}

function createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
}

function createInput(type, name) {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    return input;
}

function createRadio(name, value) {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    return radio;
}

function createCheckbox(name, value) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;
    return checkbox;
}