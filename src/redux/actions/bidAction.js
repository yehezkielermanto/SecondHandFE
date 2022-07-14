import Swal from "sweetalert2";
const { REACT_APP_URLENDPOINT } = process.env;


export const createBid = (params) => async (dispatch) => {
    const { productId, userId, price } = params;
    try {
         const response = await fetch(
           REACT_APP_URLENDPOINT +
             "/api/v1/transaction?" +
             new URLSearchParams({ userId, productId,}),
           {
             method: "post",
             body: JSON.stringify({ price }),
             headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
             },
           }
         );
         const data = await response.json();
         console.log(data);
    } catch (error) {
        console.log(error.message);
    }   
}
