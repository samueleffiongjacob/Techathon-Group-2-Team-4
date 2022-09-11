var formData = {
    userName: 'Fred',
    userEmail: 'Flintstone@gmail.com'
}

axios({
    method: 'post',
    url: '/addUser',
    data: FormData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });



    or




    const handleSubmit = async() => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("username", formValue.email)
        loginFormData.append("password", formValue.password)
      
        try {
          // make axios post request
          const response = await axios({
            method: "post",
            url: "/api/login",
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch(error) {
          console.log(error)
        }
      }








      const [sale, setSale] = useState("");
      const [district, setDistrict] = useState("");
      const [billing, setBilling] = useState("");
      const [customer, setCustomer] = useState("");
      const [product, setProduct] = useState("");
      var bodyFormData = new FormData();
      bodyFormData.append("sale", "12");
    
      bodyFormData.append("district", district);
      bodyFormData.append("billing", billing);
      bodyFormData.append("customer", customer);
      bodyFormData.append("product", product);
    
      axios({
        method: "post",
        url: "http://localhost:8080/form",
    
        data: { bodyFormData },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });


        or





        const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const formData = new FormData(form);
          axios
            .post("http://localhost:5000/update-profile", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        });