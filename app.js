const profileDataArgs = process.argv.slice(2);


const printProfiledata = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};





printProfiledata(profileDataArgs);
