export const fetchCount = (amount = 1) => {
    return new Promise(async (reslove) => {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      reslove({ data });
    });
  };
  