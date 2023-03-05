function introduction(name) {
    return `Hi, my name is ${name}.`;
}

console.log(introduction("Aki"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Aki", "Ember.js"));

function introductionWithLanguageOptional(name, language) {
    if (!language) {
        return `Hi, my name is ${name} and I am learning to program in JavaScript.`;
    } else {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
}

console.log(introductionWithLanguageOptional("Aki"));