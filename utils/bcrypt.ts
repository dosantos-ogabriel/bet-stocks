import crypto from "crypto";

class Bcrypt {
  async hash(str: string) {
    return new Promise<string>((resolve, reject) => {
      const salt = crypto.randomBytes(16).toString("hex");

      crypto.scrypt(str, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(salt + "." + derivedKey.toString("hex"));
      });
    });
  }

  async compare(str: string, hash: string) {
    return new Promise<boolean>((resolve, reject) => {
      const [salt, key] = hash.split(".");
      crypto.scrypt(str, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(key == derivedKey.toString("hex"));
      });
    });
  }
}

export default new Bcrypt();
