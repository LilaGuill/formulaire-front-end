const params = {};
document.addEventListener("DOMContentLoaded", async () => {
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    params.name = document.querySelector("#name").value;
    params.email = document.querySelector("#email").value;
    params.subject = document.querySelector("#subject").value;
    params.message = document.querySelector("#message").value;

    sendData(params);
    form.reset();
  });
});

const sendData = async params => {
  try {
    let res = await axios.post(
      "https://formulaire-back-end.herokuapp.com/send",
      params
    );
    console.log(res.data);
  } catch (error) {
    console.log("Error", error.response.data.message || error.message);
  }
};
