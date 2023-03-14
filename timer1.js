const args = process.argv.slice(2);
let i = 0;
let speed = 0;

const timer = () => {
  if (args.length === 0) {
    return;
  } 
  if (i < args.length) {
    if (args[i] < 0 || typeof args[i] !== "number") {
      
    }
    process.stdout.write('\x07');
    speed = args[i] * 1000;
    i++;
    setTimeout(timer, speed)
  }

}

timer();

// The bug is the i because it is equal 0, it immediately runs so the beeping only happens twice 
// because it it based on the length of the args array