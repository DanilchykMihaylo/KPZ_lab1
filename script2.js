const FORM_CONFIG = {
    cities: ["Житомир", "Київ", "Львів"],
    interests: ["футбол", "шахи", "малювання", "музика"]
};

function createForm(config, container) {
    const form = document.createElement("form");
    form.name = "registration";

    addAuthFields(form);
    addGenderField(form);
    addCityField(form, config.cities);
    addInterestsField(form, config.interests);
    addButtons(form);

    container.appendChild(form);
}

function addAuthFields(form) {
    addInputField(form, "Логін:", "text", "login");
    addInputField(form, "Пароль:", "password", "password");
    addInputField(form, "Повторіть пароль:", "password", "password2");
}

function addInputField(form, label, type, name) {
    form.appendChild(createLabel(label));
    form.appendChild(createInput(type, name));
    form.appendChild(createBr());
}

function addGenderField(form) {
    form.appendChild(createLabel("Стать:"));
    ["чоловік", "жінка"].forEach(g => {
        form.appendChild(createRadio("gender", g));
        form.appendChild(document.createTextNode(" " + g + " "));
    });
    form.appendChild(createBr());
}

function addCityField(form, cities) {
    form.appendChild(createLabel("Вкажіть місто:"));
    const select = document.createElement("select");
    select.name = "city";

    cities.forEach(city => {
        const option = document.createElement("option");
        option.text = city;
        select.add(option);
    });

    form.appendChild(select);
    form.appendChild(createBr());
}

function addInterestsField(form, interests) {
    form.appendChild(createLabel("Інтереси:"));
    form.appendChild(createBr());

    interests.forEach(i => {
        form.appendChild(createCheckbox("interest", i));
        form.appendChild(document.createTextNode(" " + i + " "));
    });

    form.appendChild(createBr());
}

function addButtons(form) {
    const div = document.createElement("div");
    div.className = "buttons";

    div.appendChild(createInput("reset", null, "Очистити"));
    div.appendChild(createInput("submit", null, "Відправити"));

    form.appendChild(div);
}

function createLabel(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
}

function createInput(type, name, value) {
    const input = document.createElement("input");
    input.type = type;
    if (name) input.name = name;
    if (value) input.value = value;
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

function createBr() {
    return document.createElement("br");
}
