const MAX_MESSAGE_LENGTH = 70 - 11 - 2; // max line width - left offset - right offset
const getPadAmount = (message) => {
    const minPadAmount = 15;
    const messageLength = message.length;
    if (messageLength < minPadAmount)
        return minPadAmount;
    if (messageLength > MAX_MESSAGE_LENGTH)
        return MAX_MESSAGE_LENGTH;
    return messageLength;
};
const gherSay = (message) => {
    const hour = new Date().getHours();
    const greetings = ["Good morning!", "Good afternoon!", "Good evening!"];
    let greeting = greetings[0];
    if (hour > 12)
        greeting = greetings[1];
    if (hour > 18)
        greeting = greetings[2];
    const padAmount = getPadAmount(message);
    const regex = new RegExp(`.{1,${padAmount}}`, "g");
    const messageParts = message.match(regex) ?? [" "];
    console.log(" ");
    console.log("   \x1b[33m%s\x1b[0m%s", `V/`, `   ╭${"─".repeat(padAmount + 2)}╮`);
    console.log(`  (o>  <│ ${greeting.padEnd(padAmount, " ")} │`);
    messageParts.forEach((messagePart, index) => {
        console.log(` ${index === 0 ? "_(()__" : index === 1 ? " ||   " : "     "} │ ${messagePart.padEnd(padAmount, " ")} │`);
    });
    console.log(`${messageParts.length < 2 ? "  ||    " : "        "}╰${"─".repeat(padAmount + 2)}╯`);
    console.log(" ");
};
export default gherSay;
