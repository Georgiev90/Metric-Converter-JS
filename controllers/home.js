
const Converter = require('../models/Converter');
module.exports = {

    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost:(req,res)=>{
        let converterBody=req.body;

        let converterParams=converterBody['converter'];

        let converter = new Converter();
        converter.Operand=Number(converterParams.Operand);
        converter.operator=converterParams.operator;
        converter.operator2=converterParams.operator2;

        let result = converter.convertResult();

        res.render('home/index',{'converter':converter,'result':result});
},
};
