const getAdvice = () => {
  axios.get("https://api.adviceslip.com/advice").then(response => {
    let advice = response.data.slip.advice;

    //dont repeted the same advice
    let lastAdvice = document.getElementById("advice").innerHTML;
    let newAdvice =
      (response.data.slip.advice = `"${response.data.slip.advice}"`);
    if (newAdvice === lastAdvice) {
      getAdvice();
    } else {
      let adviceId = response.data.slip.id;
      console.log(advice);
      document.getElementById("id-note").innerHTML = adviceId;
      document.getElementById("advice").innerHTML = newAdvice;
    }
  });
};
