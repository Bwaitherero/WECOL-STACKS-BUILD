"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_schemas_1 = require("@0x/json-schemas");
var utils_1 = require("@0x/utils");
var _ = require("lodash");
var validUrl = require("valid-url");
var HEX_REGEX = /^0x[0-9A-F]*$/i;
exports.assert = {
    isBigNumber: function (variableName, value) {
        var isBigNumber = _.isObject(value) && value.isBigNumber;
        exports.assert.assert(isBigNumber, exports.assert.typeAssertionMessage(variableName, 'BigNumber', value));
    },
    isValidBaseUnitAmount: function (variableName, value) {
        exports.assert.isBigNumber(variableName, value);
        var isNegative = value.lessThan(0);
        exports.assert.assert(!isNegative, variableName + " cannot be a negative number, found value: " + value.toNumber());
        var hasDecimals = value.decimalPlaces() !== 0;
        exports.assert.assert(!hasDecimals, variableName + " should be in baseUnits (no decimals), found value: " + value.toNumber());
    },
    isString: function (variableName, value) {
        exports.assert.assert(_.isString(value), exports.assert.typeAssertionMessage(variableName, 'string', value));
    },
    isFunction: function (variableName, value) {
        exports.assert.assert(_.isFunction(value), exports.assert.typeAssertionMessage(variableName, 'function', value));
    },
    isHexString: function (variableName, value) {
        exports.assert.assert(_.isString(value) && HEX_REGEX.test(value), exports.assert.typeAssertionMessage(variableName, 'HexString', value));
    },
    isETHAddressHex: function (variableName, value) {
        exports.assert.assert(_.isString(value), exports.assert.typeAssertionMessage(variableName, 'string', value));
        exports.assert.assert(utils_1.addressUtils.isAddress(value), exports.assert.typeAssertionMessage(variableName, 'ETHAddressHex', value));
    },
    doesBelongToStringEnum: function (variableName, value, stringEnum /* There is no base type for every string enum */) {
        var enumValues = _.values(stringEnum);
        var doesBelongToStringEnum = _.includes(enumValues, value);
        var enumValuesAsStrings = _.map(enumValues, function (enumValue) { return "'" + enumValue + "'"; });
        var enumValuesAsString = enumValuesAsStrings.join(', ');
        exports.assert.assert(doesBelongToStringEnum, "Expected " + variableName + " to be one of: " + enumValuesAsString + ", encountered: " + value);
    },
    hasAtMostOneUniqueValue: function (value, errMsg) {
        exports.assert.assert(_.uniq(value).length <= 1, errMsg);
    },
    isNumber: function (variableName, value) {
        exports.assert.assert(_.isFinite(value), exports.assert.typeAssertionMessage(variableName, 'number', value));
    },
    isBoolean: function (variableName, value) {
        exports.assert.assert(_.isBoolean(value), exports.assert.typeAssertionMessage(variableName, 'boolean', value));
    },
    isWeb3Provider: function (variableName, value) {
        var isWeb3Provider = _.isFunction(value.send) || _.isFunction(value.sendAsync);
        exports.assert.assert(isWeb3Provider, exports.assert.typeAssertionMessage(variableName, 'Provider', value));
    },
    doesConformToSchema: function (variableName, value, schema, subSchemas) {
        if (_.isUndefined(value)) {
            throw new Error(variableName + " can't be undefined");
        }
        var schemaValidator = new json_schemas_1.SchemaValidator();
        if (!_.isUndefined(subSchemas)) {
            _.map(subSchemas, schemaValidator.addSchema.bind(schemaValidator));
        }
        var validationResult = schemaValidator.validate(value, schema);
        var hasValidationErrors = validationResult.errors.length > 0;
        var msg = "Expected " + variableName + " to conform to schema " + schema.id + "\nEncountered: " + JSON.stringify(value, null, '\t') + "\nValidation errors: " + validationResult.errors.join(', ');
        exports.assert.assert(!hasValidationErrors, msg);
    },
    isWebUri: function (variableName, value) {
        var isValidUrl = !_.isUndefined(validUrl.isWebUri(value));
        exports.assert.assert(isValidUrl, exports.assert.typeAssertionMessage(variableName, 'web uri', value));
    },
    isUri: function (variableName, value) {
        var isValidUri = !_.isUndefined(validUrl.isUri(value));
        exports.assert.assert(isValidUri, exports.assert.typeAssertionMessage(variableName, 'uri', value));
    },
    assert: function (condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    },
    typeAssertionMessage: function (variableName, type, value) {
        return "Expected " + variableName + " to be of type " + type + ", encountered: " + value;
    },
};
//# sourceMappingURL=index.js.map