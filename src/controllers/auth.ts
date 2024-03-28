import { UserSchema } from '../models';

const Auth = {
  create: async (props: any) => {
    const { first_name, last_name, email, password } = props;

    try {
      const newData = new UserSchema({
        first_name,
        last_name,
        email,
        password
      });

      const saveData = await newData.save();

      if (!saveData) {
        throw new Error('Database Error');
      }

      return saveData;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }  
};

export default Auth;
