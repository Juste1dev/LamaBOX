const ram = new Memory(1024 * 1024);

const output = document.getElementById("output");
const command = document.getElementById("command");

function print(text) {
    output.textContent += text + "\n";
}

command.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const value = command.value;

    if (value === "") return;

    print("> " + value);

    command.value = "";
});