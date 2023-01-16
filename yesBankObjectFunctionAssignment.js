console.log(`Objetc with data member and member function`);

console.log(`-------Axis Bank-----------`);

const sbiBank = {
    BankName:"state bank of India",
    Location:"Saswad",
    AccountNumber:093110100010001000,
    ifsc:"SBIK0000097",
    InterestRate: "8%",
    showDetails:function (){
        console.log(sbiBank);
    }
}
sbiBank.showDetails();

console.log(`-------Axis Bank-----------`);
const OBCBank={
    bankName:" Oriental Bank Of Commerce",
    location :"Baramati",
    AccountNumber:10000000009696,
    ifsc:"OBCB1122334455",
    interestRate:"8.20%",
    showDetails:function (){
        console.log(OBCBank);
}   
}
OBCBank.showDetails();

console.log(`-------Vijaya Bank    -----------`);
const VijayaBank= {
    bankName:" Vijaya Bank",
    location :"Bopgaon",
    AccountNumber:10000000009797,
    ifsc:"vijbo1122337722",
    interestRate:"7.22%",
    showDetails:function (){
        console.log(VijayaBank);
    }
}
VijayaBank.showDetails();

console.log(`-------Phadatare Bank    -----------`);
const PhadatareBank= {
    bankName:" Phadatare Bank",
    location :"Purandar",
    AccountNumber:10000000002727,
    ifsc:"PB01122337722",
    interestRate:"4.20%",
    showDetails:function (){
        console.log(PhadatareBank);
    }
}
PhadatareBank.showDetails();
