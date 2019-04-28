const User=require('./../model/user')
const Product=require('./../model/product')

exports.login=(req,res,next)=>{
    res.render("userLogin.ejs")
}

exports.userSignupSubmit=(req,res,next)=>{

    var emailExistCheck=new Promise((resolve,reject)=>{
        User.find({email:req.body.email})
        .then(result=>{
            if(result.length==0)
                resolve()
            else
            {
                reject("Email already exists!")
            }

        })
    })

    var usernameExistCheck=new Promise((resolve,reject)=>{
        User.find({userName:req.body.userName})
        .then(result=>{
            if(result.length==0)
                resolve()
            else
            {
                reject("username already exists!")
            }

        })
    })
    
    emailExistCheck
    .then(()=>{
        usernameExistCheck
        .then(()=>{
                                const user=new User({
                                    firstName:req.body.firstName,
                                    lastName:req.body.lastName,
                                    userName: req.body.userName,
                                    email: req.body.email,
                                    password: req.body.password,
                                    displayPicture: req.body.displayPicture
                                })
                                user.save()
                                .then(result=>{
                                    console.log("User added Successfully!")
                                    res.redirect('/')
                                })
                                .catch(err=>{
                                    if(err)
                                        console.log(err)
                                })
        })
        .catch(errMsg=>{
            console.log(errMsg)
        })
    })
    .catch(errMsg=>{
        console.log(errMsg)
    })
    
    
}

exports.userLoginSubmit=(req,res,next)=>{
    User.findOne({userName: req.body.userName,password: req.body.password})
    .then(user=>{
        if(user)
        {
            console.log("Login Successful!")
            console.log(user)
            Product.find()
            .then(result=>{
                //console.log(result)
                res.render('shop',{result: result,user:user});
            })    
        }
        else
        {
            console.log("Login not Successful!")
            res.redirect('/')
        }
    })
    .catch(err=>{
        console.log(err)
    })
}



module.exports.shop=(req,res,next)=>
{
        Product.find()
        .then(result=>{
            //console.log(result)
            res.render('shop',{result: result});
        })    
}

module.exports.getDetails=(req,res,next)=>
{
    Product.findOne({_id:req.params.productId})
    .then(result=>{
        res.render('details.ejs',{result:result})
    })
    .catch(err=>{
        if(err)
            console.log(err)
    })
}
