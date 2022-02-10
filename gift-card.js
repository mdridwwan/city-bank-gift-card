function cardDistribution(userInfo) {
    let cards = [];
    userInfo.forEach(function (user, index) {
        //step 1 : take first 2 characters from the district name and make it capital letter
        let district = user.district.substring(0, 2).toUpperCase();
        //step 2: From current year pick last two number
        let currentYear = user.currenYear.toString().substring(2, 4);
        //step 3: Concat first two numbers of the user postal number.
        let postalNo = user.postNo.toString().substring(0, 2);
        //step 4 : Add user birthdate 4 digit year
        let birthdate = user.birthYear;
        //step 5 : After that generate serial number with padding 0 in left from each user
        let serial = String(index + 1).padStart(6, "0");
        //step 6 : If the last number of the card is even, give the user Red Rose , if odd give white Rose.
        let gift = index % 2 === 0 ? "W" : "R";
        newCard = {
            cardNumber: district + currentYear + postalNo + birthdate + serial,
            gift: gift,
            priority: user.priority,
        };
        cards.push(newCard);
    });
    cards.sort(function (a, b) {
        let cardA = a.cardNumber.toUpperCase(); // ignore upper and lowercase
        let cardB = b.cardNumber.toUpperCase(); // ignore upper and lowercase
        if (cardA < cardB) {
            return -1;
        }
        if (cardA > cardB) {
            return 1;
        }

        return 0;
    });
    cards.sort(function (a, b) {
        return a.priority - b.priority;
    });
    console.log(cards);
}

//demo data
var newInfo = [
    {
        name: "Mr Rashed",
        birthYear: 1999,
        currenYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2,
    },
    {
        name: "Mr Raju",
        birthYear: 1995,
        currenYear: 2022,
        district: "Rajshahi",
        postNo: 1211,
        priority: 1,
    },
    {
        name: "Md Ridwan",
        birthYear: 2003,
        currenYear: 2022,
        district: "Dhaka",
        postNo: 1414,
        priority: 1,
    },
];

cardDistribution(newInfo); //output goes here...

