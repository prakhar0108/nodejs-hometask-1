process.stdin.on("data", (data) => {
  data = data.toString();
  const reverseString = data.split("").reverse().join("");
  process.stdout.write(reverseString);
});
