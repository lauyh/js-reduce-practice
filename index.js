// Expected result to be an object and have following information:
// - Total number of orders
// - Total disputed orders
// - Total disputed sales amount (included tax)
// - Total sales amount (included tax)
// - Total unique users
// - Total average sales per unique user

const orders = [
  {
    userId: 996,
    subtotal: 30500.35,
    tax: 0.06,
    isDisputed: true,
    isShipped: true,
  },
  { userId: 910, subtotal: 100, tax: 0.08, isDisputed: true },
  { userId: 912, subtotal: 4200.11, tax: 0.06 },
  { userId: 996, subtotal: 99.12, tax: 0.06, isDisputed: false },
  { userId: 910, subtotal: 0, tax: 0.08, isShipped: true },
  { userId: 996, subtotal: 10, tax: 0.06, isDisputed: true },
];
/**
 * TODO: - count unique user id, sum of subtotal, sum of tax, count isDisputed(true),  isShipped(true) count
 */
let userId = [];
const result = orders.reduce((partial, val) => {
  // console.log(val);
  // partial[val[]]

  let key = Object.keys(val); // get the list of the key
  for (let k of key) {
    if (partial) {
      if (k in partial) {
        // console.log(k);
        // console.log(val);
        if (k == "userId") {
          if (!userId.includes(val.userId)) {
            partial["userId"]++;
          }
        } else if (k == "subtotal" || k == "tax") {
          partial["subtotal"] += val["subtotal"];
          partial["tax"] += val["tax"];
        } else if (k == "isDisputed") {
          if (val["isDisputed"] === true) {
            partial["isDisputed"]++;
          }
        } else {
          partial["isShipped"]++;
        }
      }
    }
    if (!partial || !partial[k]) {
      partial[k.toString()] = 1;
      console.log(k);
      if (k === "userId") {
        userId.push(val.userId);
      }
    }
  }

  return partial;
}, {});

console.log(result);
