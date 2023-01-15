const lordify = ({spouse: {firstname}}) => {
    console.log(`캔터베리의 ${firstname}`);
};

var reqularPerson = {
    firstname: "현석",
    lastname: "오",
    spouse: {
        firstname: "계영",
        lastname: "이"
    }
};

lordify(reqularPerson); // 캔터베리의 계영

