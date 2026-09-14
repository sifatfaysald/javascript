// break and continue

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // stops the loop entirely
  }
  console.log(`break-demo: ${i}`);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // skips this iteration
  }
  console.log(`continue-demo (odd only): ${i}`);
}

// labeled break for nested loops
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue outer;
    console.log(`i=${i}, j=${j}`);
  }
}
