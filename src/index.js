// import fs from 'node:fs/promises';
// import path from 'node:path';

// const dir = path.join(process.cwd(), 'node-practice');
// await fs.mkdir(dir, { recursive: true });
// const fale = path.join(dir, 'hello.txt');

// await fs.writeFile(fale, 'Привіт! Це мій перший файл у Node.js!', 'utf8');
// console.log('✅ Файл hello.txt створено в папці test!');

// import fs from 'node:fs/promises';
// import path from 'node:path';

// const lalala = path.join(process.cwd(), 'tototo');
// await fs.mkdir(lalala, { recursive: true });
// const fale = path.join(lalala, 'hohoho.txt');
// await fs.writeFile(fale, 'Hello, its my new file Note.js');
// console.log('fale create');

// import fs from 'node:fs/promises';
// import path from 'node:path';

// const a = path.join(process.cwd(), 'fileX');
// await fs.mkdir(a, { recursive: true });
// const b = path.join(a, 'Xfile.txt');
// await fs.writeFile(b, 'X-FILE secret');
// console.log('great');

// import fs from 'node:fs/promises';
// import path from 'node:path';

// const dir = path.join(process.cwd(), 'fileX');
// const file = path.join(dir, 'Xfile.txt');
// try {
//   await fs.unlink(file);
//   console.log('🗑️ Файл Xfile.txt видалено');
// } catch (err) {
//   console.log(err.message);
// }

// try {
//   await fs.rmdir(dir);
//   console.log('🧹 Папку fileX видалено');
// } catch (err) {
//   console.log(err.message);
// }

// import fs from 'node:fs/promises';
// import path from 'node:path';

// const dir = path.join(process.cwd(), 'tototo');
// const file = path.join(dir, 'hohoho.txt');

// try {
//   await fs.unlink(file);
//   console.log('🗑️ Файл hohoho.txt видалено');
// } catch (err) {
//   console.log(err.message);
// }

// try {
//   await fs.rmdir(dir);
//   console.log('🧹 Папку tototo видалено');
// } catch (err) {
//   console.log(err.message);
// }

// import fs from 'node:fs/promises';
// import path from 'node:path';

// const dir = path.join(process.cwd(), 'node-practice');
// const file = path.join(dir, 'hello.txt');

// try {
//   await fs.unlink(file);
//   console.log('🗑️ Файл hello.txt видалено');
// } catch (err) {
//   console.log(err.message);
// }
// try {
//   await fs.rmdir(dir);
//   console.log('🧹 Папку node-practice видалено');
// } catch (err) {
//   console.log(err.message);
// }
