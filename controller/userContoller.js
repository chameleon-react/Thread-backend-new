const userModel = require('../model/userModel')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')


exports.createUser = async (req, res) => {
    const { username, email, fName, lName, mobile, address, password } = req.body
    if (username && email && fName && lName && mobile && address && password) {
        try {
            const found = await userModel.findOne({ where: { username } })
            if (!found) {
                await userModel.create({
                    username,
                    email,
                    fName,
                    lName,
                    mobile,
                    address,
                    password
                })
                res.send(true)
            } else {
                res.send(false)
            }
        } catch (error) {
            console.log(error.message)
        }
    } else res.send(false)
}

exports.login = async (req, res) => {
    const { username, password } = req.body
    if (username && password) {
        try {
            const found = await userModel.findOne({
                where: {
                    username,
                    password
                }
            })
            if (found) {
                res.send(true)
            } else res.send(false)
        } catch (error) {
            console.log(error.message)
            res.send(false)
        }
    } else res.send(false)
}

exports.order = async (req, res) => {
    const { username, fabric, type, measurement, pannel, style, features, makingPrice, boxingAndPostal, totalPrice } = req.body
    const user = await userModel.findOne({ where: { username }, raw: true })
    if(username&& fabric && type && measurement && pannel && style && features && makingPrice && boxingAndPostal && totalPrice)
    {
        sgMail.send({
        to: user.email,
        from: 'muhammed916rashid@gmail.com',
        subject: 'test',
        cc: 'rashidchameleon@gmail.com',
        text: `username is ${username}`,
        html: `
        
        <h1 style='text-align: center;'>User Details</h1>
        <table style="border: 1px solid;margin:auto">
        <tr>
            <td style="border: 1px solid;" >Username</td>
            <td style="border: 1px solid;" >${username}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">First Name</td>
            <td style="border: 1px solid;">${user.fName}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">Last Name</td>
            <td style="border: 1px solid;">${user.lName}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">mobile No</td>
            <td style="border: 1px solid;">${user.mobile}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">Email</td>
            <td style="border: 1px solid;">${user.email}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">Flat No</td>
            <td style="border: 1px solid;">${user.address.flatNo}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">Place</td>
            <td style="border: 1px solid;">${user.address.place}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">LandMark</td>
            <td style="border: 1px solid;">${user.address.landmark}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">City</td>
            <td style="border: 1px solid;">${user.address.city}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">State</td>
            <td style="border: 1px solid;">${user.address.state}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">Country</td>
            <td style="border: 1px solid;">${user.address.country}</td>
        </tr>

        <tr>
            <td style="border: 1px solid;">Zip Code</td>
            <td style="border: 1px solid;">${user.address.zipcode}</td>
        </tr>

        </table>

        <h1 style="text-align: center;">Order Details</h1>

        <table style="border: 1px solid; margin:auto;">

            <tr>
                <td style="border: 1px solid;">Fabric</td>
                <td style="border: 1px solid;">${fabric}</td>
            </tr>

            <tr>
                <td style="border: 1px solid;">Fabric Type</td>
                <td style="border: 1px solid;">${type}</td>
            </tr>

            <tr>
                <td style="border: 1px solid;">Measurement</td>
                <td style="border: 1px solid;">${measurement}</td>
            </tr>

            <tr>
                <td style="border: 1px solid;">Pannel</td>
                <td style="border: 1px solid;">${pannel}</td>
            </tr>

            <tr>
                <td style="border: 1px solid;">Style</td>
                <td style="border: 1px solid;">${style}</td>
            </tr>

            <tr>
                <td style="border: 1px solid;">Features</td>
                <td style="border: 1px solid;">${features}</td>
            </tr>

            <tr>
                <td style="border: 1px solid;">Making Price</td>
                <td style="border: 1px solid;">${makingPrice}</td>
            </tr>

            <tr>
                <td style="border: 1px solid;">Boxed & Postage</td>
                <td style="border: 1px solid;">${boxingAndPostal}</td>
            </tr>

            <tr>
                <td style = "font-weight: bold;border: 1px solid">Total Price</td>
                <td style = "font-weight: bold;border: 1px solid">${totalPrice}</td>
            </tr>

        </table>
        `
    }).then(resp => {
        res.send(true)
        console.log('Order is success')
    }).catch(err => {
        res.send(false)
        console.log(err.message)
    })
    
}else res.send(false)
}