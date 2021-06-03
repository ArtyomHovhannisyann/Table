export const request = (url, method) =>
  new Promise((rslv, rjct) => {
    try {
      fetch(url, { method })
        .then((data) => data.json())
        .then((data) => rslv(data));
    } catch (err) {
      rjct(err);
    }
  });