// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName};

const createNotEnumerableProperty = (propertyName) => {return Symbol(propertyName)};

const createProtoMagicObject = () => {
    function magicObj() {}
    magicObj.__proto__ = magicObj.prototype;
    return magicObj;
};

const incrementor = () => {
    if (!incrementor.__proto__.currentCount) {
        incrementor.__proto__.currentCount = 1; 
    }
    else result();

   incrementor.__proto__.toString = function() {
        return incrementor.__proto__.currentCount;
    }

    return result = function() {
        incrementor.__proto__.currentCount++;
        return result;
    }
};

const asyncIncrementor = () => {
    if (!asyncIncrementor.__proto__.count) {
        asyncIncrementor.__proto__.count = 1; 
    }
    else asyncIncrementor.__proto__.count++

    return Promise.resolve(asyncIncrementor.__proto__.count)
};

function* createIncrementer () {
    var index = 1;
        while(true)
        yield index++;
      }


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {return new Promise(function(resolve , reject) { setTimeout (resolve(param),2000) })};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = (arr) => { 
    return arr.sort( (a,b) => {return (count(a)-count(b)) } );
  
 function count(obj) {
     let countProto = 0;
     while ( obj.__proto__) {
         countProto++;
         obj = obj.__proto__;
     }
     return countProto;
 };
}
exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;