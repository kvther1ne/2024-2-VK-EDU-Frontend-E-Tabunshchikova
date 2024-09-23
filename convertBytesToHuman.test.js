/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from "./convertBytesToHuman";

test("Возвращает false для неправильного типа данных", () => {
  expect(convertBytesToHuman(-1)).toBeFalsy();
  expect(convertBytesToHuman("string")).toBeFalsy();
  expect(convertBytesToHuman(true)).toBeFalsy();
  expect(convertBytesToHuman(NaN)).toBeFalsy();
  expect(convertBytesToHuman(undefined)).toBeFalsy();
  expect(convertBytesToHuman(null)).toBeFalsy();
  expect(convertBytesToHuman([1024, 2048])).toBeFalsy();
  expect(convertBytesToHuman({ bytes: 1024 })).toBeFalsy();
  expect(convertBytesToHuman(() => 1024)).toBeFalsy();
});

test("Возвращает корректное значение для чисел", () => {
  expect(convertBytesToHuman(0)).toBe("0 B");
  expect(convertBytesToHuman(5)).toBe("5 B");
  expect(convertBytesToHuman(1024)).toBe("1 KB");
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB");
  expect(convertBytesToHuman(1610612736)).toBe("1.5 GB");
});
