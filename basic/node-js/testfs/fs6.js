/*
  writeFile(), writeFileSync()
  readFile(),readFileSync()

  data.txt----->readFile()--->Buffer ---> data
   small file
  --------------------------
  Stream
   Readable
   Writable -----> EventEmitter
   ----------
   Transform
   Duplex
*/