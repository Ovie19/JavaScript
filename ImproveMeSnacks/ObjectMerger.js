const mergeObjects = (objectOne, objectTwo) => {
    return {
        ...objectOne,
        ...objectTwo
    };
}

const personal = {
    name: "Kemi",
    age: 27
};

const professional = {
    role: "Designer",
    company: "TechCorp"
};

const mergedObject = mergeObjects(personal, professional);
console.log(mergedObject);