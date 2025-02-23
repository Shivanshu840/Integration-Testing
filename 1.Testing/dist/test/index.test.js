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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("../index");
const supertest_1 = __importDefault(require("supertest"));
(0, vitest_1.describe)("this is for sum test", () => {
    (0, vitest_1.it)("sum for 1 or 2 should be 3", () => __awaiter(void 0, void 0, void 0, function* () {
        const { status, body } = yield (0, supertest_1.default)(index_1.app).post("/sum").send({
            a: 1,
            b: 2
        });
        (0, vitest_1.expect)(status).toBe(200);
        (0, vitest_1.expect)(body).toEqual({ answer: 3, id: vitest_1.expect.any(String) });
    }));
});
