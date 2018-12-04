function f (name, job) {
console.log("My name is " + name + " and I am a " + job + ".");
}
f("John", "fireman");
f.apply(undefined, ["Susan", "school teacher"]);
f.call(undefined, "Claude", "mathematician");
f.apply(undefined, {0:"Susan", 1:"school teacher", length: 2});
// apply(f, ["Susan", "school teacher"]);
// call(f, "Claude", "mathematician");
