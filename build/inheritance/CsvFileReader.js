"use strict";
// import fs from "fs";
// export abstract class CsvFileReader<T> {
//   data: T[] = [];
//   constructor(public filename: string) {}
//   //ISOLATE ALL THE CUSTOM LOGIC OF MAPPING ROW -> READ METHOD BECOMES REUSABLE
//   abstract mapRow(row: string[]): T;
//   read(): void {
//     this.data = fs
//       .readFileSync(this.filename, {
//         encoding: "utf-8", // Tells readFileSync that we'll have text content inside the file
//       })
//       .split("\n")
//       .map((row: string): string[] => {
//         return row.split(",");
//       })
//       .map(this.mapRow);
//   }
// }
