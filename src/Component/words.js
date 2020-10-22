
export const lists = [
    "UBUNTU",
    "PYTHON",
    "GOOGLE",
    "MASTER",
    "NOBITA",
    "CORONA",
    "across",
    "acting",
    "action",
    "active",
    "adding",
    "adjust",
    "adults",
    "animal",
    "beauty",
    "begins",
    "belief",
    "camera",
    "campus",
    "cancer",
    "choice",
    "damage",
    "debate",
    "delete",
    "degree",
    "doctor",
    "dollor",
    "eating",
    "editor",
    "effort",
    "energy",
    "errors",
    "factor",
    "failed",
    "filter",
    "format",
    "future",
    "ground",
    "groups",
    "laptop"
]
export function choice(arr){
    let ri = Math.floor(Math.random()*arr.length);
    return arr[ri].toUpperCase();
}

export function intersection(setA, setB) {
    let intersectionSet = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            intersectionSet.add(elem)
        }
    }
    return intersectionSet;
}