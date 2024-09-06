import fs, { createReadStream, createWriteStream, read } from "fs";
const readStream = createReadStream("data.txt");
const writeStream = createWriteStream("xyz.txt");
readStream.pipe(writeStream);