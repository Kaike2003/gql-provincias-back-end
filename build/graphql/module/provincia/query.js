"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const provincias_1 = require("@/db/provincias");
exports.query = {
    provincias: () => __awaiter(void 0, void 0, void 0, function* () {
        return provincias_1.provincias.map((item) => item);
    }),
    provincia: (obj_1, _a) => __awaiter(void 0, [obj_1, _a], void 0, function* (obj, { data: { provincia } }) {
        return provincias_1.provincias.find((item) => item.nome === provincia);
    }),
};
