import express from "express";

const router = express.Router();

router.route('/').post((req, res) => {
    const { data } = req.body;
    const dataArr = [];
    const evenArr = [];
    const oddArr = [];
    const alpha = [];

    
    for (let i = 0; i < data.length; i++) {
        if (isNaN(data[i])) {
            alpha.push(data[i].toUpperCase());
        }
        else if (parseInt(data[i]) % 2 == 0) {
            evenArr.push(parseInt(data[i]));
        } 
        else {
            oddArr.push(parseInt(data[i]));
        }
    }

    const createData = {
        userId: "bhavya_dalela_16062003",
        roll_number: "2110990366",
        email: "bhavya0366.be21@chitkara.edu.in",
        even_numbers: evenArr,
        odd_numbers: oddArr,
        alphabets: alpha
    }

    res.status(200).send(createData);
}) 

export default router
