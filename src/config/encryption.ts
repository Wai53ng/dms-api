import bcrypt from 'bcrypt';

export class Encryption {
  async hasPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    return {
      salt,
      password: hashPassword,
    };
  }

  async comparePassword(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
