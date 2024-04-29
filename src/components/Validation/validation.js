const percentRegex = /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/;

const validation = (key, value) => {
    switch (key) {
        case "name":
        case "overview":
            return !!value
        case "percent":
            return percentRegex.test(value);
        default:
            return true;
    }
}

export default validation;